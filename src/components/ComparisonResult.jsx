import { Share2, ArrowRight } from 'lucide-react';
import '../styles/index.css';

function ComparisonResult({ result, onReset }) {
    if (!result) return null;

    const isTie = result.winner === "Tie";

    return (
        <div className="result-container fade-in">

            <div className="verdict-banner">
                <span className="verdict-label">OFFICIAL VERDICT</span>
                <h2 className="verdict-title">{result.verdict}</h2>
                <div className="winner-badge">
                    Winner: <span style={{ color: 'white' }}>{result.winner}</span>
                </div>
            </div>

            <div className="summary-card">
                <h3>Referee's Report</h3>
                <p>{result.summary}</p>
            </div>

            <div className="breakdown-section">
                <h3>Head-to-Head Breakdown</h3>
                <div className="breakdown-grid">
                    {result.breakdown.map((item, index) => (
                        <div key={index} className="breakdown-card">
                            <div className="category-header">{item.category}</div>
                            <div className="comparison-row">
                                <div className={`option-side ${item.advantage === result.winner ? 'loser' : ''}`}>
                                    {item.a}
                                </div>
                                <div className="arrow"><ArrowRight size={16} color="var(--text-secondary)" /></div>
                                <div className={`option-side ${item.advantage === result.winner ? 'winner' : ''}`}>
                                    {item.b}
                                </div>
                            </div>
                            <div className="advantage-tag">
                                Advantage: {item.advantage}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="actions">
                <button className="reset-btn" onClick={onReset}>New Comparison</button>
                <button className="share-btn"><Share2 size={18} /> Share Decision</button>
            </div>

            <style>{`
        .result-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .verdict-banner {
          text-align: center;
          background: linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 100%);
          padding: 3rem 1rem;
          border-radius: 1rem;
          border-top: 1px solid var(--accent-primary);
        }

        .verdict-label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--accent-primary);
          text-transform: uppercase;
        }

        .verdict-title {
          font-size: 2.5rem;
          margin: 1rem 0;
          line-height: 1.1;
        }

        .winner-badge {
          display: inline-block;
          background: var(--accent-success);
          color: black;
          font-weight: 800;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.9rem;
        }

        .summary-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          border-left: 4px solid var(--accent-primary);
        }

        .breakdown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .breakdown-card {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid var(--border-color);
        }

        .category-header {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .comparison-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .option-side {
          flex: 1;
        }
        
        .arrow {
          padding: 0 0.5rem;
        }

        .advantage-tag {
          font-size: 0.8rem;
          color: var(--accent-success);
          font-weight: 600;
          text-align: right;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .reset-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
        }
        
        .reset-btn:hover {
          background: var(--bg-secondary);
        }

        .share-btn {
          background: var(--accent-secondary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
        </div>
    );
}

export default ComparisonResult;
