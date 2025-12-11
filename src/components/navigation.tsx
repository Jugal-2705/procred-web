import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  userType: 'guest' | 'student' | 'recruiter';
  onUserTypeChange: (type: 'guest' | 'student' | 'recruiter') => void;
}

export function Navigation({ currentPage, onPageChange, userType, onUserTypeChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const publicPages = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const dashboardPages = {
    student: [
      { id: 'student-dashboard', label: 'Dashboard' },
      { id: 'features', label: 'Features' },
      { id: 'about', label: 'About Us' },
      { id: 'contact', label: 'Contact' },
    ],
    recruiter: [
      { id: 'recruiter-dashboard', label: 'Dashboard' },
      { id: 'features', label: 'Features' },
      { id: 'about', label: 'About Us' },
      { id: 'contact', label: 'Contact' },
    ]
  };

  const currentPages = userType === 'guest' ? publicPages : dashboardPages[userType as keyof typeof dashboardPages];

  const handleLogout = () => {
    onUserTypeChange('guest');
    onPageChange('home');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group professional-focus hover-lift rounded-lg p-2 -m-2 transition-all duration-200 hover:bg-slate-50" 
            onClick={() => onPageChange('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-slate-900 tracking-tight">ProCred</span>
              <span className="text-xs font-medium text-slate-600 mt-1">™</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {currentPages.map((page) => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 professional-focus ${
                  currentPage === page.id
                    ? 'text-blue-700 bg-blue-50 border border-blue-200 shadow-sm'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50 hover:shadow-sm border border-transparent'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

          {/* User Type & Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {userType !== 'guest' && (
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium px-3 py-1">
                {userType === 'student' ? '🎓 Student' : '🏢 Recruiter'}
              </Badge>
            )}
            
            {userType === 'guest' ? (
              <Button 
                onClick={() => onPageChange('login')} 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 hover-lift professional-focus"
              >
                Login
              </Button>
            ) : (
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-medium px-4 py-2.5 transition-all duration-200 professional-focus"
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {currentPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentPage === page.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {page.label}
                </button>
              ))}
              
              <div className="flex items-center gap-4 px-3 py-2">
                {userType !== 'guest' && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {userType === 'student' ? '🎓 Student' : '🏢 Recruiter'}
                  </Badge>
                )}
                
                {userType === 'guest' ? (
                  <Button 
                    onClick={() => {
                      onPageChange('login');
                      setIsMobileMenuOpen(false);
                    }} 
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Login
                  </Button>
                ) : (
                  <Button onClick={handleLogout} variant="outline">
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}