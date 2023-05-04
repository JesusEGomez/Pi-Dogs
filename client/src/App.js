import './App.css';
import { Nav } from './components';
import { LandingPage,Form,Detail,Home } from './pages';
import { Route,useLocation} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function App() {
  const history = useHistory()

  const onSearch = async (name)=>{
    if(!name) return alert("Debes escribir un nombre")
    try {
      const dogFound = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
      const dog = dogFound.data
      history.push(`/detail/${dog.id}`)
    } catch (error) {
      alert("el perro no existe")
      console.error(error.message)
        
    }
    
  }
  const clickHandler =(id)=>{
    history.push(`/detail/${id}`)
}
  
  const location = useLocation()
  return (
    <div className="App">

        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
        <Route exact path="/" render={()=><LandingPage/>} />
        <Route exact path="/home" render={()=><Home clickHandler={clickHandler} />} />
        <Route exact path="/form" render={()=><Form/>} />
        <Route path="/detail/:id" render={()=><Detail/>} />

    </div>
  );
}

export default App;
