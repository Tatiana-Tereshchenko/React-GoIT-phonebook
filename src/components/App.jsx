
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import SharedLayout from './SharedLayout/SharedLayout';
import Container from '@mui/material/Container';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
     isRefreshing ? <h1>Loading... </h1> : (<Container maxWidth="xl">
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts"  component={<Register />}/>} /> 
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts"  component={<Login />}/>} /> 
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login"  component={<Contacts />} />} /> 
      </Route>
    
      </Routes>
      </Container > )
    
  )
  };