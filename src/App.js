// React shortcuts: https://www.freecodecamp.org/news/react-shortcuts-that-will-instantly-boost-your-productivity/
// imr

import Expenses from "./components/Expenses/Expenses";

// Can be replace function: const App = () => { return(...); }
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
