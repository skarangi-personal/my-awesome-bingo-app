interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-cream rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out] border-2 border-rust">
        <div className="text-6xl mb-4">☕</div>
        <h2 className="text-4xl font-bold text-rust mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          BINGO!
        </h2>
        <p className="text-brown mb-8 text-lg">You completed a line! Wonderful!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-xl active:bg-accent-light transition-colors shadow-md hover:shadow-lg"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
