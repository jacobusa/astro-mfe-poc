import React from "react";
import { createRoot } from "react-dom/client";
import MicroFrontend from "./MicroFrontend";

export const mount = (el) => {
  createRoot(el).render(
    <React.StrictMode>
      <main>
        <MicroFrontend />
      </main>
    </React.StrictMode>
  );
};
