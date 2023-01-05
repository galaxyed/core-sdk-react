import React, { ComponentType } from 'react';
import ICANIDContext, { ICANIDContextInterface } from './icanid-context';

/**
 * Components wrapped in `withICANID` will have an additional `icanid` prop
 */
export interface WithICANIDProps {
<<<<<<< HEAD
  icanid: ICANIDContextInterface;
=======
<<<<<<<< HEAD:src/with-auth0.tsx
  icanid: ICANIDContextInterface;
========
  auth0: ICANIDContextInterface;
>>>>>>>> 09d2924 (with-icanid):src/with-icanid.tsx
>>>>>>> 09d2924 (with-icanid)
}

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `icanid` prop
 *     const { user } = this.props.icanid;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withICANID
 * export default withICANID(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the ICANIDContext.
 *
 * Providing a context as the second argument allows you to configure the ICANIDProvider the ICANIDContext
 * should come from f you have multiple within your application.
 */
const withICANID = <P extends WithICANIDProps>(
  Component: ComponentType<P>,
  context = ICANIDContext
): ComponentType<Omit<P, keyof WithICANIDProps>> => {
  return function WithAuth(props): JSX.Element {
    return (
      <context.Consumer>
        {(auth: ICANIDContextInterface): JSX.Element => (
          <Component {...(props as P)} icanid={auth} />
        )}
      </context.Consumer>
    );
  };
};

export default withICANID;
