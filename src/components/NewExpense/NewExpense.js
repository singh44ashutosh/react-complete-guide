import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formMode, setFormMode] = useState("VIEW");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormMode("VIEW");
  };

  const addNewExpenseHandler = () => setFormMode("ADD");

  const cancelHandler = () => setFormMode("VIEW");

  if (formMode === "VIEW") {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );
};

export default NewExpense;
