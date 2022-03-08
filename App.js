
import { useEffect, useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextFourm from "./components/TextFourm";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
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
      // window.clearTimeout(timer);
    })
  }
  // window.clearTimeout();
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [mode]);
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextFourm mode={mode} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
