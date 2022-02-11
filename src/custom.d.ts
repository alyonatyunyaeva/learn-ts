declare module '*.css' {
    const css: {[key: string]: string};
    export default css;
}

declare module '*.svg' {
 import React from "react";
    const ReactComponent: React.ComponentType<React.SVGAttributes<SVGElement>>;
    export default ReactComponent;
}