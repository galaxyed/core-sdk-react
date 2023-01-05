import { useContext } from 'react';
import { User } from '@icanid/icanid-sdk-spa-js';
import Auth0Context, { Auth0ContextInterface } from './auth0-context';

/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useICANID<TUser>();
 * ```
 *
 * Use the `useICANID` hook in your components to access the auth state and methods.
 *
 * TUser is an optional type param to provide a type to the `user` field.
 */
const useICANID = <TUser extends User = User>(
  context = Auth0Context
): Auth0ContextInterface<TUser> =>
  useContext(context) as Auth0ContextInterface<TUser>;

export default useICANID;
