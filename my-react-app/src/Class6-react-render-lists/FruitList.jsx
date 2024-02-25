
function FruitList() {

    const fruits = [{id: 1, name:'apple', calories: 95},
        {id: 2, name: 'banana', calories: 105}, {id: 3, name: 'orange', calories: 45},
        {id: 4, name:'pineapple', calories: 37}, {id: 5, name:'kiwi', calories: 61}];

    fruits.sort((a, b) => a.name.localeCompare(b.name)) // alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name)) // reverse alphabetical order
    //fruits.sort((a, b) => a.calories - b.calories) // numeric order
    //fruits.sort((a, b) => b.calories - a.calories) // reverse numeric order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 70);
    // change fruits to lowCalFruits in listItems to display only low calories fruits.
    //(fruit can be changed to lowCalFruits as a good practice).

    const highCalFruits = fruits.filter(fruit => fruit.calories > 70);
    // change fruits to highCalFruits in listItems to display only high calories fruits.

    const listItems = fruits.map(fruit =>
        <li key = {fruit.id}>{fruit.name.charAt(0).toUpperCase() +
            fruit.name.slice(1)}:&nbsp;
            <b>{fruit.calories} calories</b></li>);

    return (
        <ol>{listItems}</ol>
    );
}
export default FruitList;