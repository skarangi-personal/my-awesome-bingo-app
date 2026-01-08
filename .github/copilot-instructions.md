# Copilot Instructions for Soc Ops (Bingo Game)

React 19 + TypeScript interactive bingo game. Players match randomized questions to mark 5-in-a-row.

## Architecture

**Central state hook:** [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) manages game lifecycle (`start` → `playing` → `bingo`), board state, win detection, and localStorage persistence.

**Pure logic:** [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) contains `generateBoard()` (Fisher-Yates shuffle of 24 questions + center free space), `toggleSquare()`, `checkBingo()`, and `getWinningSquareIds()`. Never mutate board arrays directly.

**Types:** [src/types/index.ts](src/types/index.ts) defines `BingoSquareData`, `BingoLine`, and `GameState` ('start' | 'playing' | 'bingo').

**Components:** App → StartScreen | GameScreen (BingoBoard → BingoSquare) + BingoModal. Pass data & callbacks; no local state.

## Design System — Cozy Coffee Shop Theme

**Color Palette (warm earth tones):**
- Primary (Coffee Brown): `#8B6F47` — main buttons, accents, text
- Background (Cream): `#F5F1E8` — primary background color
- Success (Sage): `#9CAF88` — marked squares, gentle highlights
- Celebration (Rust): `#D4704A` — BINGO winning state
- Text (Dark Brown): `#5D4E37` — headings and body text

**Typography:**
- Font: Georgia serif (warm, inviting, reads like a cozy café menu)
- Apply Georgia in headings: `style={{ fontFamily: 'Georgia, serif' }}`
- Maintain generous spacing and larger text sizes for readability

**Visual Details:**
- Use rounded corners (`rounded-xl`, `rounded-2xl`) for card-like feel
- Add subtle shadows for depth (`shadow-sm`, `shadow-lg`, `shadow-2xl`)
- Soft, responsive hover states (use `bg-opacity-*` for transparency)
- Gentle messaging: avoid aggressive language, prioritize warmth
- Coffee cup emoji (☕) subtle accents in headers and celebrations

**Component Styling Rules:**
- All backgrounds: Cream (#F5F1E8) or White for cards
- Buttons: Coffee Brown (#8B6F47) background with rounded corners
- Marked squares: Soft sage green with transparency
- Winning squares: Rust accent with subtle transparency
- No harsh borders; prefer soft shadows and rounded edges

## Key Constraints

- **Board:** Flat 25-item array (index 0–24). Center (index 12) is always free space.
- **Questions:** Static array in [src/data/questions.ts](src/data/questions.ts)—24 items + `FREE_SPACE` constant.
- **Storage:** localStorage key `bingo-game-state` with version tracking. Always use hook methods (`startGame`, `resetGame`) to persist state.
- **Styling:** Tailwind v4 utilities only (grid, gap, aspect-square). Use custom color tokens from [src/index.css](src/index.css) for the coffee shop palette.

## Quick Checklist

**Common Tasks:**
- [ ] Add question → [src/data/questions.ts](src/data/questions.ts)
- [ ] Fix win logic → `checkBingo()` in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- [ ] Change board size → Update `BOARD_SIZE` & `CENTER_INDEX` in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) + tests
- [ ] Add game state → Update `GameState` type in [src/types/index.ts](src/types/index.ts) and `useBingoGame.ts`
- [ ] Style component → Use Tailwind utilities + custom color tokens (accent, sage, rust, cream, brown)

**Quality Gates (Run Before Commit):**
- [ ] Type check → `npm run build` (TypeScript compilation must pass)
- [ ] Lint → `npm run lint` (ESLint with React Hooks rules)
- [ ] Test → `npm test` (Vitest; globals available: describe/it/expect)
- [ ] Build → `npm run build` (validates production bundle)

**Workflow:**
- [ ] Develop → `npm run dev` (HMR at http://localhost:5173)
- [ ] Deploy → Push to `main` (GitHub Actions auto-deploys `/dist` to Pages)
