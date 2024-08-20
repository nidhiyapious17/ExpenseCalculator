import "./Income.css";
import Table from "../table/Table";
import { useState } from "react";
import Modal from "../modal/Modal";

export default function () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }

  function handleAddIncomeFormButtonClick(e) {
    e.preventDefault();
    setIsModalOpen(false);
  }

  return (
    <div className="income">
      <button onClick={handleButtonClick}>Add Income</button>
      <Table class_name="table" />
      <Modal
        isModalOpen={isModalOpen}
        onClick={handleAddIncomeFormButtonClick}
      />
    </div>
  );
}
