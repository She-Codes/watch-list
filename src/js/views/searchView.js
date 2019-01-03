export const searchInput = document.getElementById('show-search-input');

export const getQuery = () => searchInput.value.trim();

export const displayResults = () => {
  // show overlay
  const markup = `
  <div class="search-results overlay">
        <button class="close-button">
          <svg class="close-icon">
            <use xlink:href="#close-icon">
          </svg>
        </button>
        <div class="content">
          <ul>
            
          </ul>
        </div>
      </div>
  `;
}