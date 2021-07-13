import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import HomePage from './components/HomePage'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/signup' component = {SignUp} />
          <Route exact path = '/login' component = {LogIn} />
          <ProtectedRoute exact path = '/dashboard' component = {HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
