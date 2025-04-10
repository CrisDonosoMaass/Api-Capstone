import { useMemo } from 'react';
import { useLocale } from 'use-intl';

export function useLocaleNumericFormat(currency?: string) {
  const locale = useLocale();
  const isLatinFormat = ['es'].includes(locale);

  const numericFormat = useMemo(
    () => ({
      thousandSeparator: isLatinFormat ? '.' : ',',
      decimalSeparator: isLatinFormat ? ',' : '.',
      decimalScale: ['CLP'].includes(currency || '') ? 0 : 2,
    }),
    [isLatinFormat, currency],
  );

  return numericFormat;
}
