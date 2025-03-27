import {useState} from "react";
import Output from "./Output";


const Greeting = () => {

    const [changeText, setChangeText] = useState(false);

    function changeTextHandler() {
        setChangeText(true);
    }
    return (
        <div>
            <h2>Hello!</h2>
            {!changeText && <Output>What's up?</Output>}
            {changeText && <Output>Text changed!</Output>}
            <button onClick={changeTextHandler}>Change text!</button>
        </div>
    )
}

export default Greeting;