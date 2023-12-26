function DessertsList(props) {
  // Implement the component here.
  // 1.Loop over the desserts array, the data prop to display all desserts using ES6 map function
  
  // Logic

  // 1. Map over the desserts
  // 2. Filter dessert >= 500 calories
  // 3. Sort 

  // My Solution (non ordered)
  // const dessertUnder500 = 
  //     props.data.map(dessert => dessert.calories < 500 ? <li key={dessert.name}>{dessert.name} - {dessert.calories} cal</li> : null
  //   );

  // GPT4 solution (correction)
  // A. Important Filter and Sort first 
  // B. Map the datz
  // 1. Filter desserts with calories < 500 
  // 2. Sort them by calories in ascending order
  const filteredAndSortedDesserts = props.data
    // Filter the dessert based on the calories value
    .filter(dessert => dessert.calories < 500)
    // Sort the desserts based on the calories property
    .sort((a, b) => a.calories - b.calories);
  
  // View
  // Map over the filtered and sorted desserts to generate the JSX
  return (
    <ul>
      {filteredAndSortedDesserts.map(dessert => (
    <li key={dessert.name}>{dessert.name} - {dessert.calories} cal</li>
  ))}
    </ul>
  );
}

export default DessertsList;