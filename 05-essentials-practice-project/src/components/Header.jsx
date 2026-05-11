import logo from '../assets/investment-calculator-logo.png';

export default function Header () {
  return (
    <div id="header">
      <img src={logo} alt="A bag of cash surrounded by gold" />
      <h2>Investment Calculator</h2>
    </div>);
}