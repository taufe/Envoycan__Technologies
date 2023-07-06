// Function to handle the search
function handleSearch() {
  var searchInput = document.querySelector('.search input[name="search"]').value.toLowerCase(); // Get the search input value

  var items = document.querySelectorAll('.item'); // Select all items

  items.forEach(function(item) {
    var itemText = item.textContent.toLowerCase(); // Get the item text content in lowercase

    if (itemText.includes(searchInput)) {
      item.style.display = 'block'; // Show the item if it contains the search input
    } else {
      item.style.display = 'none'; // Hide the item if it doesn't match the search input
    }
  });
}

// Add event listener to the search input
document.querySelector('.search input[name="search"]').addEventListener('input', function(event) {
  handleSearch();
});

// Add event listener to the search button
document.querySelector('.search_btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  handleSearch();
});

// Add click event listener to all items
var items = document.querySelectorAll('.item');
items.forEach(function(item) {
  item.addEventListener('click', function(event) {
    var clickedItem = this;
    var itemText = clickedItem.textContent;
    
    // Hide all items
    items.forEach(function(item) {
      item.style.display = 'none';
    });

    // Hide the fruit_item_bg_clr element
    var fruitItemBgClr = document.querySelector('.fruit_item_bg_clr');
    fruitItemBgClr.style.display = 'none';

    // Set the search bar value to the clicked item's text
    document.querySelector('.search input[name="search"]').value = itemText;
  });
});
