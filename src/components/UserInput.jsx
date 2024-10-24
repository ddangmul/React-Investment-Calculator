export default function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment 초기 투자액</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annul Investment 연간 투자액</label>
          <input
            type="number"
            required
            value={userInput.annulaInvestment}
            onChange={(event) =>
              onChangeInput("annulaInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return 기대 수익율</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration 투자 기간</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
