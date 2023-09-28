import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addNewExpense, setAddNewExpense] = useState(false); // Hide new expense controls(form) as default
  const [showNewExpenseButton, setShowNewExpenseButton] = useState(true); // Display 'Add New Expense' button as default

  // There is alternative way to write ONLY ONE useState
  //   const [userInput, setUserInput] = useState({
  //     enteredtitle: "",
  //     enteredAmount: "",
  //     enteredDate: ""
  //   })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      // ABOUT "T00:00:00" -> https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
      date: new Date(enteredDate + "T00:00:00"),
    };
    // Use the expenseData as a parameter of the saveExpenseDataHandler
    // inside the NewExpense Component
    props.onSaveExpenseData(expenseData);
    // Set Two-Way Binding with adding 'value' in the input tag
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // These are controling 'Add New Expense' form.
    setAddNewExpense(false); // Hide new expense controls
    setShowNewExpenseButton(true); // Display 'Add New Expense' Button
  };

  // This is for expanding "new expense controls"
  const expandNewExpenseHandler = () => {
    setAddNewExpense(true);
  };
  // This is for "Add Expense" button
  const showAddExpenseButtonHandler = () => {
    setShowNewExpenseButton(false);
  };
  // This is for "Cancel" button
  const cancelButtonHandler = () => {
    setAddNewExpense(false); // Hide new expense controls
    setShowNewExpenseButton(true); // Display 'Add New Expense' Button
  };

  return (
    <form onSubmit={submitHandler}>
      {showNewExpenseButton && (
        <button
          type="submit"
          onClick={() => {
            expandNewExpenseHandler();
            showAddExpenseButtonHandler();
          }}
        >
          Add New Expense
        </button>
      )}

      <div>
        {addNewExpense && (
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredtitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>

            <div className="new-expense__actions">
              <button type="button" onClick={cancelButtonHandler}>
                Cancel
              </button>
              <button type="submit">Add Expense</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
export default ExpenseForm;
