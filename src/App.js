import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }
  const togglemode = ()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#2C3E50';
      showAlert("darkmode has been enabled!","success");
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("darkmode has been disbled!","success");
    }

  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm Heading="Try Textutils : Word Counter,Character Counter,Remove Extra Spaces." mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route element={<TextForm Heading="Try Textutils : Word Counter,Character Counter,Remove Extra Spaces." mode={mode} showAlert={showAlert}/>} />
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
