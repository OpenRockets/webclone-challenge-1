import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-input') as HTMLInputElement;
  if (searchInput) {
    searchInput.focus();
  }

  // Add form submission for search
  const searchForm = document.querySelector('.search-form') as HTMLFormElement;
  const searchButton = document.querySelector('.search-buttons button:first-child') as HTMLButtonElement;
  const luckyButton = document.querySelector('.search-buttons button:last-child') as HTMLButtonElement;

  // Function to perform search
  const performSearch = (isLucky = false) => {
    const query = searchInput?.value.trim();
    if (query) {
      // In a real Google clone, we would redirect to the search results page
      // For this demo, we'll just log the search
      console.log(`Searching for: ${query}, Lucky: ${isLucky}`);

      if (isLucky) {
        alert(`Feeling lucky! Taking you directly to the first result for: ${query}`);
      } else {
        alert(`You searched for: ${query}`);
      }

      // Here you would typically redirect to the search results page
      // if (isLucky) {
      //   window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
      // } else {
      //   window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      // }
    }
  };

  // Set up event listeners for search
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      performSearch();
    });
  }

  if (searchButton) {
    searchButton.addEventListener('click', () => {
      performSearch();
    });
  }

  if (luckyButton) {
    luckyButton.addEventListener('click', () => {
      performSearch(true);
    });
  }

  // Add hover effect for "I'm Feeling Lucky" button
  if (luckyButton) {
    const feelingLuckyTexts = [
      "I'm Feeling Lucky",
      "I'm Feeling Curious",
      "I'm Feeling Hungry",
      "I'm Feeling Adventurous",
      "I'm Feeling Playful",
      "I'm Feeling Stellar",
      "I'm Feeling Doodley",
      "I'm Feeling Trendy",
      "I'm Feeling Artistic",
      "I'm Feeling Funny"
    ];

    // Save original text
    const originalText = luckyButton.textContent;

    luckyButton.addEventListener('mouseover', () => {
      // 20% chance to change the text when hovering
      if (Math.random() < 0.2) {
        const randomIndex = Math.floor(Math.random() * feelingLuckyTexts.length);
        luckyButton.textContent = feelingLuckyTexts[randomIndex];
      }
    });

    luckyButton.addEventListener('mouseout', () => {
      // Reset to original text when not hovering
      if (originalText) {
        luckyButton.textContent = originalText;
      }
    });
  }
});
