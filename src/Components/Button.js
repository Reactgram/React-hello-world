// import React from "react";

// properties
// function Button(props){
//     // props = {name: "Apple", count: 10}
//     // props = {name: "Orange", count: 15}
//     // console.log(props)
//     // props.name = "Banana"

//     // return <button> {props.name},{props.count} </button>
//     return (
//         <div>
//             <button> {props.name}</button>
//             <p>Stock: {props.count} </p>
//         </div>
//     )
// }

// props = {name: "Apple", count: 10}

// let {name, count} = props
// let name = props.name
// let count = props.count

function Button({name, count}){
    
    return (
        <div>
            <button> {name}</button>
            <p>Stock: {count} </p>
        </div>
    )
}


export default Button;