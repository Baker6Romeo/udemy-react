export default function UserInput ({onChangeValue}) {

  function handleChange (event) {
    onChangeValue(event.target.name, event.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
        <label>Initial Investment</label>
        <input
          name="initialInvestment"
          onChange={handleChange}
          type="number"
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            name="annualInvestment"
            onChange={handleChange}
            type="number"/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            name="expectedReturn"
            onChange={handleChange}
            type="number"/>
        </p>
        <p>
          <label>Duration</label>
          <input
            name="duration"
            onChange={handleChange}
            type="number"/>
        </p>
      </div>
    </section>
  );
}