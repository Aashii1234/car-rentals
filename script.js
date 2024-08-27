// Function to handle the search button click
function searchVehicles() {
    // Get the form values
    const pickupLocation = document.getElementById('pickup-location').value;
    const dropoffLocation = document.getElementById('dropoff-location').value;
    const pickupDate = document.getElementById('pickup-date').value;
    const dropoffDate = document.getElementById('dropoff-date').value;

    // Create a mock result for demonstration (replace this with actual search logic)
    const results = `
        <div class="vehicle">
            <img src="https://via.placeholder.com/300" alt="Vehicle 1">
            <h3>Vehicle 1</h3>
            <p>Location: ${pickupLocation} to ${dropoffLocation}</p>
            <p>Pick-up Date: ${pickupDate}</p>
            <p>Drop-off Date: ${dropoffDate}</p>
            <p>Price: $50/day</p>
        </div>
    `;

    // Display search results
    document.getElementById('search-results').innerHTML = results;
}
