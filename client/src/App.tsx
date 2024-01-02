import React, { useEffect } from "react";

import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom";

import {
  AnimatedHeader,
  AnimatedMain,
  GlobalStyle
} from "./assets/styles/appStyle.style";

import { Footer } from "./components/footer/footer";

import { useAuth } from "./providers/AuthProvider";

import { Auth } from "./pages/auth/auth";

import { Marketplace } from "./pages/marketplace/marketplace";

import { Rankings } from "./pages/rankings/rankings";

import { Wallet } from "./pages/wallet/wallet";

export const App: React.FC = React.memo(() => {

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => { navigate('/'); }, []);

  return (

    <>

      {!user ? <Auth /> : null}

      <GlobalStyle />

      <AnimatedHeader />

      <Routes>

        <Route path="/" element={<AnimatedMain />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/rankings" element={<Rankings />} />

        <Route path="/wallet" element={<Wallet />} />

      </Routes>

      <Footer />
      
    </>

  );

});
