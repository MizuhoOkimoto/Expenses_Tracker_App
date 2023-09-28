import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  //======= Conditions for whether there is an expense or not =======//
  // 1. When there is no expense in the selected year
  // let expensesContent = <p>No expenses found.</p>;
  // 2. When there is a expense in the selected year
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  /* ===========  THIS IS ALTERNATIVE WAY INSIDE RETURN  ============ */
  /* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */
  //==================================================================//
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
