import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ContentFeed } from './pages/ContentFeed';
import { UserProfile } from './pages/UserProfile';
import { CreatorProfile } from './pages/CreatorProfile';
import { useAuthStore } from './store/authStore';

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/login" element={
              user ? <Navigate to="/content" replace /> : <LoginForm />
            } />
            <Route path="/register" element={
              user ? <Navigate to="/content" replace /> : <RegisterForm />
            } />
            <Route path="/content" element={
              user ? <ContentFeed /> : <Navigate to="/login" replace />
            } />
            <Route path="/profile" element={
              user?.role === 'parent' ? <UserProfile /> : <Navigate to="/creator-profile" replace />
            } />
            <Route path="/creator-profile" element={
              user?.role === 'professional' ? <CreatorProfile /> : <Navigate to="/profile" replace />
            } />
            <Route path="/" element={
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to PediConnect</h1>
                <p className="text-xl text-gray-600">
                  Connect with pediatric professionals and access expert knowledge
                </p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;