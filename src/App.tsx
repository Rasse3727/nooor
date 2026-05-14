import { useState } from 'react';
import StockDashboard from './pages/StockDashboard';
import LandingPage from './pages/LandingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToDashboard={() => setCurrentPage('dashboard')} />
      ) : (
        <StockDashboard onNavigateToLanding={() => setCurrentPage('landing')} />
      )}
    </>
  );
}
