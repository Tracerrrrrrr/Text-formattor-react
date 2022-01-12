import './App.css';
import Textform from './components/Textform'
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import About from './components/Alert';
  function App(){
  return(
   <>
    <Navbar title="Textutils" aboutText="About us"/>
    <Alert title="Hey! enjoy your day"/>
    <div className="container">
    <Textform heading="Enter the text"/>
    <About/>
    </div>
    
   </>
  )
  };
export default App;