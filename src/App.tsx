import { useState } from 'react';
import { Navigation } from './components/navigation';
import { HomePage } from './components/home-page';
import { FeaturesPage } from './components/features-page';
import { StudentDashboard } from './components/student-dashboard';
import { RecruiterDashboard } from './components/recruiter-dashboard';
import { AboutPage } from './components/about-page';
import { ContactPage } from './components/contact-page';
import { LoginPage } from './components/login-page';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userType, setUserType] = useState<'guest' | 'student' | 'recruiter'>('guest');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleUserTypeChange = (type: 'guest' | 'student' | 'recruiter') => {
    setUserType(type);
  };

  const handleLogin = (type: 'student' | 'recruiter') => {
    setUserType(type);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'features':
        return <FeaturesPage onPageChange={handlePageChange} />;
      case 'student-dashboard':
        return <StudentDashboard />;
      case 'recruiter-dashboard':
        return <RecruiterDashboard />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        userType={userType}
        onUserTypeChange={handleUserTypeChange}
      />
      {renderPage()}
    </div>
  );
}