
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArrogayWebsite from './component/pages/Home';
import ProductCard from './component/pages/product';
import NotFoundPage from './component/pages/notFound';
import ReturnFavories from './component/pages/ReturnFavoris';
import LoginPage from './component/pages/login';
import ForgotPasswordPage from './component/pages/forgetPassword';
import ContactPage from './component/pages/contactPage';
import AccountCreationForm from './component/pages/connexion';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<ArrogayWebsite/>}/>
      <Route path='/product' element={<ProductCard/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='/Favorites' element={<ReturnFavories/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/ForgotPassword' element={<ForgotPasswordPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/signup' element={<AccountCreationForm/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
