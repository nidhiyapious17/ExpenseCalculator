export default function Table({ class_name }) {
  const data = [
    {
      id: 1,
      name: "John Doe",
      way_of_income: 28,
      amount: 20000,
      savings_method: "cash",
    },
    {
      id: 2,
      name: "John Doe",
      way_of_income: 28,
      amount: 20000,
      savings_method: "cash",
    },
    {
      id: 3,
      name: "John Doe",
      way_of_income: 28,
      amount: 20000,
      savings_method: "cash",
    },
  ];

  return (
    <table className={class_name}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Way of Income</th>
          <th>Amount</th>
          <th>Cash/Account</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.way_of_income}</td>
            <td>{item.amount}</td>
            <td>{item.savings_method}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
