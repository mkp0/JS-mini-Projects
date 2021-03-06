const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")

const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie")

populateUI();

let ticketPrice = +movieSelect.value;

//save selectrd movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    })

    localStorage.setItem('selected', JSON.stringify(seatIndex));

    const selectedCount = selectedSeats.length;

    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;
}

// Get data from localStorage and populateUI

function populateUI() {
    const seletedSeats = JSON.parse(localStorage.getItem('selected'));

    if (seletedSeats !== null && seletedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (seletedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
    total.innerText = selectedMoviePrice * seletedSeats.length;
    count.innerText = seletedSeats.length;
}

//movie click event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})