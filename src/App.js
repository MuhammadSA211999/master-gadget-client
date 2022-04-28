import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activity from './Pages/Activity/Activity';
import Addactivity from './Pages/Addactivity/Addactivity';
import Header from './Pages/Header/Header';
import ResetPass from './Pages/ResetPass/ResetPassword';
import Signin from './Pages/User/Signin/Signin';
import SignUp from './Pages/User/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import WrongRoute from './Pages/WrongRoute/WrongRoute';
import OrgInfo from './Pages/OrgInfo/OrgInfo';
import Home from './Pages/Home/Home';
import Update from './Pages/Update/Update';
import MyItems from './Pages/MyItems/MyItems';
function App() {
  return (
    <div>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='updateto/:id' element={<Update></Update>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/signIn' element={<Signin></Signin>}></Route>
        <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>
        <Route path='/orgInfo' element={<OrgInfo></OrgInfo>}></Route>
        <Route path='myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/manage' element={<Activity></Activity>}></Route>
        <Route path='/addGadget' element={<Addactivity></Addactivity>}></Route>
        <Route path='*' element={<WrongRoute></WrongRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
