import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activity from './Pages/Activity/Activity';
import Addactivity from './Pages/Addactivity/Addactivity';
import Header from './Pages/Header/Header';
import ResetPass from './Pages/ResetPass/ResetPassword';
import Signin from './Pages/User/Signin/Signin';
import { Toaster } from 'react-hot-toast';
import WrongRoute from './Pages/WrongRoute/WrongRoute';
import Home from './Pages/Home/Home';
import Inventory from '../src/Pages/Inventory/Inventory'
import Update from './Pages/Update/Update';
import MyItems from './Pages/MyItems/MyItems';
import CreateUser from './Pages/User/SignUp/CreateUser';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
function App() {
  return (
    <div>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/updateto/:id' element={<RequireAuth>
          <Update></Update>
        </RequireAuth>}></Route>
        <Route path='/createUser' element={<CreateUser></CreateUser>}></Route>
        <Route path='/signIn' element={<Signin></Signin>}></Route>
        <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <Activity></Activity>
        </RequireAuth>}></Route>
        <Route path='/addGadget' element={<RequireAuth>
          <Addactivity></Addactivity>
        </RequireAuth>}></Route>
        <Route path='*' element={<WrongRoute></WrongRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
