// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Word Game - 100 Levels (4 words for levels 1-20, 5 for 21-40, 6 for 41-60, 7 for 61-80, 8 for 81-100)

const levels = [
    { id: 0, mainWord: 'STREAM', wordsToFind: ['stream', 'master', 'team', 'arm'] },
    { id: 1, mainWord: 'BRIGHT', wordsToFind: ['bright', 'right', 'grit', 'bit'] },
    { id: 2, mainWord: 'GARDEN', wordsToFind: ['garden', 'range', 'dear', 'age'] },
    { id: 3, mainWord: 'THANKS', wordsToFind: ['thanks', 'thank', 'hats', 'ant'] },
    { id: 4, mainWord: 'FLOWER', wordsToFind: ['flower', 'lower', 'wolf', 'owl'] },
    { id: 5, mainWord: 'CASTLE', wordsToFind: ['castle', 'scale', 'late', 'cat'] },
    { id: 6, mainWord: 'MOTHER', wordsToFind: ['mother', 'other', 'home', 'the'] },
    { id: 7, mainWord: 'FRIEND', wordsToFind: ['friend', 'fired', 'find', 'end'] },
    { id: 8, mainWord: 'WINTER', wordsToFind: ['winter', 'write', 'wine', 'tin'] },
    { id: 9, mainWord: 'PLANET', wordsToFind: ['planet', 'plane', 'late', 'pen'] },
    { id: 10, mainWord: 'SPRING', wordsToFind: ['spring', 'ring', 'spin', 'pig'] },
    { id: 11, mainWord: 'GOLDEN', wordsToFind: ['golden', 'lodge', 'gone', 'dog'] },
    { id: 12, mainWord: 'BASKET', wordsToFind: ['basket', 'beast', 'bats', 'eat'] },
    { id: 13, mainWord: 'HUNTER', wordsToFind: ['hunter', 'nurture', 'hunt', 'hut'] },
    { id: 14, mainWord: 'SILVER', wordsToFind: ['silver', 'liver', 'evil', 'sir'] },
    { id: 15, mainWord: 'FOREST', wordsToFind: ['forest', 'store', 'rest', 'for'] },
    { id: 16, mainWord: 'DANCER', wordsToFind: ['dancer', 'read', 'care', 'can'] },
    { id: 17, mainWord: 'MARKET', wordsToFind: ['market', 'maker', 'take', 'rat'] },
    { id: 18, mainWord: 'NATURE', wordsToFind: ['nature', 'turn', 'near', 'nut'] },
    { id: 19, mainWord: 'BRIDGE', wordsToFind: ['bridge', 'bride', 'grid', 'big'] },
    
    { id: 20, mainWord: 'PICTURE', wordsToFind: ['picture', 'ripe', 'cute', 'cut', 'pit'] },
    { id: 21, mainWord: 'MACHINE', wordsToFind: ['machine', 'chime', 'mine', 'ace', 'him'] },
    { id: 22, mainWord: 'CAPITAL', wordsToFind: ['capital', 'spit', 'tail', 'cap', 'tap'] },
    { id: 23, mainWord: 'LEATHER', wordsToFind: ['leather', 'health', 'late', 'ear', 'art'] },
    { id: 24, mainWord: 'CHAPTER', wordsToFind: ['chapter', 'preach', 'chat', 'car', 'rat'] },
    { id: 25, mainWord: 'MONSTER', wordsToFind: ['monster', 'mentor', 'more', 'ten', 'son'] },
    { id: 26, mainWord: 'GENERAL', wordsToFind: ['general', 'ranger', 'near', 'age', 'ear'] },
    { id: 27, mainWord: 'KITCHEN', wordsToFind: ['kitchen', 'think', 'nick', 'hit', 'ten'] },
    { id: 28, mainWord: 'CHICKEN', wordsToFind: ['chicken', 'niche', 'nick', 'hen', 'ice'] },
    { id: 29, mainWord: 'TEACHER', wordsToFind: ['teacher', 'cheat', 'each', 'tea', 'ear'] },
    { id: 30, mainWord: 'BROTHER', wordsToFind: ['brother', 'bother', 'both', 'rob', 'the'] },
    { id: 31, mainWord: 'PROBLEM', wordsToFind: ['problem', 'probe', 'more', 'pro', 'mob'] },
    { id: 32, mainWord: 'STATION', wordsToFind: ['station', 'nation', 'into', 'sit', 'ton'] },
    { id: 33, mainWord: 'COMFORT', wordsToFind: ['comfort', 'form', 'fort', 'cot', 'for'] },
    { id: 34, mainWord: 'WEATHER', wordsToFind: ['weather', 'wheat', 'wear', 'tea', 'ear'] },
    { id: 35, mainWord: 'PERFECT', wordsToFind: ['perfect', 'free', 'tree', 'pet', 'cry'] },
    { id: 36, mainWord: 'QUICKLY', wordsToFind: ['quickly', 'quick', 'lick', 'luck'] },
    { id: 37, mainWord: 'CENTRAL', wordsToFind: ['central', 'rental', 'later', 'car', 'ten'] },
    { id: 38, mainWord: 'JOURNEY', wordsToFind: ['journey', 'young', 'your', 'joy', 'run'] },
    { id: 39, mainWord: 'GALLERY', wordsToFind: ['gallery', 'really', 'gear', 'lay', 'ray'] },
    
    { id: 40, mainWord: 'ELEPHANT', wordsToFind: ['elephant', 'heath', 'plant', 'late', 'pen', 'hat'] },
    { id: 41, mainWord: 'COMPUTER', wordsToFind: ['computer', 'compute', 'court', 'cut', 'put', 'rut'] },
    { id: 42, mainWord: 'MOUNTAIN', wordsToFind: ['mountain', 'main', 'aunt', 'nut', 'tan', 'aim'] },
    { id: 43, mainWord: 'PRINCESS', wordsToFind: ['princess', 'press', 'spin', 'sin', 'sir', 'ice'] },
    { id: 44, mainWord: 'BIRTHDAY', wordsToFind: ['birthday', 'dirty', 'bird', 'bad', 'had', 'ray'] },
    { id: 45, mainWord: 'HOSPITAL', wordsToFind: ['hospital', 'polish', 'shop', 'hit', 'sit', 'top'] },
    { id: 46, mainWord: 'BUSINESS', wordsToFind: ['business', 'buses', 'sine', 'sun', 'bus', 'sin'] },
    { id: 47, mainWord: 'SANDWICH', wordsToFind: ['sandwich', 'witch', 'wish', 'win', 'had', 'and'] },
    { id: 48, mainWord: 'SHOULDER', wordsToFind: ['shoulder', 'louder', 'hold', 'old', 'led', 'her'] },
    { id: 49, mainWord: 'PRACTICE', wordsToFind: ['practice', 'pirate', 'care', 'car', 'art', 'ice'] },
    { id: 50, mainWord: 'LANGUAGE', wordsToFind: ['language', 'angel', 'hang', 'age', 'lag', 'gun'] },
    { id: 51, mainWord: 'CHILDREN', wordsToFind: ['children', 'child', 'rich', 'her', 'end', 'lid'] },
    { id: 52, mainWord: 'BUILDING', wordsToFind: ['building', 'build', 'bing', 'big', 'dig', 'gun'] },
    { id: 53, mainWord: 'SECURITY', wordsToFind: ['security', 'rusty', 'sure', 'sir', 'cry', 'try'] },
    { id: 54, mainWord: 'STRANGER', wordsToFind: ['stranger', 'range', 'near', 'age', 'ear', 'tan'] },
    { id: 55, mainWord: 'TRAINING', wordsToFind: ['training', 'rating', 'rain', 'air', 'tan', 'gin'] },
    { id: 56, mainWord: 'REMEMBER', wordsToFind: ['remember', 'ember', 'beer', 'bee', 'err', 'men'] },
    { id: 57, mainWord: 'REPUBLIC', wordsToFind: ['republic', 'public', 'cure', 'cup', 'rip', 'ice'] },
    { id: 58, mainWord: 'TROPICAL', wordsToFind: ['tropical', 'optical', 'trap', 'car', 'tap', 'top'] },
    { id: 59, mainWord: 'DELIVERY', wordsToFind: ['delivery', 'lively', 'live', 'lie', 'red', 'dry'] },
    
    { id: 60, mainWord: 'ADVENTURE', wordsToFind: ['adventure', 'venture', 'turn', 'dear', 'ear', 'vet', 'end'] },
    { id: 61, mainWord: 'BREAKFAST', wordsToFind: ['breakfast', 'beast', 'fast', 'eat', 'bat', 'fed', 'art'] },
    { id: 62, mainWord: 'IMPORTANT', wordsToFind: ['important', 'import', 'point', 'tip', 'top', 'tar', 'ant'] },
    { id: 63, mainWord: 'CHRISTMAS', wordsToFind: ['christmas', 'march', 'charm', 'car', 'ham', 'sit', 'mix'] },
    { id: 64, mainWord: 'EDUCATION', wordsToFind: ['education', 'auction', 'cute', 'cat', 'cut', 'ice', 'and'] },
    { id: 65, mainWord: 'BEAUTIFUL', wordsToFind: ['beautiful', 'futile', 'bite', 'bit', 'fit', 'ate', 'elf'] },
    { id: 66, mainWord: 'TRANSPORT', wordsToFind: ['transport', 'sport', 'port', 'top', 'tar', 'tan', 'rot'] },
    { id: 67, mainWord: 'TELEPHONE', wordsToFind: ['telephone', 'phone', 'hole', 'pen', 'hen', 'toe', 'elf'] },
    { id: 68, mainWord: 'COMMUNITY', wordsToFind: ['community', 'county', 'mount', 'cut', 'cot', 'tin', 'mom'] },
    { id: 69, mainWord: 'WONDERFUL', wordsToFind: ['wonderful', 'wonder', 'lower', 'owl', 'led', 'end', 'fur'] },
    { id: 70, mainWord: 'DANGEROUS', wordsToFind: ['dangerous', 'dragon', 'road', 'dog', 'rag', 'son', 'and'] },
    { id: 71, mainWord: 'DIFFERENT', wordsToFind: ['different', 'fierce', 'rent', 'ten', 'end', 'fit', 'red'] },
    { id: 72, mainWord: 'MARKETING', wordsToFind: ['marketing', 'rating', 'make', 'mar', 'tag', 'tin', 'gin'] },
    { id: 73, mainWord: 'INTERVIEW', wordsToFind: ['interview', 'invite', 'wine', 'win', 'tin', 'vet', 'wet'] },
    { id: 74, mainWord: 'SOMETHING', wordsToFind: ['something', 'moth', 'them', 'him', 'got', 'son', 'ten'] },
    { id: 75, mainWord: 'KNOWLEDGE', wordsToFind: ['knowledge', 'wedge', 'know', 'nod', 'dog', 'led', 'age'] },
    { id: 76, mainWord: 'OPERATION', wordsToFind: ['operation', 'portion', 'rope', 'top', 'tip', 'tan', 'pen'] },
    { id: 77, mainWord: 'TRANSFORM', wordsToFind: ['transform', 'form', 'raft', 'far', 'for', 'tan', 'arm'] },
    { id: 78, mainWord: 'CHEMISTRY', wordsToFind: ['chemistry', 'rhyme', 'them', 'her', 'try', 'cry', 'ice'] },
    { id: 79, mainWord: 'CELEBRATE', wordsToFind: ['celebrate', 'create', 'tree', 'ear', 'eat', 'bee', 'lab'] },
    
    { id: 80, mainWord: 'TECHNOLOGY', wordsToFind: ['technology', 'ecology', 'they', 'the', 'log', 'got', 'hot', 'coy'] },
    { id: 81, mainWord: 'BASKETBALL', wordsToFind: ['basketball', 'stable', 'talk', 'all', 'bat', 'lab', 'elk', 'ask'] },
    { id: 82, mainWord: 'REVOLUTION', wordsToFind: ['revolution', 'solution', 'love', 'oil', 'tin', 'ton', 'nut', 'let'] },
    { id: 83, mainWord: 'PHILOSOPHY', wordsToFind: ['philosophy', 'polish', 'ship', 'hip', 'shy', 'oil', 'soy', 'ply'] },
    { id: 84, mainWord: 'PROFESSION', wordsToFind: ['profession', 'poison', 'rope', 'for', 'son', 'sin', 'pen', 'sip'] },
    { id: 85, mainWord: 'DEMOCRATIC', wordsToFind: ['democratic', 'dramatic', 'care', 'car', 'art', 'ice', 'dot', 'cot'] },
    { id: 86, mainWord: 'INSTRUMENT', wordsToFind: ['instrument', 'mist', 'term', 'tin', 'sit', 'sun', 'run', 'net'] },
    { id: 87, mainWord: 'CREATIVE', wordsToFind: ['creative', 'create', 'native', 'art', 'active', 'rate', 'car', 'ice'] },
    { id: 88, mainWord: 'RESTAURANT', wordsToFind: ['restaurant', 'nature', 'turn', 'tan', 'nut', 'ear', 'art', 'sun'] },
    { id: 89, mainWord: 'PLAYGROUND', wordsToFind: ['playground', 'ground', 'play', 'lay', 'ray', 'old', 'god', 'pun'] },
    { id: 90, mainWord: 'UNDERWATER', wordsToFind: ['underwater', 'wanted', 'warn', 'war', 'ear', 'ten', 'wet', 'red'] },
    { id: 91, mainWord: 'TREMENDOUS', wordsToFind: ['tremendous', 'monster', 'more', 'ten', 'son', 'red', 'men', 'net'] },
    { id: 92, mainWord: 'BACKGROUND', wordsToFind: ['background', 'ground', 'back', 'bag', 'cog', 'and', 'dog', 'can'] },
    { id: 93, mainWord: 'INCREDIBLE', wordsToFind: ['incredible', 'decline', 'dice', 'ice', 'red', 'bed', 'led', 'end'] },
    { id: 94, mainWord: 'TELEVISION', wordsToFind: ['television', 'violent', 'love', 'ten', 'tin', 'vet', 'sit', 'lie'] },
    { id: 95, mainWord: 'STRENGTHEN', wordsToFind: ['strengthen', 'green', 'nest', 'ten', 'hen', 'net', 'the', 'set'] },
    { id: 96, mainWord: 'GENERATION', wordsToFind: ['generation', 'region', 'rage', 'age', 'ten', 'tan', 'got', 'ton'] },
    { id: 97, mainWord: 'LABORATORY', wordsToFind: ['laboratory', 'boat', 'bat', 'lab', 'rat', 'toy', 'boy', 'rot'] },
    { id: 98, mainWord: 'CALCULATOR', wordsToFind: ['calculator', 'coal', 'car', 'cut', 'rat', 'lot', 'cot', 'art'] },
    { id: 99, mainWord: 'MASTERPIECE', wordsToFind: ['masterpiece', 'cream', 'steam', 'car', 'ear', 'ice', 'pea', 'ape'] }
];

let currentLevelIndex = 0;
let selectedLetters = [];
let currentWord = '';
let foundWords = new Set();
let allValidWords = new Set();
let completedLevels = new Set(); // To track completed levels for highlighting

let isDragging = false;
let isHintMode = false; // State for hint mode

// THESE WILL BE RE-DECLARED IN loadLevel FOR FRESHNESS
let connectionCanvas;
let ctx;

const canvasWrapper = document.getElementById('canvas-wrapper'); // Reference to the wrapper div

const gameView = document.getElementById('game-view');
const levelSelectionView = document.getElementById('level-selection-view');

const lettersContainer = document.getElementById('letters-container');
const currentWordDisplay = document.getElementById('current-word-display');
const targetWordsDisplay = document.getElementById('target-words-display');
const messageArea = document.getElementById('message-area');
const currentLevelSpan = document.getElementById('current-level');

const nextLevelArea = document.getElementById('next-level-area');
const nextLevelButton = document.getElementById('next-level-button');
const selectLevelButton = document.getElementById('select-level-button');
const levelButtonsContainer = document.getElementById('level-buttons');
const backToGameButton = document.getElementById('back-to-game-button');
const revealButton = document.getElementById('reveal-button'); // Reveal button reference
const howToPlayButton = document.getElementById('how-to-play-button'); // How to Play button
const howToPlayOverlay = document.getElementById('how-to-play-overlay'); // How to Play overlay
const closeHowToPlayButton = document.getElementById('close-how-to-play-button'); // Close How to Play button


// --- Utility Functions ---

function getElementCenter(element) {
    if (!element || !element.offsetParent) {
        return { x: 0, y: 0 }; // Return safe defaults
    }

    const rect = element.getBoundingClientRect();
    const containerRect = lettersContainer.getBoundingClientRect();
    return {
        x: rect.left + (rect.width / 2) - containerRect.left,
        y: rect.top + (rect.height / 2) - containerRect.top
    };
}

// Function to calculate distance between two points
function getDistance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Function to draw lines on canvas
function drawLine(startElement, endX, endY) {
    if (!ctx || !connectionCanvas) {
        console.error("Canvas context or element not ready for drawing.");
        return;
    }
    
    ctx.clearRect(0, 0, connectionCanvas.width, connectionCanvas.height);

    ctx.strokeStyle = '#60a0ff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    for (let i = 0; i < selectedLetters.length - 1; i++) {
        const p1 = getElementCenter(selectedLetters[i]);
        const p2 = getElementCenter(selectedLetters[i + 1]);
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }

    if (selectedLetters.length > 0) {
        const lastLetterCenter = getElementCenter(selectedLetters[selectedLetters.length - 1]);

        ctx.beginPath();
        ctx.moveTo(lastLetterCenter.x, lastLetterCenter.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}

// --- View Management ---
function showGameView() {
    gameView.classList.add('active-view');
    gameView.classList.remove('hidden-view');
    levelSelectionView.classList.add('hidden-view');
    levelSelectionView.classList.remove('active-view');
    document.body.classList.remove('hint-mode'); // Exit hint mode when switching views
}

function showLevelSelectionView() {
    gameView.classList.add('hidden-view');
    gameView.classList.remove('active-view');
    levelSelectionView.classList.add('active-view');
    levelSelectionView.classList.remove('hidden-view');
    createLevelSelectionButtons(); // Re-render buttons to update highlights
    document.body.classList.remove('hint-mode'); // Exit hint mode when switching views
}

// --- Initialization ---

async function loadDictionary() {
    try {
        const response = await fetch('words.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const words = text.split(/\r?\n/).map(word => word.trim().toLowerCase()).filter(word => word.length > 0 && /^[a-z]+$/.test(word));
        allValidWords = new Set(words);
        console.log(`Main dictionary loaded with ${allValidWords.size} words.`);
        
        // Automated wordsToFind validation against the loaded comprehensive dictionary
        levels.forEach(level => {
            const originalWordsToFindCount = level.wordsToFind.length;
            // Filter words to find: ensure they exist in allValidWords AND are 3+ letters
            level.wordsToFind = level.wordsToFind.filter(word => 
                allValidWords.has(word) && word.length >=3); 
            
            if (level.wordsToFind.length !== originalWordsToFindCount) {
                console.warn(`Level ${level.id + 1}: Removed ${originalWordsToFindCount - level.wordsToFind.length} invalid or too-short words from wordsToFind. Remaining: ${level.wordsToFind.join(', ')}`);
            }
            if (level.wordsToFind.length === 0) {
                console.error(`Level ${level.id + 1}: Has no valid words to find after filtering! Please check mainWord and wordsToFind for this level.`);
            }
        });

    }
    catch (error) {
        console.error('Failed to load dictionary:', error);
        setMessage('Error: Could not load dictionary. Game may not work.', 'error');
    }
}

// Function to position letters in a circle
function positionLettersInCircle(lettersDivs) {
    const container = lettersContainer;
    const numLetters = lettersDivs.length;

    const letterSize = 60; // Based on CSS .letter width/height
    const padding = 20; // Padding around the circle from container edge

    let calculatedRadius;
    let containerDim; // Dimension for width/height of lettersContainer

    // Dynamically adjust radius based on number of letters
    if (numLetters <= 5) {
        calculatedRadius = (letterSize * 1.0) + (numLetters * 4);
    } else if (numLetters <= 7) {
        calculatedRadius = (letterSize * 1.1) + (numLetters * 3);
    } else if (numLetters <= 9) {
        calculatedRadius = (letterSize * 1.3) + (numLetters * 3);
    } else if (numLetters <= 11) {
        calculatedRadius = (letterSize * 1.5) + (numLetters * 2.5);
    } else { // For very long words
        calculatedRadius = (letterSize * 1.6) + (numLetters * 2);
    }
    
    // Ensure the container is large enough for the circle + padding for letters
    containerDim = (calculatedRadius + letterSize/2 + padding) * 2; // Diameter + letter buffer + padding
    containerDim = Math.max(containerDim, 250); // Minimum size
    containerDim = Math.min(containerDim, 500); // Maximum size (to fit common screen widths and main game container)

    container.style.width = `${containerDim}px`;
    container.style.height = `${containerDim}px`;

    // Force reflow by reading offsetWidth/Height after setting style.
    void container.offsetWidth; 

    // Calculate center relative to the container's *content box*
    const centerX = container.clientWidth / 2; 
    const centerY = container.clientHeight / 2;

    const angleStep = (2 * Math.PI) / numLetters;

    lettersDivs.forEach((div, index) => {
        const angle = index * angleStep;
        const x = centerX + calculatedRadius * Math.cos(angle);
        const y = centerY + calculatedRadius * Math.sin(angle);

        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    });

    // Ensure canvas dimensions are set AFTER container is sized
    if (connectionCanvas) { // Check if canvas exists before trying to set properties
        connectionCanvas.width = container.offsetWidth;
        connectionCanvas.height = container.offsetHeight;
    }
}


function loadLevel(levelIndex) {
    if (levelIndex < 0 || levelIndex >= levels.length) {
        setMessage('Invalid level selected!', 'error');
        showLevelSelectionView();
        return;
    }

    currentLevelIndex = levelIndex;
    const level = levels[currentLevelIndex];

    currentLevelSpan.textContent = level.id + 1;
    lettersContainer.innerHTML = ''; // Clear previous letters AND canvas (if appended directly)

    // Remove and re-create canvas on each level load for freshness
    let oldCanvas = document.getElementById('connection-canvas');
    if (oldCanvas) {
        oldCanvas.remove();
    }
    connectionCanvas = document.createElement('canvas');
    connectionCanvas.id = 'connection-canvas';
    lettersContainer.appendChild(connectionCanvas);
    ctx = connectionCanvas.getContext('2d');

    // Re-apply CSS styles to the newly created canvas (they won't apply automatically if created by JS)
    connectionCanvas.style.position = 'absolute';
    connectionCanvas.style.top = '0';
    connectionCanvas.style.left = '0';
    connectionCanvas.style.width = '100%';
    connectionCanvas.style.height = '100%';
    connectionCanvas.style.pointerEvents = 'none';
    connectionCanvas.style.zIndex = '5';
    connectionCanvas.style.borderRadius = '50%';


    currentWordDisplay.textContent = '';
    targetWordsDisplay.innerHTML = '';
    setMessage('', 'info');
    nextLevelArea.style.display = 'none';

    selectedLetters = [];
    currentWord = '';
    foundWords.clear();

    if (completedLevels.has(level.id)) {
        level.wordsToFind.forEach(word => foundWords.add(word));
    }


    const shuffledLetters = shuffleArray(level.mainWord.split(''));

    const letterDivs = [];
    shuffledLetters.forEach(letterChar => {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.textContent = letterChar;
        letterDiv.dataset.letter = letterChar;
        letterDiv.addEventListener('mousedown', handleLetterMouseDown);
        letterDiv.addEventListener('touchstart', handleLetterTouchStart, {passive: false});
        lettersContainer.appendChild(letterDiv);
        letterDivs.push(letterDiv);
    });

    // Use requestAnimationFrame for guaranteed layout update
    requestAnimationFrame(() => { // First RAF for general layout & letter positioning
        positionLettersInCircle(letterDivs); 

        requestAnimationFrame(() => { // Second RAF for canvas specific updates
            if (connectionCanvas) {
                connectionCanvas.width = lettersContainer.offsetWidth;
                connectionCanvas.height = lettersContainer.offsetHeight;
            }
        });
    });

    renderTargetWords();
    fillFoundWordsInitially();
    showGameView();
    revealButton.disabled = false; // Enable hint button on new level load
    document.body.classList.remove('hint-mode'); // Ensure hint mode is off
    isHintMode = false; // Reset hint mode state
}

function fillFoundWordsInitially() {
    const level = levels[currentLevelIndex];
    foundWords.forEach(word => {
        fillTargetWord(word);
    });
    if (foundWords.size === level.wordsToFind.length) {
        nextLevelArea.style.display = 'block';
        setMessage(`LEVEL ${level.id + 1} COMPLETED PREVIOUSLY!`, 'info');
    }
}


function renderTargetWords() {
    targetWordsDisplay.innerHTML = '';

    const level = levels[currentLevelIndex];
    level.wordsToFind.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('target-word');
        wordDiv.dataset.word = word;

        for (let i = 0; i < word.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.classList.add('target-letter');
            letterSpan.dataset.index = i;
            letterSpan.addEventListener('click', handleTargetLetterClick); // Add click listener for hints
            wordDiv.appendChild(letterSpan);
        }
        targetWordsDisplay.appendChild(wordDiv);
    });
}

function fillTargetWord(word) {
    const targetWordDiv = targetWordsDisplay.querySelector(`.target-word[data-word="${word}"]`);
    if (targetWordDiv) {
        const letterSpans = targetWordDiv.querySelectorAll('.target-letter');
        word.split('').forEach((char, index) => {
            if (letterSpans[index]) {
                letterSpans[index].textContent = char.toUpperCase();
                letterSpans[index].classList.add('filled');
            }
        });
    }
}

function createLevelSelectionButtons() {
    levelButtonsContainer.innerHTML = '';
    levels.forEach((level) => {
        const button = document.createElement('button');
        button.textContent = `Level ${level.id + 1}`;
        button.addEventListener('click', () => loadLevel(level.id));
        if (completedLevels.has(level.id)) {
            button.classList.add('completed-level');
        }
        levelButtonsContainer.appendChild(button);
    });
}

// --- Dragging Event Handlers ---

function handleLetterMouseDown(event) {
    // Only handle mouse events
    if (event.type !== 'mousedown') return;
    if (event.button !== 0) return;
    if (isHintMode) {
        setMessage('Click a letter box to reveal a hint!', 'info');
        return;
    }
    isDragging = true;
    clearSelection();
    addLetterToSelection(event.target);
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
}

function handleLetterTouchStart(event) {
    // Only handle touch events
    if (event.type !== 'touchstart') return;
    if (isHintMode) {
        setMessage('Tap a letter box to reveal a hint!', 'info');
        return;
    }
    isDragging = true;
    clearSelection();
    addLetterToSelection(event.target);
    document.addEventListener('touchmove', handleDocumentTouchMove, {passive: false});
    document.addEventListener('touchend', handleDocumentTouchEnd);
}

// ...existing code...
function handleDocumentMouseMove(event) {
    if (!isDragging) return;
    if (!event) return;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const containerRect = lettersContainer.getBoundingClientRect();
    const relX = mouseX - containerRect.left;
    const relY = mouseY - containerRect.top;

    if (selectedLetters.length > 0) {
        drawLine(selectedLetters[selectedLetters.length - 1], relX, relY);
    }

    const hoveredElement = document.elementFromPoint(mouseX, mouseY);

    // Undo logic - if hovering over the previously selected letter (but not the first)
    if (selectedLetters.length > 1 && hoveredElement === selectedLetters[selectedLetters.length - 2]) {
        const lastLetterDiv = selectedLetters[selectedLetters.length - 1];
        const prevLetterDiv = selectedLetters[selectedLetters.length - 2];

        const lastLetterCenter = getElementCenter(lastLetterDiv);
        const prevLetterCenter = getElementCenter(prevLetterDiv);

        const mouseToPrevCenterDistance = getDistance({x: relX, y: relY}, prevLetterCenter);
        const threshold = lastLetterDiv.offsetWidth * 0.7;

        if (mouseToPrevCenterDistance < threshold) {
            const poppedLetterDiv = selectedLetters.pop();
            poppedLetterDiv.classList.remove('selected');
            currentWord = currentWord.slice(0, -1);
            currentWordDisplay.textContent = currentWord;
            setMessage('', 'info');

            if (selectedLetters.length > 0) {
                const newLastLetterCenter = getElementCenter(selectedLetters[selectedLetters.length - 1]);
                drawLine(selectedLetters[selectedLetters.length - 1], newLastLetterCenter.x, newLastLetterCenter.y);
            } else {
                ctx.clearRect(0, 0, connectionCanvas.width, connectionCanvas.height);
            }
            return;
        }
    }

    // Standard add letter logic: if new valid letter is hovered
    if (hoveredElement && hoveredElement.classList.contains('letter') &&
        !selectedLetters.includes(hoveredElement)) {
        addLetterToSelection(hoveredElement);
    }
}

function handleDocumentMouseUp(event) {
    if (isDragging) {
        isDragging = false;
        document.removeEventListener('mousemove', handleDocumentMouseMove);
        document.removeEventListener('mouseup', handleDocumentMouseUp);
        submitWord();
        ctx.clearRect(0, 0, connectionCanvas.width, connectionCanvas.height); // Clear final lines
    }
}

function handleDocumentTouchMove(event) {
    if (!isDragging) return;
    event.preventDefault(); // Prevent scrolling while dragging
    if (!event.touches || event.touches.length === 0) return;
    const touch = event.touches[0];
    const containerRect = lettersContainer.getBoundingClientRect();
    const touchX = touch.clientX - containerRect.left;
    const touchY = touch.clientY - containerRect.top;

    if (selectedLetters.length > 0) {
        drawLine(selectedLetters[selectedLetters.length - 1], touchX, touchY);
    }

    const hoveredElement = document.elementFromPoint(touch.clientX, touch.clientY);

    // Undo logic - if hovering over the previously selected letter (but not the first)
    if (selectedLetters.length > 1 && hoveredElement === selectedLetters[selectedLetters.length - 2]) {
        const lastLetterDiv = selectedLetters[selectedLetters.length - 1];
        const prevLetterDiv = selectedLetters[selectedLetters.length - 2];

        const lastLetterCenter = getElementCenter(lastLetterDiv);
        const prevLetterCenter = getElementCenter(prevLetterDiv);

        const touchToPrevCenterDistance = getDistance({x: touchX, y: touchY}, prevLetterCenter);
        const threshold = lastLetterDiv.offsetWidth * 0.7;

        if (touchToPrevCenterDistance < threshold) {
            const poppedLetterDiv = selectedLetters.pop();
            poppedLetterDiv.classList.remove('selected');
            currentWord = currentWord.slice(0, -1);
            currentWordDisplay.textContent = currentWord;
            setMessage('', 'info');

            if (selectedLetters.length > 0) {
                const newLastLetterCenter = getElementCenter(selectedLetters[selectedLetters.length - 1]);
                drawLine(selectedLetters[selectedLetters.length - 1], newLastLetterCenter.x, newLastLetterCenter.y);
            } else {
                ctx.clearRect(0, 0, connectionCanvas.width, connectionCanvas.height);
            }
            return;
        }
    }

    // Standard add letter logic: if new valid letter is hovered
    if (hoveredElement && hoveredElement.classList.contains('letter') &&
        !selectedLetters.includes(hoveredElement)) {
        addLetterToSelection(hoveredElement);
    }
}

function handleDocumentTouchEnd(event) {
    if (isDragging) {
        isDragging = false;
        document.removeEventListener('touchmove', handleDocumentTouchMove);
        document.removeEventListener('touchend', handleDocumentTouchEnd);
        submitWord();
        ctx.clearRect(0, 0, connectionCanvas.width, connectionCanvas.height); // Clear final lines
    }
}

function addLetterToSelection(letterDiv) {
    selectedLetters.push(letterDiv);
    currentWord += letterDiv.dataset.letter;
    currentWordDisplay.textContent = currentWord;
    letterDiv.classList.add('selected');
    setMessage('', 'info');
}

// --- Game Logic Functions ---

function setMessage(msg, type = 'info') {
    messageArea.textContent = msg;
    messageArea.className = '';
    messageArea.classList.add(type);
}

function clearSelection() {
    selectedLetters.forEach(letterDiv => {
        letterDiv.classList.remove('selected');
    });
    selectedLetters = [];
    currentWord = '';
    currentWordDisplay.textContent = '';
    setMessage('', 'info');
    if (ctx) {
        ctx.clearRect(0, 0, connectionCanvas.width, connectionCanvas.height);
    }
}

function submitWord() {
    if (currentWord.length < 3) {
        if (currentWord.length > 0) { // Only show message if a word was started
            setMessage('Words must be at least 3 letters long.', 'info');
        }
        clearSelection();
        return;
    }

    const wordToCheck = currentWord.toLowerCase();

    if (!allValidWords.has(wordToCheck)) {
        setMessage(`"${currentWord.toUpperCase()}" is not a valid word.`, 'error');
        setTimeout(clearSelection, 1000);
        return;
    }

    const level = levels[currentLevelIndex];
    if (!level.wordsToFind.includes(wordToCheck)) {
        setMessage(`"${currentWord.toUpperCase()}" is a word, but not for this level.`, 'info');
        setTimeout(clearSelection, 1000);
        return;
    }

    if (foundWords.has(wordToCheck)) {
        setMessage(`You already found "${currentWord.toUpperCase()}"!`, 'info');
        setTimeout(clearSelection, 1000);
        return;
    }

    foundWords.add(wordToCheck);
    fillTargetWord(wordToCheck);

    setMessage(`Great! You found "${currentWord.toUpperCase()}"!`, 'success');
    clearSelection();
    revealButton.disabled = false; // Re-enable hint button after a word is found

    if (foundWords.size === level.wordsToFind.length) {
        setMessage(`LEVEL ${level.id + 1} COMPLETE! All words found!`, 'success');
        completedLevels.add(level.id); // Mark level as completed
        nextLevelArea.style.display = 'block';
        createLevelSelectionButtons(); // Re-render level buttons to show highlight
        revealButton.disabled = true; // Disable hint button on level completion
    }
}

function handleTargetLetterClick(event) {
    if (!isHintMode || event.target.classList.contains('filled')) {
        return;
    }

    const targetSpan = event.target;
    const wordDiv = targetSpan.closest('.target-word');
    const word = wordDiv.dataset.word;
    const index = parseInt(targetSpan.dataset.index, 10);
    const correctLetter = word[index].toUpperCase();

    targetSpan.textContent = correctLetter;
    targetSpan.classList.add('filled');

    // Turn off hint mode after using it
    isHintMode = false;
    document.body.classList.remove('hint-mode');
    setMessage('', 'info'); // Clear message
    revealButton.textContent = 'Reveal Letter';
    lettersContainer.style.pointerEvents = 'auto'; // Re-enable dragging
    document.querySelectorAll('.target-letter.hint-active').forEach(span => {
        span.classList.remove('hint-active');
    });
}


// --- Event Listener Assignments ---
document.addEventListener('DOMContentLoaded', (event) => {
    nextLevelButton.addEventListener('click', () => {
        if (currentLevelIndex < levels.length - 1) {
            loadLevel(currentLevelIndex + 1);
        } else {
            setMessage('You completed all levels!', 'info');
            showLevelSelectionView();
        }
    });
    selectLevelButton.addEventListener('click', showLevelSelectionView);
    backToGameButton.addEventListener('click', showGameView);

    // --- New How to Play Logic ---
    howToPlayButton.addEventListener('click', () => {
        howToPlayOverlay.classList.add('visible');
    });

    closeHowToPlayButton.addEventListener('click', () => {
        howToPlayOverlay.classList.remove('visible');
    });
    // --- End New Logic ---


    // Reveal button listener
    revealButton.addEventListener('click', () => {
        isHintMode = !isHintMode; // Toggle hint mode
        document.body.classList.toggle('hint-mode', isHintMode); // Add/remove class for cursor
        if (isHintMode) {
            setMessage('Hint Mode: Click an empty box to reveal a letter.', 'info');
            revealButton.textContent = 'Cancel Hint';
            lettersContainer.style.pointerEvents = 'none'; // Disable dragging when in hint mode
            // Add hint-active class to target letters for styling
            document.querySelectorAll('.target-letter:not(.filled)').forEach(span => {
                span.classList.add('hint-active');
            });
        } else {
            setMessage('', 'info'); // Clear message
            revealButton.textContent = 'Reveal Letter';
            lettersContainer.style.pointerEvents = 'auto'; // Re-enable dragging
            // Remove hint-active class
            document.querySelectorAll('.target-letter.hint-active').forEach(span => {
                span.classList.remove('hint-active');
            });
        }
    });

    // Initial Game Setup
    loadDictionary().then(() => {
        loadLevel(currentLevelIndex);
        createLevelSelectionButtons();
    });

    // Resize listener
    window.addEventListener('resize', () => {
        const currentLetterDivs = Array.from(lettersContainer.querySelectorAll('.letter'));
        if (currentLetterDivs.length > 0) {
            positionLettersInCircle(currentLetterDivs); // Re-position letters on resize
        }
        if (connectionCanvas) { // Check if canvas exists
            connectionCanvas.width = lettersContainer.offsetWidth;
            connectionCanvas.height = lettersContainer.offsetHeight;
            if (selectedLetters.length > 0) {
                const lastLetterCenter = getElementCenter(selectedLetters[selectedLetters.length-1]);
                drawLine(selectedLetters[selectedLetters.length-1], lastLetterCenter.x, lastLetterCenter.y);
            }
        }
    });
});