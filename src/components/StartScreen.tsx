interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-cream">
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-4">☕</div>
        <h1 className="text-5xl font-bold text-brown mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Soc Ops
        </h1>
        <p className="text-xl text-accent mb-10">Social Bingo</p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-accent mb-8">
          <h2 className="font-semibold text-brown mb-4 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
            How to play
          </h2>
          <ul className="text-left text-brown text-sm space-y-3">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-xl text-lg active:bg-accent-light transition-colors shadow-md hover:shadow-lg"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
