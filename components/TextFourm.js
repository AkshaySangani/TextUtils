import React, { useEffect, useState } from 'react'

export default function TextFourm(props) {
    const [text, setText] = useState("");
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const handleOnChange = (event) => {
        // console.log("hiii");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("hi" + text);
        let newUpper = text.toUpperCase();
        setText(newUpper)
    }
    const handleLoClick = () => {
        // console.log("hi" + text);
        let newLower = text.toLowerCase();
        setText(newLower)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        })
        
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={`container my-5  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h1>Enter your text here:</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#6e767e7a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder='Enter Text here' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#6e767e7a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={time} onChange={handleOnChange} id="exampleFormControlTextarea1" />
            </div>
            <button type="button " onClick={handleUpClick} className="btn btn-primary mx-2 my-1">Convert Into uppercase</button>
            <button type="button" onClick={(E) => { handleLoClick(E, "PEA") }} className="mx-2 my-1 btn btn-primary">Convert Into LOWERCAS</button>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((element) => element.length !== "0").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Average minutes to read above text</p>
            </div>

        </div>
    )
} 
