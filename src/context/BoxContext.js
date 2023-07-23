import React from "react";

const BoxContext = React.createContext([]);

const BoxProvider = ({ children }) => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = React.useState(true);
  const [scores, setScores] = React.useState({ oScore: 0, xScore: 0 });
  const [gameOver, setGameOver] = React.useState(false);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxId) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxId) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    
    setBoard(updateBoard);

    const winner = checkWinner(updateBoard);
   if (winner) {
    if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
   }

    setXPlaying(!xPlaying);
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
  return (
    <BoxContext.Provider value={{ board, handleBoxClick, scores, xPlaying,gameOver,resetBoard }}>
      {children}
    </BoxContext.Provider>
  );
};

const useAppContext = () => {
  const boxContext = React.useContext(BoxContext);
  return boxContext;
};

export { useAppContext, BoxProvider };
