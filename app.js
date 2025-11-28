// App State
let senators = senatorsData;
let currentCardIndex = 0;
let cardOrder = [];
let answers = {};
let isFlipped = false;
let sortMode = 'alphabetical';

// DOM Elements
const flashcard = document.getElementById('flashcard');
const stateName = document.getElementById('stateName');
const electionYear = document.getElementById('electionYear');
const senatorImage = document.getElementById('senatorImage');
const senatorName = document.getElementById('senatorName');
const senatorParty = document.getElementById('senatorParty');
const factsContainer = document.getElementById('factsContainer');
const flipBtn = document.getElementById('flipBtn');
const correctBtn = document.getElementById('correctBtn');
const incorrectBtn = document.getElementById('incorrectBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const alphabeticalBtn = document.getElementById('alphabeticalBtn');
const randomBtn = document.getElementById('randomBtn');
const restartBtn = document.getElementById('restartBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const cardPosition = document.getElementById('cardPosition');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const menuToggle = document.getElementById('menuToggle');
const menuDropdown = document.getElementById('menuDropdown');

// Initialize App
function init() {
    loadSession();
    renderCard();
    updateUI();
}

// Load session from localStorage
function loadSession() {
    const savedSession = localStorage.getItem('flashcardSession');

    if (savedSession) {
        const session = JSON.parse(savedSession);
        currentCardIndex = session.currentCardIndex || 0;
        cardOrder = session.cardOrder || [];
        answers = session.answers || {};
        isFlipped = session.isFlipped || false;
        sortMode = session.sortMode || 'alphabetical';
    }

    // Initialize card order if empty or if senators length doesn't match
    if (cardOrder.length !== senators.length) {
        initializeCardOrder();
    }

    // Apply flip state
    if (isFlipped) {
        flashcard.classList.add('flipped');
    }
}

// Save session to localStorage
function saveSession() {
    const session = {
        currentCardIndex,
        cardOrder,
        answers,
        isFlipped,
        sortMode
    };
    localStorage.setItem('flashcardSession', JSON.stringify(session));
}

// Initialize card order based on sort mode
function initializeCardOrder() {
    if (sortMode === 'alphabetical') {
        sortAlphabetically();
    } else {
        shuffleCards();
    }
}

// Sort cards alphabetically
function sortAlphabetically() {
    cardOrder = senators.map((_, index) => index);

    cardOrder.sort((a, b) => {
        const senatorA = senators[a];
        const senatorB = senators[b];

        // Sort by state name
        if (isFlipped) {
            // If viewing back side, sort by senator name
            return senatorA.name.localeCompare(senatorB.name);
        } else {
            // If viewing front side, sort by state name
            return senatorA.state.localeCompare(senatorB.state);
        }
    });
}

// Shuffle cards randomly
function shuffleCards() {
    cardOrder = senators.map((_, index) => index);

    // Fisher-Yates shuffle algorithm
    for (let i = cardOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardOrder[i], cardOrder[j]] = [cardOrder[j], cardOrder[i]];
    }
}

// Render current card
function renderCard() {
    if (senators.length === 0) return;

    const senatorIndex = cardOrder[currentCardIndex];
    const senator = senators[senatorIndex];

    // Front side
    stateName.textContent = senator.state;
    electionYear.textContent = `(${senator.electionYear})`;

    // Back side
    senatorImage.src = senator.image;
    senatorImage.alt = senator.name;
    senatorName.textContent = senator.name;
    senatorParty.textContent = senator.party;

    // Fun facts
    factsContainer.innerHTML = '';
    senator.funFacts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        factsContainer.appendChild(li);
    });

    // Update answer button states
    updateAnswerButtons();
}

// Update answer button states
function updateAnswerButtons() {
    const answer = answers[currentCardIndex];

    correctBtn.classList.remove('selected');
    incorrectBtn.classList.remove('selected');

    if (answer === 'correct') {
        correctBtn.classList.add('selected');
    } else if (answer === 'incorrect') {
        incorrectBtn.classList.add('selected');
    }
}

// Update UI (progress, score, navigation)
function updateUI() {
    // Progress bar
    const viewedCards = currentCardIndex + 1;
    const totalCards = senators.length;
    const progressPercentage = (viewedCards / totalCards) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${viewedCards} / ${totalCards}`;

    // Card position
    cardPosition.textContent = `${viewedCards} / ${totalCards}`;

    // Score
    let correct = 0;
    let incorrect = 0;

    Object.values(answers).forEach(answer => {
        if (answer === 'correct') correct++;
        if (answer === 'incorrect') incorrect++;
    });

    correctCount.textContent = correct;
    incorrectCount.textContent = incorrect;

    // Navigation buttons
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === senators.length - 1;
}

// Flip card
function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped');
    saveSession();
}

// Mark answer
function markAnswer(answer) {
    answers[currentCardIndex] = answer;
    updateAnswerButtons();
    updateUI();
    saveSession();
}

// Navigate to previous card
function goToPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;

        // Reset flip state for new card
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }

        renderCard();
        updateUI();
        saveSession();
    }
}

// Navigate to next card
function goToNextCard() {
    if (currentCardIndex < senators.length - 1) {
        currentCardIndex++;

        // Reset flip state for new card
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }

        renderCard();
        updateUI();
        saveSession();
    }
}

// Sort cards alphabetically
function setAlphabeticalOrder() {
    sortMode = 'alphabetical';
    currentCardIndex = 0;

    // Reset flip state
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }

    sortAlphabetically();
    renderCard();
    updateUI();
    saveSession();
}

// Set random order
function setRandomOrder() {
    sortMode = 'random';
    currentCardIndex = 0;

    // Reset flip state
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }

    shuffleCards();
    renderCard();
    updateUI();
    saveSession();
}

// Restart session
function restartSession() {
    if (confirm('Are you sure you want to restart your session? This will clear all progress.')) {
        // Clear all state
        currentCardIndex = 0;
        answers = {};
        isFlipped = false;

        // Reset flip state
        flashcard.classList.remove('flipped');

        // Clear localStorage and reinitialize
        localStorage.removeItem('flashcardSession');

        initializeCardOrder();
        renderCard();
        updateUI();
        saveSession();
    }
}

// Toggle menu
function toggleMenu() {
    menuDropdown.classList.toggle('hidden');
}

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);
flipBtn.addEventListener('click', flipCard);
correctBtn.addEventListener('click', () => markAnswer('correct'));
incorrectBtn.addEventListener('click', () => markAnswer('incorrect'));
prevBtn.addEventListener('click', goToPreviousCard);
nextBtn.addEventListener('click', goToNextCard);
alphabeticalBtn.addEventListener('click', () => {
    setAlphabeticalOrder();
    menuDropdown.classList.add('hidden');
});
randomBtn.addEventListener('click', () => {
    setRandomOrder();
    menuDropdown.classList.add('hidden');
});
restartBtn.addEventListener('click', () => {
    restartSession();
    menuDropdown.classList.add('hidden');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        goToPreviousCard();
    } else if (e.key === 'ArrowRight') {
        goToNextCard();
    } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        flipCard();
    }
});

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
