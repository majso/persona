// app.js

document.addEventListener('DOMContentLoaded', function () {
  // Fetch categories from the API
  fetchCategories();
  
  // Add event listener to category list
  document.getElementById('categoryList').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const categoryId = event.target.dataset.categoryId;
      fetchEntriesByCategory(categoryId);
    }
  });
});

// Directly include your token and base URL here
const authToken = '';
const baseUrl = '';

function fetchCategories() {
  // Use the baseUrl variable to construct the full API endpoint
  fetch(`${baseUrl}/categories`, {
    mode:  'no-cors', 
    headers: {
      'X-Auth-Token': authToken
    }
  })
    .then(response => response.json())
    .then(categories => {
      // Display categories in the UI
      displayCategories(categories);
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
}

function displayCategories(categories) {
  const categoryList = document.getElementById('categoryList');
  
  // Clear existing categories
  categoryList.innerHTML = '';

  // Display each category as a list item
  categories.forEach(category => {
    const listItem = document.createElement('li');
    listItem.textContent = category.title;
    listItem.dataset.categoryId = category.id;
    categoryList.appendChild(listItem);
  });
}

function fetchEntriesByCategory(categoryId) {
  // Use the baseUrl variable to construct the full API endpoint
  fetch(`${baseUrl}/entries?category=${categoryId}`, {
    headers: {
      'X-Auth-Token': authToken
    }
  })
    .then(response => response.json())
    .then(entries => {
      // Display entries in the UI
      displayEntries(entries);
    })
    .catch(error => {
      console.error('Error fetching entries:', error);
    });
}

function displayEntries(entries) {
  const entryColumn = document.getElementById('entryColumn');
  
  // Clear existing entries
  entryColumn.innerHTML = '';

  // Display each entry as an entry block
  entries.forEach(entry => {
    const entryBlock = document.createElement('div');
    entryBlock.classList.add('entry-block');
    entryBlock.innerHTML = `
      <img src="${entry.image}" alt="${entry.title}">
      <h3>${entry.title}</h3>
      <p>${entry.description}</p>
    `;
    entryColumn.appendChild(entryBlock);
  });
}
