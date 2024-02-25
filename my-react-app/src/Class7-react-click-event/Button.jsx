
function Button() {

    // const handleClick2 = (name) => console.log(`Hello, ${name}`);
    //return <button onClick={() => handleClick2("Zett")}>Click me</button>;

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} you clicked me ${count} times, that´s enough!`);
    //     }
    // };
    //
    // return <button onClick= {() => handleClick("Zett")}>Click me</button>;

    const handleClick = (e) => {
        e.target.textContent = "Clicked!";
        e.target.style.color = '#69a625';
    }

    const handleDoubleClick = (e) => {
        e.target.textContent = "Double Clicked!!";
        e.target.style.color = '#940000';
    }

    return <button onClick= {(e) => handleClick(e)}
                   onDoubleClick={(e) => handleDoubleClick(e)}>Click me!</button>;

}
export default Button;