// import MicroFrontendC from "http://localhost:7300/bundle.js";

const MicroFrontendC = await import("http://localhost:7300/src/App.tsx").then(
  (app) => app
);

console.log("MicroFrontendC", MicroFrontendC);
const App = () => <MicroFrontendC />;

export default App;
