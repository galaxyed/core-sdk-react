import { useContext } from 'react';
import { User } from '@icanid/icanid-sdk-spa-js';
import ICANIDContext, { ICANIDContextInterface } from './icanid-context';

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
  context = ICANIDContext
): ICANIDContextInterface<TUser> =>
  useContext(context) as ICANIDContextInterface<TUser>;

export default useICANID;
