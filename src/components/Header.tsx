import React from 'react';
import { Menu, Eye, Bell, MessageCircle, User } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 shadow-xl border-b border-slate-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105">
            <Eye size={20} />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              3
            </span>
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105">
            <MessageCircle size={20} />
          </button>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;