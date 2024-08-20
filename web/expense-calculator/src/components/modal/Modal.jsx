import "./Modal.css";

export default function Modal({ isModalOpen, onClick }) {
  if (!isModalOpen) return null;

  return (
    <div className="modal-ovarlay">
      <div className="modal-content">
        <form className="income-form">
          <div className="income-form-container">
            <button type="button" className="modal-close" onClick={onClick}>
              X
            </button>
            <label>Income</label>
            <input type="number" name="income" />
            <label>Way of Income</label>
            <input type="text" name="way_of_income" />
            <label>Savings method</label>
            <input type="text" name="savings_method" />
            <button onClick={onClick}>Add Income</button>
          </div>
        </form>
      </div>
    </div>
  );
}
