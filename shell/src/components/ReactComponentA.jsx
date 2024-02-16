import React from "react";
const MicroFrontendA = import("http://localhost:7100/src/main.jsx");

const ReactComponent = () => <MicroFrontendA />;

export default ReactComponent;
