import React from 'react'
import { Outlet , Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
export const VerifiedRout = () => {
    const {authUser} = useAuth()
  return authUser ? <Outlet/> : <Navigate to={'/login'}/>;
}