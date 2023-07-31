import React, { ComponentType, Suspense } from 'react';
import { IconProps } from '../types';
import { Fallback } from '../components/Fallback';

/**
 * Wraps the provide component in a `Suspense`, with the provided fallback.
 * This should be used on components whose parent is not easy to control, such as
 * React Navigation screens to be able to lazy load them using `React.lazy`.
 * @param WrappedComponent The component to wrap.
 *
 * @example
 * const SomeScreen = withSuspense(React.lazy(() => import("path/to/some/screen")));
 */
export function withSuspense<P extends IconProps>(
  WrappedComponent: ComponentType<P>
) {
  function ComponentWithSuspense(props: P) {
    return (
      <Suspense fallback={<Fallback {...props} />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  }

  return ComponentWithSuspense;
}
