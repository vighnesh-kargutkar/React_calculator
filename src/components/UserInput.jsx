export default function UserInput({ onChange, userInput }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Inital Investment</label>
            <input
              type="Number"
              required
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="Number"
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Expected Return</label>
            <input
              type="Number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="Number"
              required
              value={userInput.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}
