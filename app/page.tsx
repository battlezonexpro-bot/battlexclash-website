import React from 'react';

export default function Home() {
  return (
    <>
      {/* Animated Background Mesh */}
      <div className="bg-mesh">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      {/* Main Content */}
      <main className="hero-container">
        <div className="glass-card">
          <h1 className="title">
            BattleXClash
          </h1>
          
          <p className="subtitle">
            India's Ultimate BGMI Tournament Platform. <br/>
            Compete, Conquer, and Earn Real Rewards.
          </p>

          <a href="#" className="btn-primary">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download APK
          </a>

          <div className="features">
            <div className="features-list">
              <div className="feature-item">
                <span>🏆</span> Daily Tournaments
              </div>
              <div className="feature-item">
                <span>💸</span> Instant Withdrawals
              </div>
              <div className="feature-item">
                <span>🛡️</span> 100% Fair Play
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
