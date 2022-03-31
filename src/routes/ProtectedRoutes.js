import React, { FC } from "react";
import { Route, Navigate } from "react-router-dom";
import api from "../api";
import Home from "../views/Home";

const RouteRequiresLogin = ({ children }) => {

    return api.configurations.GET_CURRENT_USER() ? children : <Navigate to="/" />
}
export default RouteRequiresLogin;