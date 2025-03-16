function bookCar(button) {
    const carDiv = button.parentElement;
    document.getElementById('selected-car').value = carDiv.dataset.name;
    document.getElementById('booking-form').style.display = 'block';
}

function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById('customer-name').value;
    const car = document.getElementById('selected-car').value;
    const days = document.getElementById('rental-days').value;
    alert(`Booking confirmed!\nName: ${name}\nCar: ${car}\nDays: ${days}`);
    document.getElementById('booking-form').style.display = 'none';
}
