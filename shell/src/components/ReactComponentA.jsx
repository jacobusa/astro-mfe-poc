import MicroFrontendA from "http://localhost:7100/bundle.js";
// const MicroFrontendA = await import(
//   "http://localhost:7100/src/MicroFrontend.jsx"
// ).then((app) => app);
// console.log("MicroFrontendA", MicroFrontendA);

const ReactComponent = () => <MicroFrontendA />;

export default ReactComponent;
