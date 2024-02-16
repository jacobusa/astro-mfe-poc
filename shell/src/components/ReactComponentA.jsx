import React, { useRef, useEffect } from "react";
// const vueStr = "vue";
// const vue = await import(vueStr);
// import { mount } from "app-a";
const appStr = "app-a";
// import { mount } from "app-a";
const { mount } = await import(/* @vite-ignore */ appStr);
// import MicroFrontendA from "http://localhost:7100/bundle.js";
// import { mount } from "http://localhost:7100/src/main.jsx";

const ReactComponent = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};
// const ReactComponent = () => <MicroFrontendA />;
// const ReactComponent = () => <div>hey</div>;

export default ReactComponent;
