import './App.css';
import { Nav } from './components';
import { LandingPage,Form,Detail,Home } from './pages';
import { Route,useLocation} from 'react-router-dom';


function App() {
  
  const location = useLocation()
  return (
    <div className="App">

        {location.pathname !== "/" && <Nav/>}
        <Route exact path="/" render={()=><LandingPage/>} />
        <Route exact path="/home" render={()=><Home/>} />
        <Route exact path="/form" render={()=><Form/>} />
        <Route path="/detail/:id" render={()=><Detail/>} />

    </div>
  );
}

export default App;
