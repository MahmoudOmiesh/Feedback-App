const selectedText = document.querySelector('.selectlist__selected');
const options = document.querySelector('.selectlist__options');

selectedText.addEventListener('click', () => {
	options.classList.toggle('active');
});
