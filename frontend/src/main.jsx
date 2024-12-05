import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route ,RouterProvider } from 'react-router-dom';
import store from '../store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ProductDetails from './screens/ProductDetails.jsx';
import ProductGrid from './screens/ProductGrid.jsx';
import ProductAddCart from './screens/ProductAddCart.jsx';
import ProductAddWishlist from './screens/ProductAddWishlist.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
         <Route index={true} path='/' element={<HomeScreen/>}/>
         <Route path='/login' element={<LoginScreen/>}/>
         <Route path='/register' element={<RegisterScreen/>}/>
         <Route path='' element={<PrivateRoute />}>
         <Route path='/profile' element={<ProfileScreen />} />
         <Route path='/ProductDetails' element={<ProductDetails />} />
         <Route path="/product/:id" element={<ProductGrid/>}/>
         <Route path="/cart" element={<ProductAddCart/>}/>
         <Route path="/wishlist" element={<ProductAddWishlist/>}/>
         </Route>
    </Route> 
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
  </Provider>

)


