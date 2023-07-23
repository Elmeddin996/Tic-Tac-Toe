import './App.css';
import { Board } from './components/Board';
import { ResetButton } from './components/ResetButton';
import { ScoreBoard } from './components/ScoreBoard';
import { BoxProvider } from './context/BoxContext';

function App() {
  return (
    <div className="App">
   <BoxProvider>
   <ScoreBoard/>
   <Board/>
   <ResetButton/>
   </BoxProvider>
    </div>
  );
}

export default App;
