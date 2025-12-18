import { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HomePage, AboutPage } from './pages/Home';
import { FeaturesPage } from './pages/Features';
import { UseCasesPage } from './pages/UseCases';
import { ContactPage } from './pages/Contact';
import { NeuralInterface } from './components/modules/NeuralInterface';

function App() {
  const [view, setView] = useState<'site' | 'app'>('site');
  const [page, setPage] = useState('home');

  // Simple Router effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, view]);

  if (view === 'app') {
    return <NeuralInterface onExit={() => setView('site')} />;
  }

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage onLaunch={() => setView('app')} />;
      case 'about': return <AboutPage />;
      case 'features': return <FeaturesPage />;
      case 'use-cases': return <UseCasesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onLaunch={() => setView('app')} />;
    }
  };

  return (
    <Layout 
      currentPage={page} 
      onNavigate={setPage} 
      onLaunchApp={() => setView('app')}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;
