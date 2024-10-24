export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment 초기 투자액</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>Annul Investment 연간 투자액</label>
          <input type="number" required></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return 기대 수익율</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>Duration 투자 기간</label>
          <input type="number" required></input>
        </p>
      </div>
    </section>
  );
}