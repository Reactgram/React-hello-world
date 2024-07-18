
// JSX => Javascript + HTML combined

// import "../style.css" // loading css file

function Basic(){


    let a = 100
    let h1Style = {textAlign:"center", border: "2px solid red"}


    return(
        <div className="basic">
            <h1 style={h1Style}> Hey Welcome to Basics</h1>

            <p> This is a basic component</p>
             <p> {2+3} </p>
             <p> {10>5?"Hello":"Hi"} </p>
             <p> {a} </p>
        </div>
    )

}

export default Basic;