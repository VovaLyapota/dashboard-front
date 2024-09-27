interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  export default ReactComponent;
}
declare module '*.png' {
  const value: string;
  export default value;
}

/// <reference types="vite/client" />
