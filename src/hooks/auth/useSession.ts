import { useEffect } from 'react';

import { api } from '../../utils/api';
import { useAuth } from './useAuth';

export function useSession() {
  const { authToken, isLoading: isLoadingAuth } = useAuth();
  const {
    data: session,
    isLoading: isLoadingSession,
    ...rest
  } = api.auth.getSession.useQuery(undefined, {
    enabled: !!authToken,
  });
  const utils = api.useUtils();
  useEffect(() => {
    utils.invalidate();
  }, [authToken]);
  const isLoading = isLoadingAuth || (!!authToken && isLoadingSession);
  return { session: authToken ? session : null, isLoading, ...rest };
}
