import {Link} from 'react-router-dom'

//components
import Searchbar from './Searchbar'

//styles
import './Navbar.css'
import { useTheme } from '../hooks/useTheme'

const Navbar = () => {
  const {color, changeColor} = useTheme()
  return (
    <div className='navbar' style={{background:color}}>
      <nav onClick={()=>changeColor('pink')}>
        <Link to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>

        <Searchbar></Searchbar>

        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  )
}

export default Navbar