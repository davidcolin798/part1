
import './App.css';
import Mensaje from './mensaje.js';

const Description=()=>{
  return<p>esta app del curso de fullstack</p>
}
const App = () =>{  
  return (
    <div className="App">
      <Mensaje messaje='hola perrillos'/>
      <Description/>
    </div>
  );
}

export default App;
