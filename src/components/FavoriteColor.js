import { useState } from "react";
import { ReactDOM } from "react-dom/client";

export const FavoriteColor = () => {
  const [color, setColor] = useState("red");

    function changeColor(){
        setColor("blue");
    }


    return (
        <main>
            <h1>My favorite color is: {color}</h1>
            <button type="button" onClick={changeColor}>Change color</button>
        </main>
  )
}
