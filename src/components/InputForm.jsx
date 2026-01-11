import { useState } from 'react';
import '../styles/index.css';

function InputForm({ onCompare, isComparing }) {
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [context, setContext] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (optionA && optionB) {
            onCompare(optionA, optionB, context);
        }
    };

    return (
        <div className="input-card fade-in">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What are we comparing?</h2>
            <form onSubmit={handleSubmit}>
                <div className="options-grid">
                    <div className="input-group">
                        <label>Option A</label>
                        <input
                            type="text"
                            placeholder="e.g. React"
                            value={optionA}
                            onChange={(e) => setOptionA(e.target.value)}
                            required
                        />
                    </div>

                    <div className="vs-badge">VS</div>

                    <div className="input-group">
                        <label>Option B</label>
                        <input
                            type="text"
                            placeholder="e.g. Vue"
                            value={optionB}
                            onChange={(e) => setOptionB(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="input-group" style={{ marginTop: '1.5rem' }}>
                    <label>Context & Constraints</label>
                    <textarea
                        placeholder="Describe your situation (e.g. 'Small startup, need fast SEO, team knows JS')"
                        value={context}
                        onChange={(e) => setContext(e.target.value)}
                        rows={3}
                    />
                </div>

                <button
                    type="submit"
                    className="compare-btn"
                    disabled={isComparing}
                >
                    {isComparing ? 'Referee is reviewing...' : 'Analyze Inputs'}
                </button>
            </form>

            <style>{`
        .input-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2.5rem;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1rem;
          align-items: center;
        }

        .vs-badge {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: 800;
          font-size: 0.8rem;
          margin-top: 1.5rem; /* align with inputs */
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .compare-btn {
          width: 100%;
          margin-top: 2rem;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        }

        .compare-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
        }
        
        .compare-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 600px) {
          .options-grid {
            grid-template-columns: 1fr;
          }
          .vs-badge {
            margin: 0 auto;
          }
        }
      `}</style>
        </div>
    );
}

export default InputForm;
