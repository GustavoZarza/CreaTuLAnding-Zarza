import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBar} from './Components/NavBar.jsx';
import { ItemListContainer } from './Components/ItemListConstainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';

function App() {

  return (
    <>

        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>

    </>     
  )
}

export default App
