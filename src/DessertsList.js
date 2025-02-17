// LOGIC
// Child component
// Using destructuring to use 'data' directly
/* Another approach would have been to write DessertsList(props.data) 
but then it would have been needed to write props.data instead of just data later in the code*/
function DessertsList({ data }) {
// Access the desserts by working on the data property taken from the props object
  const filteredAndSortedDesserts = data 
    // Filter the dessert based on the calories value
    .filter(dessert => dessert.calories < 500)
    // Sort the desserts based on the calories property in an ascending order
    .sort((a, b) => a.calories - b.calories)
    // Iterate over each element of the array and create a new array displaying the content the way we want 
    .map(dessert => (
      <li key={dessert.name}>{dessert.name} - {dessert.calories} cal</li>));
  // VIEW
  return (
    <ul>
      {filteredAndSortedDesserts}
    </ul> 
  );
}
export default DessertsList;