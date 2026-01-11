import { useState } from 'react';
import { Bot, Info } from 'lucide-react';
import InputForm from './components/InputForm';
import ComparisonResult from './components/ComparisonResult';
import { compareOptions } from './services/referee';
import './styles/index.css';

function App() {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [result, setResult] = useState(null);

  const handleCompare = async (optionA, optionB, context) => {
    setStatus('loading');
    try {
      const data = await compareOptions(optionA, optionB, context);
      setResult(data);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  const handleReset = () => {
    setResult(null);
    setStatus('idle');
  };

  return (
    <div className="app-layout">
      <header className="app-header container">
        <div className="logo" onClick={handleReset} style={{ cursor: 'pointer' }}>
          <Bot size={32} color="var(--accent-primary)" />
          <span className="logo-text">THE REFEREE</span>
        </div>
        <nav>
        </nav>
      </header>

      <main className="container main-content">
        {status === 'idle' && (
          <div className="hero-section fade-in">
            <h1>Stop Guessing.<br />Start <span className="gradient-text">Deciding.</span></h1>
            <p className="subtitle">
              The AI-powered referee that helps you choose between options by analyzing trade-offs, not just listing specs.
            </p>
          </div>
        )}

        <div style={{ marginTop: '3rem' }}>
          {status === 'idle' && (
            <InputForm onCompare={handleCompare} isComparing={false} />
          )}

          {status === 'loading' && (
            <div className="loading-state fade-in" style={{ textAlign: 'center', padding: '4rem' }}>
              <Bot size={64} className="animate-bounce" color="var(--accent-primary)" />
              <h2 style={{ marginTop: '1rem' }}>Reviewing the Plays...</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Analyzing specs, community sentiment, and long-term viability.</p>
            </div>
          )}

          {status === 'success' && result && (
            <ComparisonResult result={result} onReset={handleReset} />
          )}
        </div>

      </main>

      <footer className="container app-footer">
        <p>© 2026 The Referee. Built for AI for Bharat.</p>
      </footer>

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .app-header {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
        }
        
        .main-content {
          flex: 1;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        
        .hero-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-top: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }

        .app-footer {
          padding: 2rem 1.5rem;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>
    </div>
  );
}

export default App;
