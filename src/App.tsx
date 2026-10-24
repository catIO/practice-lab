import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#about') return 'about';
    if (hash === '#privacy') return 'privacy';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    const newHash = page === 'home' ? '' : `#${page}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash || window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
      default:
        return (
          <>
            <Hero />
            <AppGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162d34] via-[#0c181c] to-black flex flex-col justify-between text-gray-100">
      <div>
        <Header onPageChange={handlePageChange} currentPage={currentPage} />
        {renderPage()}
      </div>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;