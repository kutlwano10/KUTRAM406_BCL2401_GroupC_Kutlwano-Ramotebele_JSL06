// Sample menu data (Consider fetching this data from a server in a real-world scenario)

const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function generateMenuItems(menu) {
    // Get the menu container element from the HTML

    // Loop through each category and its items in the menu object
    const menuItems = Object.entries(menu).map(([course, foods]) => {
       return {course, foods}
    })
    //returns course and also its items which are foods
     return menuItems;
}



function displayMenuItems(menuItems) {
    const menuDiv = document.getElementById("menu")

    menuItems.forEach(menuItem => { //this menuItem perameter will contain all the course names we need to display.comes in handy 

        const menuEl = document.createElement('div');
        menuEl.classList.add('menu-item');
        //now we want to display the course names on the browser
        const heading = document.createElement('h2');
        //We need to display it , then append it to the menuElement
        heading.textContent = menuItem.course;
        menuEl.appendChild(heading)
       
        const foodListDiv = document.createElement('div')
        //We want to display the food list inside the html and also display on the web
        menuItem.foods.forEach(food => {
            const foodItemEl = document.createElement('li');
            foodItemEl.classList.add('food-item')
            
            foodItemEl.textContent = food;//we want to display the food on the browser
            foodListDiv.appendChild(foodItemEl)
            

        });
        //We created a function that targets every item from the food-item classList and it displays on the web
        foodListDiv.addEventListener('click', event => {
            const clickedItem = event.target;
            if (clickedItem.classList.contains('food-item')) {
                addToOrder(clickedItem.textContent)
            }
        })
         //we need to append the heading into the menuEl
         menuEl.appendChild(foodListDiv)
         //we need to append the menuEl into the MenuDiv
         menuDiv.appendChild(menuEl)
    })
    
    
    
}

const menuItems = generateMenuItems(menu);
displayMenuItems(menuItems);



// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const addOrderEl = document.getElementById('order-items');
    // Create a list item for the order
    const orderedItem = document.createElement('li');
    orderedItem.textContent = itemName;
    addOrderEl.appendChild(orderedItem);



    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
