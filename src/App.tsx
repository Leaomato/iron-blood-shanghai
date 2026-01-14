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
    <div className="h-screen w-screen overflow-hidden">
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
    </div>
  );
}

export default App;
