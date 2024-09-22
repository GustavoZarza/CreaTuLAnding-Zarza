import './App.css'

import {NavBar} from './Components/NavBar.jsx'
import { ItemListContainer } from './Components/ItemListContainer/ItemListConstainer.jsx';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a tu administrador de finanzas"}/>
 
      
    </div>
     
  )
}

export default App
