import React from 'react'
import { Login } from '../pages/Login';
import { Event } from '../pages/Event';
import { Navigate, RouteProps } from 'react-router-dom';


export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    REDIRECT = '*'
}

export const publicRoutes: RouteProps[] = [
    {path: RouteNames.LOGIN, element:<Login/>},
    {path: RouteNames.REDIRECT, element:<Navigate to={RouteNames.LOGIN} replace />}
]

export const privateRoutes: RouteProps[] = [
    {path: RouteNames.EVENT, element:<Event/>},
    {path: RouteNames.REDIRECT, element:<Navigate to={RouteNames.EVENT} replace />}
]