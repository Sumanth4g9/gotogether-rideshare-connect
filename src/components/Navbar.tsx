
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, User } from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-goto-purple font-bold text-2xl">GoTogethrRides</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-goto-purple transition-colors">
            Home
          </Link>
          <Link to="/travel-types" className="text-gray-700 hover:text-goto-purple transition-colors">
            Travel Types
          </Link>
          <Link to="/search" className="text-gray-700 hover:text-goto-purple transition-colors">
            Find Rides
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-sm text-gray-600">
                Hi, {user?.name.split(' ')[0]}
              </span>
              <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={logout}>
                <User size={16} />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <LogIn size={16} />
                  <span className="hidden md:inline">Login</span>
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm" className="flex items-center gap-1">
                  <UserPlus size={16} />
                  <span className="hidden md:inline">Sign Up</span>
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
