// import MicroFrontendA from "http://localhost:7100/bundle.js";
// import MicroFrontendA from "../../../packages/app-a/src/MicroFrontend.jsx";
const MicroFrontendA = import("react-app");
console.log("MicroFrontendA", MicroFrontendA);

const ReactComponent = () => <MicroFrontendA />;

export default ReactComponent;
