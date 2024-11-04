import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { UserCircle, Briefcase, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">SkillMatch</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/jobs" className="text-gray-600 hover:text-blue-600">
                  Job Postings
                </Link>
                <Link to="/matching" className="text-gray-600 hover:text-blue-600">
                  Skill Matching
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                    <UserCircle className="h-5 w-5" />
                    <span>{user?.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;