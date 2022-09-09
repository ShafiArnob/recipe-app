import './App.css'
import {Routes,Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Create from './pages/create/Create';
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ThemeSelector></ThemeSelector>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/search' element = {<Search></Search>}></Route>
          <Route path='/recipes/:id'element = {<Recipe></Recipe>}></Route>
        </Routes>
    </div>
  );
}

export default App
