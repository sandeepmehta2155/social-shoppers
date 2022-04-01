import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// import Accounts from "../views/Accounts/index";
import Accounts from "../Layouts/Accounts/index";
import Login from "../views/Login";
import Home from "../views/Home";
import PageNotFound from "../views/404";
import CoCart from "../views/CoCart";
import CreateCoCart from "../views/CreateCoCart"
import JoinCoCart from "../views/JoinCoCart"
import Members from "../views/Members"
import ProductSearchResult from "../views/ProductSearchResult"
import SearchResult from "../views/SearchResult"
import Terms from "../views/Terms"
import Chat from "../views/Chat"
import CoCarts from "../views/CoCarts";
import ResetPassword from "../views/Accounts/ResetPassword";
import RouteRequiresLogin from "./ProtectedRoutes";


const Routers = () => {
  const navigate = useNavigate()
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/accounts/*" element={<RouteRequiresLogin><Accounts /></RouteRequiresLogin>} />
      <Route path="/" element={<Home />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route path="/cocarts" element={<RouteRequiresLogin><CoCarts /></RouteRequiresLogin>} />
      <Route path="/cocarts/:id" element={<RouteRequiresLogin><CoCart /></RouteRequiresLogin>} />
      <Route path="/cocarts/create" element={<RouteRequiresLogin><CreateCoCart /></RouteRequiresLogin>} />
      <Route path="/cocarts/join" element={<RouteRequiresLogin><JoinCoCart /></RouteRequiresLogin>} />
      <Route path="/members" element={<RouteRequiresLogin><Members /></RouteRequiresLogin>} />
      <Route path="/productresults/:query" element={<ProductSearchResult />} />
      <Route path="/results" element={<SearchResult />} />
      <Route path="/chat/:chatId" element={<Chat />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default Routers;
