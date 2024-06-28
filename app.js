
document.addEventListener('DOMContentLoaded', function() {

const form = document.getElementById('bookingForm');
const formElements = [
 { label: 'Фамилия:', type: 'text', id: 'name', name: 'name', required: true },
 { label: 'Имя:', type: 'text', id: 'lastName', name: 'lastName', required: true },
 { label: 'Отчество:', type: 'text', id: 'middleName', name: 'middleName', required: true },
 { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
 { label: 'Телефон:', type: 'tel', id: 'phone', name: 'phone', required: false },
 { label: 'Дата начала аренды:', type: 'date', id: 'date', name: 'date', required: true},
 { label: 'Количество дней:', type: 'kol', id: 'kol1', name: 'kol1', required: true},
];

 formElements.forEach(element => {
 const formGroup = document.createElement('div');
 formGroup.className = 'form-group';

 const label = document.createElement('label');
 label.setAttribute('for', element.id);
 label.textContent = element.label;

 const input = document.createElement('input');
 input.type = element.type;
 input.id = element.id;
 input.name = element.name;
 if (element.required) {
 input.required = true;
 }
 if (element.minlength) {
 input.minLength = element.minlength;
 }
if (element.type === 'date') {
 const today = new Date().toISOString().split('T')[0];
 input.min = today;
}

 formGroup.appendChild(label);
 formGroup.appendChild(input);
 form.appendChild(formGroup);
 });

 const submitButton = document.createElement('button');
 submitButton.type = 'submit';
 submitButton.textContent = 'Book Now';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
 event.preventDefault();

 const formData = new FormData(form);
 const bookingDetails = {};
 formData.forEach((value, key) => {
 bookingDetails[key] = value;
 });

 console.log('Booking Details:', bookingDetails);

 alert('Спасибо за заявку на бронирование. Мы свяжемся с вами в течение 10 минут!');
 });
});



