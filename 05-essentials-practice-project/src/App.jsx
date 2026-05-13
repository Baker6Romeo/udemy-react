import { useState } from "react";

import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [inputs, setInputs] = useState({});

  function handleValueChange (name, value) {
    console.log("Starting Inputs: ", inputs);
    const updatedInputs = {...inputs, [name]: value}
    console.log("updatedInputs: ", updatedInputs);
    setInputs(updatedInputs);
    console.log("New Inputs value: ", inputs);
    
  }

  console.log(inputs)

  return (
    <main>
      <Header />
      <UserInput onChangeValue={handleValueChange}/>
      <ResultsTable />
    </main>
  )
}

export default App
