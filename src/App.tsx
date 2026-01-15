import { AnimatePresence } from 'framer-motion';
import { useGameEngine } from './hooks/useGameEngine';
import { TitleScreen } from './components/screens/TitleScreen';
import { GameScreen } from './components/screens/GameScreen';
import { EndingScreen } from './components/screens/EndingScreen';

function App() {
  const {
    screen,
    gameState,
    currentCard,
    currentEnding,
    isPreviewingChoice,
    affectedStats,
    lastStatChanges,
    startNewGame,
    makeChoice,
    previewChoice,
    dismissEnding,
  } = useGameEngine();

  return (
    <div className="h-screen w-screen overflow-hidden" style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        {screen === 'title' && (
          <TitleScreen key="title" onStart={startNewGame} />
        )}

        {screen === 'game' && (
          <GameScreen
            key="game"
            gameState={gameState}
            currentCard={currentCard}
            isPreviewingChoice={isPreviewingChoice}
            affectedStats={affectedStats}
            lastStatChanges={lastStatChanges}
            onChoice={makeChoice}
            onPreview={previewChoice}
          />
        )}

        {screen === 'ending' && currentEnding && (
          <EndingScreen
            key="ending"
            ending={currentEnding}
            gameState={gameState}
            onDismiss={dismissEnding}
          />
        )}
      </AnimatePresence>

      {/* 全局 GitHub 图标 */}
      <a
        href="https://github.com/Leaomato/iron-blood-shanghai"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          opacity: 0.5,
          color: '#6b6560',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.5';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
