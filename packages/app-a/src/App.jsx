import React from "react";
import Card from "./Card";
import "./App.css";

const App = () => (
  <div>
    <h1 className="bg-blue text-red-600">we fuckin did it</h1>
    <Card
      href="https://tailwindcss.com/"
      title="React with Tailwind"
      body="A Micro Frontend built with React and Tailwind CSS."
    />
  </div>
);

export default App;
