

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;

    const reviewItem = document.createElement('li');

    reviewItem.innerHTML = `
        <div class="reviewer">${name}</div>
        <div class="rating">${'★'.repeat(rating)}</div>
        <div class="review-text">${reviewText}</div>
    `;

    document.getElementById('reviewList').appendChild(reviewItem);

   
    document.getElementById('reviewForm').reset();
});
