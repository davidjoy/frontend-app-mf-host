import { loadRemote } from '@module-federation/runtime/.';
import { lazy, useEffect, useState } from 'react';

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    const Module = await loadRemote(`${scope}/${module.slice(2)}`);
    return Module;
  };
}

const useDynamicScript = url => {
  const [ready, setReady] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    if (!url) {
      return () => {};
    }

    setReady(false);
    setErrorLoading(false);

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    errorLoading,
    ready,
  };
};

const useFederatedComponent = (remoteUrl, scope, module) => {
  // const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = useState(null);

  const { ready, errorLoading } = useDynamicScript(remoteUrl);
  useEffect(() => {
    // if (Component) {
    setComponent(null);
    // }
    // Only recalculate when key changes
  }, [remoteUrl, scope, module]);

  useEffect(() => {
    if (ready && !Component) {
      const Comp = lazy(loadComponent(scope, module));
      setComponent(Comp);
    }
    // key includes all dependencies (scope/module)
  }, [Component, ready, remoteUrl, scope, module]);

  return { errorLoading, Component };
};

export default useFederatedComponent;
