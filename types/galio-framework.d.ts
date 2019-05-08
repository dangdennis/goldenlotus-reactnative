declare module 'galio-framework' {
  import * as React from 'react';

  export interface BlockProps {
    children?: (false | Element)[];
    row?: boolean;
    flex?: boolean | number;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    card?: boolean;
    left?: boolean;
    shadow?: boolean;
    space?: string;
    fluid?: boolean;
    height?: number;
    width?: number;
    shadowColor?: string;
    safe?: boolean;
    styles?: any;
    theme?: any;
  }

  export class Block extends React.Component<BlockProps> {}

  export interface GalioProviderProp {
    children?: React.ReactElement;
    theme?: any;
  }
  export class GalioProvider extends React.Component<GalioProviderProp> {}
}
