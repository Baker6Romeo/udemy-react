import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples selectedTopic/>
      </main>
    </>
  );
}

export default App;
