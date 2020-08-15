import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import { UserStorage } from './UserContext';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <ProtectedRoute path="account/*" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
