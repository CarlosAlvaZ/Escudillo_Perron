import {useState} from 'react'
import './App.css';
import Logo from "./logo.png"
import Hearth from "./hearth.png"

function App() {

  const [clickState, setClickState] = useState(false)

  return (
    <main>

        <h1> O Barçelinha </h1>

        <img className="imagen" src={Logo} alt="Loguito" onClick={()=>{
          setClickState(true)
          setTimeout(()=>setClickState(false), 1000)
        }}/>

        {clickState && <div className="hearth">
            <img src={Hearth} alt="Coraçâon" />
        </div>}

    </main>
  );
}

export default App;
