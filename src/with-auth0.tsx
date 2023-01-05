import React, { ComponentType } from 'react';
import ICANIDContext, { ICANIDContextInterface } from './icanid-context';

/**
 * Components wrapped in `withAuth0` will have an additional `icanid` prop
 */
export interface WithAuth0Props {
  auth0: ICANIDContextInterface;
}

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the ICANIDContext.
 *
 * Providing a context as the second argument allows you to configure the ICANIDProvider the ICANIDContext
 * should come from f you have multiple within your application.
 */
const withAuth0 = <P extends WithAuth0Props>(
  Component: ComponentType<P>,
  context = ICANIDContext
): ComponentType<Omit<P, keyof WithAuth0Props>> => {
  return function WithAuth(props): JSX.Element {
    return (
      <context.Consumer>
        {(auth: ICANIDContextInterface): JSX.Element => (
          <Component {...(props as P)} auth0={auth} />
        )}
      </context.Consumer>
    );
  };
};

export default withAuth0;
