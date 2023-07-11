import "./App.css";
import TaskInfo from "./components/InputForm/TaskInfo";
import InputForm from "./components/InputForm/InputForm";
import { Context } from "./context";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("Dark");
  return (
    <div className="App">
      <Context.Provider value={[theme, setTheme]}>
        <TaskInfo />
        <InputForm />
      </Context.Provider>
    </div>
  );
}

export default App;
