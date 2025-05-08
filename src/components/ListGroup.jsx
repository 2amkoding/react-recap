function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Saint Louis",
    "Seoul",
  ];

  return (
    <>
      <h1 className="w-48 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        Title
      </h1>

      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
