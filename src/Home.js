import { useState } from "react";

const Home = () => {
    // let name = 'Hamisi';
    const [name, setName] = useState('Hamisi');
    const [age, setAge] = useState(25);

    const handleClick = () =>{
        setName('Briva');
        setAge(23);
    }


    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
