const rateCardContainer = document.querySelector('.card-front');
const thanksCardContainer = document.querySelector('.card-back');
const submitButton = document.getElementById('submit');
const rateAgainButton = document.getElementById('rate-again');
let selectedRating = document.getElementById('selected-rating');
const rating1 = document.getElementById('item1');
const rating2 = document.getElementById('item2');
const rating3 = document.getElementById('item3');
const rating4 = document.getElementById('item4');
const rating5 = document.getElementById('item5');
const ratingArray = [rating1, rating2, rating3, rating4, rating5];

let selectedValue = null;

ratingArray.forEach(item => {
    item.addEventListener('click', () => {
        selectedValue = item.textContent;
    });
});

submitButton.addEventListener ('click', () => {
    rateCardContainer.classList.add('hidden');
    thanksCardContainer.classList.remove('hidden');

    selectedRating.textContent = selectedValue;

    if (selectedValue === '0') {
        selectedRating.textContent = '0';
    };
});     

rateAgainButton.addEventListener ('click', () => {
    rateCardContainer.classList.remove('hidden');
    thanksCardContainer.classList.add('hidden');

    selectedValue = null;
    selectedRating.textContent = "";
});

