import { isEqual } from 'lodash';

export function getCustomFetch(): typeof fetch {
  return async function myFetch(url, options) {
    if (typeof url === 'string' && options?.method === 'GET') {
      const urlObj = new URL(url);
      const isBatch = urlObj.searchParams.get('batch') === '1';
      if (isBatch) {
        const rawInput = urlObj.searchParams.get('input');
        const pathnames = urlObj.pathname.slice(6).split(',');
        const batchInput = rawInput ? JSON.parse(rawInput) : {};
        const uniqueEndpoints: {
          pathname: string;
          input: object;
          sourceIndexes: number[];
        }[] = [];
        pathnames.forEach((pathname, idx) => {
          const input = batchInput[idx];
          const endpoint = uniqueEndpoints.find(
            (x) => x.pathname === pathname && isEqual(x.input, input),
          );
          if (!endpoint) {
            uniqueEndpoints.push({ pathname, input, sourceIndexes: [idx] });
          } else {
            endpoint.sourceIndexes.push(idx);
          }
        });
        const newPathnames = uniqueEndpoints.map((x) => x.pathname);
        const newInput = uniqueEndpoints.reduce((result, endpoint, idx) => {
          return { ...result, [idx]: endpoint.input };
        }, {});

        urlObj.pathname = `/trpc/${newPathnames}`;
        urlObj.searchParams.set('input', JSON.stringify(newInput));

        const response = await fetch(urlObj, options);
        const data = await response.json();

        const inflatedResponse: unknown[] = [];
        uniqueEndpoints.forEach((endpoint, i) => {
          for (const j of endpoint.sourceIndexes) {
            inflatedResponse[j] = data[i];
          }
        });
        return new Response(JSON.stringify(inflatedResponse), {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
        });
      }
    }

    const response = await fetch(url, options);
    return response;
  };
}

const customFetch = getCustomFetch();

export default customFetch;
