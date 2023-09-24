import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* When the user save the data(value of the prop), this prop triggers */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
