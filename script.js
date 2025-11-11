// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', function () {
            // Toggle the 'selected' class for styling
            this.classList.toggle('selected');

            // Also toggle the checkbox state (optional, for logic)
            const checkbox = this.querySelector('input');
            checkbox.checked = !checkbox.checked;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const meals = document.querySelectorAll('.second');
    const counter = document.getElementById('meal-count');

    meals.forEach(meal => {
        meal.addEventListener('click', () => {
            meal.classList.toggle('selected');

            // Count how many are selected
            const selectedCount = document.querySelectorAll('.second.selected').length;
            counter.innerHTML = `you have selected <strong>${selectedCount}</strong> meal types per day`;
        });
    });
});
