import componentImg from "./assets/components.png";
import reactImg from "./assets/react-core-concepts.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
            title="Components"
            description="The core UI building block"
            img={componentImg}/>
          </ul>
          </section>
        
      </main>
    </div>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
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
