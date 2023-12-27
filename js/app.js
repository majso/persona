// app.js

document.addEventListener('DOMContentLoaded', function() {
  // Fetch categories from the API
  fetchCategories();

  // Track the selected status, category and feed
  let selectedStatus = null;
  let selectedCategory = null;
  let selectedFeed = null;

  // Add event listener to status list
  document.getElementById('statusList')
      .addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
          // Check if the clicked status is already selected
          const isStatusSelected = event.target.classList.contains('selected');
          // Remove the 'selected' class from the previously selected status
          if (selectedStatus) {
            selectedStatus.classList.remove('selected');
          }
          // If the clicked status was not selected, add the 'selected' class
          // and update the selection
          if (!isStatusSelected) {
            event.target.classList.add('selected');
            selectedStatus = event.target;
          } else {
            // If the clicked status was already selected, reset the
            // selectedStatus
            selectedStatus = null;
          }
          // Fetch entries based on the selected filters
          fetchEntries(
              selectedStatus && selectedStatus.dataset.status == 'unread' ?
                  'unread' :
                  (selectedStatus && selectedStatus.dataset.status == 'read' ?
                       'read' :
                       null),
              selectedCategory ? selectedCategory.dataset.categoryId : null,
              selectedFeed ? selectedFeed.dataset.feedId : null,
              selectedStatus && selectedStatus.dataset.status === 'favorites')
        }
      });

  // Add event listener to category list
  document.getElementById('categoryList')
      .addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
          // Check if the clicked category is already selected
          const isCategorySelected =
              event.target.classList.contains('selected');
          // Remove the 'selected' class from the previously selected category
          if (selectedCategory) {
            selectedCategory.classList.remove('selected');
          }

          // If the clicked category was not selected, add the 'selected' class
          // and update the selection
          if (!isCategorySelected) {
            event.target.classList.add('selected');
            selectedCategory = event.target;
          } else {
            // If the clicked category was already selected, reset the
            // selectedCategory
            selectedCategory = null;
          }
          fetchFeedsForCategory(
              selectedCategory ? selectedCategory.dataset.categoryId : null);

          // Fetch entries by category, combining with selected status and
          // starred status
          fetchEntries(
              selectedStatus && selectedStatus.dataset.status == 'unread' ?
                  'unread' :
                  (selectedStatus && selectedStatus.dataset.status == 'read' ?
                       'read' :
                       null),
              selectedCategory ? selectedCategory.dataset.categoryId : null,
              selectedFeed ? selectedFeed.dataset.feedId : null,
              selectedStatus && selectedStatus.dataset.status === 'favorites' ?
                  true :
                  null);
        }
      });

  // Add event listener to feed list
  document.getElementById('feedList')
      .addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
          // Check if the clicked feed is already selected
          const isFeedSelected = event.target.classList.contains('selected');
          // Remove the 'selected' class from the previously selected feed
          if (selectedFeed) {
            selectedFeed.classList.remove('selected');
          }
          // If the clicked feed was not selected, add the 'selected' class and
          // update the selection
          if (!isFeedSelected) {
            event.target.classList.add('selected');
            selectedFeed = event.target;
          } else {
            // If the clicked feed was already selected, reset the selectedFeed
            selectedFeed = null;
          }
          // Fetch entries for feed, combining with selected status, category,
          // and starred status
          fetchEntries(
              selectedStatus && selectedStatus.dataset.status == 'unread' ?
                  'unread' :
                  (selectedStatus && selectedStatus.dataset.status == 'read' ?
                       'read' :
                       null),
              selectedCategory ? selectedCategory.dataset.categoryId : null,
              selectedFeed ? selectedFeed.dataset.feedId : null,
              selectedStatus && selectedStatus.dataset.status === 'favorites');
        }
      });
});

// Directly include your token and base URL here
const authToken = '';
const baseUrl = '';

function fetchCategories() {
  // Use the baseUrl variable to construct the full API endpoint
  fetch(
      `${baseUrl}/v1/categories`,
      {mode: 'cors', headers: {'X-Auth-Token': authToken}})
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

function fetchEntries(status, categoryId, feedId, starred) {
  // Build the query string
  const queryParams = [];
  if (status) {
    queryParams.push(`status=${status}`);
  }
  if (categoryId) {
    queryParams.push(`category_id=${categoryId}`);
  }
  if (feedId) {
    queryParams.push(`feed_id=${feedId}`);
  }
  if (starred !== undefined) {
    queryParams.push(`starred=${starred}`);
  }
  queryParams.push(`limit=20`);
  queryParams.push(`order=published_at`);
  queryParams.push(`direction=desc`);

  // Construct the full API endpoint with the query string
  const queryString = queryParams.join('&');
  const apiUrl =
      `${baseUrl}/v1/entries${queryParams.length > 0 ? '?' : ''}${queryString}`;

  // Fetch entries using the constructed API endpoint
  fetch(apiUrl, {
    mode: 'cors',
    headers: {
      'X-Auth-Token': authToken,
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

function fetchEntriesByCategory(categoryId) {
  // Use the baseUrl variable to construct the full API endpoint
  fetch(
      `${baseUrl}/v1/categories/${
          categoryId}/entries?limit=20&order=published_at&direction=desc`,
      {mode: 'cors', headers: {'X-Auth-Token': authToken}})
      .then(response => response.json())
      .then(entries => {
        // Display entries in the UI
        displayEntries(entries);
      })
      .catch(error => {
        console.error('Error fetching entries:', error);
      });
}

// Function to fetch feeds for a specific category
function fetchFeedsForCategory(categoryId) {
  if (categoryId) {
    fetch(
        `${baseUrl}/v1/categories/${categoryId}/feeds`,
        {mode: 'cors', headers: {'X-Auth-Token': authToken}})
        .then(response => response.json())
        .then(feeds => {
          // Display feeds in the UI
          displayFeeds(feeds);
        })
        .catch(error => {
          console.error(
              `Error fetching feeds for category ${categoryId}:`, error);
        });
  } else {
    displayFeeds();
  }
}

// Function to fetch entries for a specific feed
function fetchEntriesForFeed(feedId) {
  fetch(
      `${baseUrl}/v1/feeds/${
          feedId}/entries?limit=8&order=published_at&direction=desc`,
      {mode: 'cors', headers: {'X-Auth-Token': authToken}})
      .then(response => response.json())
      .then(entries => {
        // Display entries in the UI
        displayEntries(entries);
      })
      .catch(error => {
        console.error(`Error fetching entries for feed ${feedId}:`, error);
      });
}

// Function to fetch a specific entry by ID
function fetchEntryById(entryId) {
  // Use the API to fetch the specific entry by ID
  fetch(`${baseUrl}/v1/entries/${entryId}`, {
    mode: 'cors',
    headers: {
      'X-Auth-Token': authToken,
    }
  })
      .then(response => response.json())
      .then(entry => {
        // Update the UI to reflect the changes in the specific entry
        updateEntryInUI(entry);
      })
      .catch(error => {
        console.error(`Error fetching entry with ID ${entryId}:`, error);
      });
}

// Function to display feeds in the UI
function displayFeeds(feeds) {
  const feedList = document.getElementById('feedList');

  // Clear existing feeds
  feedList.innerHTML = '';

  // Display each feed as a list item
  if (feeds) {
    feeds.forEach(feed => {
      const listItem = document.createElement('li');
      listItem.textContent = feed.title;
      listItem.dataset.feedId = feed.id;
      feedList.appendChild(listItem);
    });
  }
}

function displayEntries(entries) {
  const entryGrid = document.getElementById('entryGrid');

  // Clear existing entries
  entryGrid.innerHTML = '';

  entries.entries.forEach(entry => {
    const entryBlock = createEntryBlock(entry);
    entryGrid.appendChild(entryBlock);
  });
}

// Function to update the UI with the changes in the specific entry
function updateEntryInUI(entry) {
  // Update the UI to reflect the changes in the entry
  // You can update the entry block using the entry data
  let entryBlock = document.querySelector(`[data-entry-id="${entry.id}"]`);
  if (entryBlock) {
    const newEntryBlock = createEntryBlock(entry);
    entryBlock.replaceWith(newEntryBlock);
  }
}

// Function to create an entry block
function createEntryBlock(entry) {
  const entryBlock = document.createElement('div');
  entryBlock.classList.add('entry-block');
  entryBlock.dataset.entryId = entry.id;

  // Extract the first image from the content
  const firstImage = extractFirstImage(entry.content);

  entryBlock.innerHTML = `
    <img src="${firstImage}" alt="${entry.title}">
    <h3>${entry.title}</h3>
    <p>${truncateContent(entry.content)}</p>
    <div class="entry-footer">
      <span class="published-date">${
      formatPublishedDate(entry.published_at)}</span>
      <span class="starred-icon" data-entry-id="${entry.id}" data-starred="${
      entry.starred}" title="Toggle Starred">
        ${getStarIcon(entry.starred)}
      </span>
      <span class="read-indicator" data-entry-id="${entry.id}" data-read="${
      entry.status === 'read'}" title="Toggle Read">
        ${getReadIndicator(entry.status === 'read')}
      </span>
    </div>
  `;

  // Add click event listeners to starred icon and read indicator
  const starredIcon = entryBlock.querySelector('.starred-icon');
  const readIndicator = entryBlock.querySelector('.read-indicator');

  starredIcon.addEventListener(
      'click', () => toggleStarred(entry.id, entry.starred));
  readIndicator.addEventListener(
      'click', () => toggleRead(entry.id, entry.status === 'read'));

  return entryBlock;
}

// Function to get the correct star icon based on the starred status
function getStarIcon(starred) {
  if (starred) {
    return `💙`;  // Starred icon
  } else {
    return `🖤`;  // Unstarred icon
  }
}

// Function to get the correct read indicator based on the read status
function getReadIndicator(read) {
  if (read) {
    return `🔵`;  // Read indicator
  } else {
    return `⚫`;  // Unread indicator
  }
}

// Function to toggle the starred status through the API
function toggleStarred(entryId, currentStarred) {
  // Use the API to update the starred status
  const newStarred = !currentStarred;  // Toggle the starred status
  console.log(`Starred status for entry ${entryId} updated to: ${newStarred}`);

  fetch(`${baseUrl}/v1/entries/${entryId}/bookmark`, {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'X-Auth-Token': authToken,
    }
  }).then(() => fetchEntryById(entryId));
}

// Function to toggle the read status through the API
function toggleRead(entryId, currentRead) {
  // Use the API to update the read status
  const newRead = !currentRead;  // Toggle the read status
  console.log(`Read status for entry ${entryId} updated to: ${newRead}`);

  fetch(`${baseUrl}/v1/entries`, {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': authToken,
    },
    body: JSON.stringify(
        {entry_ids: [entryId], status: newRead ? 'read' : 'unread'})
  }).then(() => fetchEntryById(entryId));
}

// Function to extract the first image from the content
function extractFirstImage(content) {
  const match = content.match(/<img [^>]*src=['"]([^'"]+)['"][^>]*>/);
  return match ? match[1] :
                 'placeholder-image-url';  // Provide a placeholder image URL if
  // no image is found
}

// Function to truncate content to a certain length
function truncateContent(content, maxLength = 300) {
  // Remove HTML tags (including images) from the content
  const plainTextContent = content.replace(/<[^>]*>/g, '');

  // Truncate the plain text content to the specified length
  return plainTextContent.length > maxLength ?
      plainTextContent.substring(0, maxLength) + '...' :
      plainTextContent;
}

// Function to format the published date
function formatPublishedDate(publishedDate) {
  // Implement your own formatting logic if needed
  return new Date(publishedDate).toLocaleString();
}
