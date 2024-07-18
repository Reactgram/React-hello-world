// import React from 'react';
import Button from "./Components/Button.js"
import Review from "./Components/Review.js";
import Basic from "./Components/Basic.js";

import "./style.css"


function App(){
    return(
        <div>
            <h1>Fruit Farm</h1>
            <p>This is a beautful Fruit Farm</p>
            {/* <button>Apple </button>
            <button>Orange </button>
            <button>Mango</button> */}
            <Button  name="Apple"  count={10}
            />
            <Button  name="Orange"  count={15}/>
            {/* <Button /> */}

            {/* <h2>Review 1: Your Farm is amazing</h2>
            <h2>Review2: Thank you for the amazing fruits</h2>
            <h2>Review3:Thank you for the amazing scenery</h2> */}

            <Review />
            <Review />
            <Review />


            <Basic />


        </div>
    ) 
          
}




export default App;