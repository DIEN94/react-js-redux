import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector';

export const AppRoutes = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  const auth: boolean = false;
  return (
    isAuth
    ?
    <Routes>
        {privateRoutes.map(route =>
        <Route 
        {...route}
        key={route.path}
        />
        )}
    </Routes>
    :
    <Routes>
        {publicRoutes.map(route =>
        <Route 
        {...route}
        key={route.path}
        />
        )}
    </Routes>
    )}