import { User } from '@icanid/icanid-sdk-spa-js';

/**
 * The auth state which, when combined with the auth methods, make up the return object of the `useICANID` hook.
 */
export interface AuthState<TUser extends User = User> {
  error?: Error;
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: TUser;
}

/**
 * The initial auth state.
 */
export const initialAuthState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
};
