import logo from '../assets/investment-calculator-logo.png';

export default function Header () {
  return (
    <div id="header">
      <img src={logo} alt="Logo of a bag of cash surrounded by gold" />
      <h1>Investment Calculator</h1>
    </div>);
}