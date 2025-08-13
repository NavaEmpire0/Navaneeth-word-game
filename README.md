# Word Game

A browser-based word puzzle game with 100 levels. Players form words by dragging letters in a circle. Each level has a main word and a set of target words to find. The game supports both mouse and touch controls, is mobile-friendly, and includes hints and level selection.

## Features
- 100 handcrafted levels
- Drag letters to form words (mouse or touch)
- Responsive design for desktop and mobile
- Hint system to reveal letters
- Level selection and progress tracking
- Dictionary validation for words

## How to Play
1. Select a level and view the main word.
2. Drag letters in the circle to form words.
3. Words must be at least 3 letters long.
4. Find all target words to complete the level.
5. Use the "Reveal Letter" button for hints if stuck.
6. Track your progress and switch levels anytime.

## Setup & Run Locally
1. Clone this repository:
   ```
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Open the folder in VS Code or your editor.
3. Start a local server (recommended for fetch to work):
   - With VS Code: Use the Live Server extension.
   - With Python:
     ```
     python -m http.server
     ```
4. Open `index.html` in your browser via the local server.

## Deployment
- You can deploy this project easily on Netlify, Vercel, or GitHub Pages.
- All files are static (HTML, CSS, JS, TXT).

## File Structure
- `index.html` - Main game UI
- `style.css` - Game styling
- `script.js` - Game logic
- `words.txt` - Dictionary for word validation

## Contributing
Pull requests and suggestions are welcome! Please open an issue for bugs or feature requests.

## License
MIT License

---
Made with ❤️ for word puzzle fans.
