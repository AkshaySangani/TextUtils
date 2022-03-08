// import About from "./component/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextFourm from "./components/TextFourm";


function combine() {
    //dark mode
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null);

    //dark mode
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#343d42f0';
            showAlert("dark mode was enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("dark mode was disabled", "success");
        }
    }


    //alert
    const showAlert = (massage, type) => {
        setAlert({
            msg: massage,
            type: type,
            timer,
            // window.clearTimeout(timer);
        })
    }
    var timer = setTimeout(() => {
        setAlert(null);
    }, 2000);
    // window.clearTimeout();


    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3"> <TextFourm heading="Enter text here" mode={mode} /></div>
            {/* <About/> */}

        </>
    );
}

export default combine;
