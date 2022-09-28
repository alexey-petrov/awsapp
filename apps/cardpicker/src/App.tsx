import React from "react";
import "./App.css";
import { Shell } from "ui";
import { CardPicker } from "./components/CardPicker/CardPicker";

function App() {
  return (
    <Shell title="shell main">
      <CardPicker />
    </Shell>
  );
}

export default App;
