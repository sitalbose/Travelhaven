// Array of property objects
const properties = [
    {
        name: "Cozy Cabin in the Woods",
        location: "Colorado",
        price: "$150/night",
        image: "https://thetravel100.com/wp-content/uploads/sites/9/2020/10/usa-cabin-rentals-airbnb.jpg",
    },
    {
        name: "Luxury Villa by the Beach",
        location: "Malibu",
        price: "$500/night",
        image: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-ocean-side-2.jpg",
    },
    {
        name: "Modern Apartment in the City",
        location: "New York",
        price: "$200/night",
        image: "https://media.architecturaldigest.com/photos/60dcd7c2f837262bdb349dc8/16:9/w_1920,c_limit/NHD-50WEST-F.OUDEMAN%C2%A9-02.jpg",
    },
    {
        name: "Charming Cottage",
        location: "Vermont",
        price: "$120/night",
        image: "https://i.pinimg.com/564x/d4/93/6c/d4936c58694d0445ae8e040948709091.jpg",
    },
    {
        name: "Beachfront Condo",
        location: "Miami",
        price: "$300/night",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237998288.jpg?k=0cf8808b2fa7b048b43044321494d996fc9e170dc59ed111337c50ed9af87901&o=&hp=1"
    },
    {
        name: "Mountain Lodge",
        location: "Aspen",
        price: "$400/night",
        image: "https://i0.wp.com/wp.usatodaysports.com/wp-content/uploads/sites/88/2015/03/screen-shot-2015-03-24-at-3-14-12-pm.jpg?resize=780%2C594&ssl=1",
    },
];

// Function to display properties dynamically
function displayProperties(propertiesToDisplay) {
    const propertyGrid = document.getElementById("property-grid");
    propertyGrid.innerHTML = ""; // Clear existing properties

    propertiesToDisplay.forEach((property) => {
        const propertyElement = document.createElement("div");
        propertyElement.classList.add("property");

        propertyElement.innerHTML = `
            <img src="${property.image}" alt="${property.name}">
            <h4>${property.name}</h4>
            <p>Location: ${property.location}</p>
            <p>Price: ${property.price}</p>
        `;

        propertyGrid.appendChild(propertyElement);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredProperties = properties.filter((property) =>
        property.name.toLowerCase().includes(searchInput) ||
        property.location.toLowerCase().includes(searchInput)
    );
    displayProperties(filteredProperties);
}

// Event listener for search button
document.getElementById("search-button").addEventListener("click", handleSearch);

// Display all properties on initial load
window.onload = function() {
    displayProperties(properties);
};
