document.addEventListener("DOMContentLoaded", () => {
    const factElement = document.getElementById("fact");
    const newFactButton = document.getElementById("newFactButton");
    const currentTimeElement = document.getElementById("current-time");
    const currentDateElement = document.getElementById("current-date");

    function fetchFact() {
        const currentDate = new Date();
        const dateString = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
    
        fetch(`http://numbersapi.com/${dateString}/date`)
            .then(response => response.text())
            .then(data => {
                factElement.textContent = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                factElement.textContent = 'Failed to fetch data. Please try again later.';
            });
    }
    
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
        currentTimeElement.textContent = timeString;
        currentDateElement.textContent = dateString;
    }

    // Fetch a fact when the page loads
    fetchFact();
    updateTime();

    // Fetch a new fact when the button is clicked
    newFactButton.addEventListener('click', fetchFact);

    // Update time every second
    setInterval(updateTime, 1000);
});
