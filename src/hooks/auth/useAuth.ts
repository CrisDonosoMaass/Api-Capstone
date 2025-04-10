import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

// This hook can be used to access the user info.
export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <AuthProvider />');
    }
  }

  return value;
}
