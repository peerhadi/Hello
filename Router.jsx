import {Routes,Route,BrowserRouter} from 'react-router-dom';
import P from './P';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup'
export default function Router(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/P/:id' element={<P/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
