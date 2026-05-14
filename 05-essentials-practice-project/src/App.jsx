import { useState } from "react";

import { calculateInvestmentResults } from "./util/investment";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState([]);

  function handleValueChange (name, value) {
      const updatedInputs = {...inputs, [name]: value}
      setInputs(updatedInputs);
  }

  function isValidInputs() {
    console.log(Object.values(inputs))
    return Object.values(inputs).every(x => x !== null)
  }

  console.log(isValidInputs());

  let displayedResults = [...results];

  return (
    <main>
      <Header />
      <UserInput onChangeValue={handleValueChange}/>
      <ResultsTable results="results"/>
    </main>
  )
}

export default App
