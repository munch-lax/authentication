import {BrowserRouter,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
    </BrowserRouter>
  );
}

export default App;
