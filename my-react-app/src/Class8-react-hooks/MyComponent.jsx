import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(19);
    const [birthday, setBirthday] = useState("Is it your birthday?");
    const [textColor, setTextColor] = useState("black");

    const updateName = () => {
        setName("Zett");
    }

    const updateAge = (e) => {
        setAge(age + 1)
        e.target.style.display = 'none';
        setBirthday("Happy Birthday! :D");
        setTextColor("blue");
    }

    return(
        <div>
            <p>Name: {name}, Age: {age}</p>
            <button onClick={updateName}>Set Name</button>
            <p style={{color:textColor}} >{birthday}</p>
            <button onClick={(e) => updateAge(e)}>Yes! :D</button>
        </div>

    );
}
export default MyComponent;