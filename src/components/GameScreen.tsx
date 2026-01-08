import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-cream">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b-2 border-accent shadow-sm">
        <button
          onClick={onReset}
          className="text-accent text-sm px-3 py-1.5 rounded-lg active:bg-cream transition-colors font-medium"
        >
          ← Back
        </button>
        <h1 className="font-bold text-brown text-lg" style={{ fontFamily: 'Georgia, serif' }}>
          ☕ Soc Ops
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-brown text-sm py-3 px-4 font-medium">
        Find someone who matches each square. Tap to mark.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-sage bg-opacity-20 text-brown text-center py-3 font-semibold text-sm border-b border-sage">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
