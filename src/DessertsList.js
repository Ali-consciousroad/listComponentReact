// Child component
function DessertsList(props) {
  // Loop over the desserts array, the data prop to display all desserts using ES6 map function

  // Logic
  // A. Important Filter and Sort first for better efficiency
  // B. Map the data
  // 1. Filter desserts with calories < 500 
  // 2. Sort them by calories in ascending order
  // 3. Map over the filtered and sorted desserts to generate the JSX

// Access the desserts by working on the data property taken from the props object
  const filteredAndSortedDesserts = props.data 
    // Filter the dessert based on the calories value
    .filter(dessert => dessert.calories < 500)
    // Sort the desserts based on the calories property in an ascending order
    .sort((a, b) => a.calories - b.calories)
    // Iterate over each element of the array and create a new array displaying the content the way we want 
    .map(dessert => (
      <li key={dessert.name}>{dessert.name} - {dessert.calories} cal</li>));
  // View
  return (
    <ul>
      {filteredAndSortedDesserts}
    </ul> 
  );
}
export default DessertsList;