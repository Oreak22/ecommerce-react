import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Loader from './components/Loaders';
import Page from './Page/Page';
import About from './Page/About';
import { LoadingContent, LoadingState } from './components/LoadingState';
import SignUp from './Page/SignUp';
import SignIn from './Page/SignIn';
import AdminSignin from './Page/admin/AdminSignin';
import AdminRegister from './Page/admin/AdminRegister';
import Recovermail from './Page/Recovermail';
import ChangePassword from './Page/ChangePassword';
import Cartpage from './Page/Cartpage';
import Wishlist from './Page/Wishlist';
import Account from './Page/Account';
import Pagenotfound from './Page/Pagenotfound';
import Contact from './Page/Contact';
import AdminPage from './Page/admin/Page';
import AddGoods from './Page/admin/AddGoods';
import Edit from './Page/admin/AdminComponent/Edit';
import DiscriptionPage from './Page/DiscriptionPage';


const App=()=> {
  const [isLoading, setIsLoading] = useState(false);
  return (
  <LoadingState>
    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
        {/*  */}
      <Route path='/account' element={<Account/>}/>
      <Route path='/mycart' element={<Cartpage/>}/>
      <Route path='/mywishlist' element={<Wishlist/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutproduct' element={<DiscriptionPage/>}/>
      {/* recover account */}
      <Route path='/auth/recover' element={<Recovermail/>}/>
      <Route path='/auth/resetpassword' element={<ChangePassword/>}/>

      {/* admin pagies */}
      <Route path='/admin/signin' element={<AdminSignin/>}/>
      <Route path='/admin/register' element={<AdminRegister/>}/>
      <Route path='/admin/page' element={<AdminPage/>}/>
      <Route path='/admin/page/Addgoods' element={<AddGoods/>}/>
      <Route path='/admin/page/EditGoods' element={<Edit/>}/>
      {/* error page */}
      <Route path='/*' element={<Pagenotfound/>}/>
    </Routes>
      <LoaderWrapper/>
  </LoadingState>
  );
}


export default App;

const LoaderWrapper = () => {
  const { isLoading } = useContext(LoadingContent);

  return isLoading ? <Loader /> : null;
};
