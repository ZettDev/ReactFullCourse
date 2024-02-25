import List from "./List.jsx";

function App() {
    const fruits = [{id: 1, name:'apple', calories: 95},
        {id: 2, name: 'banana', calories: 105}, {id: 3, name: 'orange', calories: 45},
        {id: 4, name:'pineapple', calories: 37}, {id: 5, name:'kiwi', calories: 61}];
    const vegetables = [{id: 6, name:'potato', calories: 110},
        {id: 7, name: 'celery', calories: 15}, {id: 8, name: 'carrot', calories: 25},
        {id: 9, name:'corn', calories: 63}, {id: 10, name:'broccoli', calories: 50}];
    return(
        <>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
        </>
    );
    // short-circuiting, since if false && -, it won't read the second value
}

export default App
