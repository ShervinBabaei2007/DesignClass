// For tell us about your dietary needs
// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', function () {
            // Toggle the 'selected' class for styling
            this.classList.toggle('selected');

            //toggle the checkbox state
            const checkbox = this.querySelector('input');
            if (checkbox) checkbox.checked = !checkbox.checked;
        });
    });
});

// CREDIT: ChatGPT
// Select duration of your mealplan
document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option1');
    const counter = document.getElementById('meal-count2');

    options.forEach(option => {
        const input = option.querySelector('input[type="radio"]');

        option.addEventListener('click', e => {
            e.preventDefault(); // prevent native radio behavior

            if (option.classList.contains('selected')) {
                // Deselect if already selected
                option.classList.remove('selected');
                input.checked = false;
                counter.innerHTML = 'No selection';
            } else {

                // Deselect all first
                options.forEach(o => {
                    o.classList.remove('selected');
                    o.querySelector('input[type="radio"]').checked = false;
                });

                // Select clicked
                option.classList.add('selected');
                input.checked = true;
                counter.innerHTML = `You have selected <strong>${option.querySelector('span').textContent}</strong>`;
            }
        });
    });
});


// CREDIT: ChatGPT
// some Sample food Choices below, you can choose
document.addEventListener('DOMContentLoaded', () => {
    const meals = document.querySelectorAll('.second');
    const counter = document.getElementById('meal-count');

    meals.forEach(meal => {
        meal.addEventListener('click', () => {
            meal.classList.toggle('selected');

            // Count how many are selected
            const selectedCount = document.querySelectorAll('.second.selected').length;
            counter.innerHTML = `you have selected <strong>${selectedCount}</strong> meal type${
                selectedCount !== 1 ? 's' : ''
            } per day`;
        });
    });
});
