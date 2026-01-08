import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded-xl transition-all duration-150 select-none min-h-[70px] text-xs leading-tight shadow-sm';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-rust bg-opacity-20 border-rust text-rust'
      : 'bg-sage bg-opacity-30 border-sage text-brown'
    : 'bg-white text-brown border-accent active:bg-cream';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-sage text-sm font-bold">✓</span>
      )}
    </button>
  );
}
