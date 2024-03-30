const personName = document.querySelector('.personName');
const personNameError = document.querySelector('.personNameError');
const creditCard = document.querySelector('.creditCard');
const creditCardError = document.querySelector('.creditCardError');
const expiryDate = document.querySelector('.expiryDate');
const expiryDateError = document.querySelector('.expiryDateError');
const secureCode = document.querySelector('.secureCode');
const secureCodError = document.querySelector('.secureCodError');
const formBtn = document.querySelector('.form-btn');
const formTitle = document.querySelector('.form__title');
const sendParagraf = document.querySelector('.form-btn__send');

creditCard.addEventListener('input', (event) => {
	let trimmedValue = event.target.value.replace(/\s+/g, '');
	let formattedValue = '';
	for (let i = 0; i < trimmedValue.length; i++) {
		if (!isNaN(trimmedValue.charAt(i))) {
			if (i > 0 && i % 4 === 0) {
				formattedValue += ' ';
			}
			formattedValue += trimmedValue.charAt(i);
		}
	}
	event.target.value = formattedValue;
});

expiryDate.addEventListener('input', (event) => {
	let input = event.target.value;
	input = input.replace(/\D/g, '');
	if (input.length > 2) {
		input = input.substring(0, 2) + '/' + input.substring(2);
	}
	event.target.value = input;
});

const checkInputs = () => {
	let personNameVl = personName.value;

	if (personName.value === '') {
		personNameError.textContent = 'Wpisz swoje imię!';
		personName.classList.add('error');
	} else {
		personNameError.textContent = '';
		personName.classList.remove('error');
	}
	if (creditCard.value === '') {
		creditCardError.textContent = 'Wpisz numer karty!';
		creditCard.classList.add('error');
	} else if (creditCard.value.length < 19) {
		creditCardError.textContent = 'Podaj poprawny numer karty!';
		creditCard.classList.add('error');
	} else if (creditCard.value.length == 19) {
		creditCardError.textContent = '';
		creditCard.classList.remove('error');
	}
	if (expiryDate.value === '') {
		expiryDateError.textContent = 'Wpisz datę!';
		expiryDate.classList.add('error');
	} else if (expiryDate.value.length < 5) {
		expiryDateError.textContent = 'Wpisz poprawną datę!';
		expiryDate.classList.add('error');
	} else if (expiryDate.value.length == 5) {
		expiryDateError.textContent = '';
		expiryDate.classList.remove('error');
	}
	if (secureCode.value === '') {
		secureCodError.textContent = 'Wpisz kod CVV!';
		secureCode.classList.add('error');
	} else if (secureCode.value.length < 3) {
		secureCodError.textContent = 'Wpisz poprawny kod CVV';
		secureCode.classList.add('error');
	} else if (secureCode.value.length == 3) {
		secureCodError.textContent = '';
		secureCode.classList.remove('error');
	}
	if (
		personName.value !== '' &&
		creditCard.value.length == 19 &&
		expiryDate.value.length == 5 &&
		secureCode.value.length == 3
	) {
		formTitle.textContent = `Witaj ${personNameVl} !`;
		sendParagraf.textContent = 'Wysyłanie...';
		setTimeout(function () {
			sendParagraf.classList.add('active');
			sendParagraf.textContent = 'Wysłano!';
		}, 1000);
		setTimeout(function () {
			sendParagraf.classList.remove('active');
			sendParagraf.textContent = '';
		}, 5000);
	}
};

formBtn.addEventListener('click', checkInputs);
