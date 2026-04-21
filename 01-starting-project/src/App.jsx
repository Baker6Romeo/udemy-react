import reactImg from "./assets/react-core-concepts.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get krunk!</h2>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptionModifier} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const descriptionModifier = reactDescriptions[getRandomInt(2)];

function getRandomInt (max) {
   return Math.floor(Math.random() * (max + 1))
}

export default App;
