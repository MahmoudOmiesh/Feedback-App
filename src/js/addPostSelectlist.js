export default function addPostSelectlistLogic(e) {
	const addPostSelectlistText = document.querySelector(
		'.addpost .selectlist__selected'
	);
	const activeOption = document.querySelector(
		'.addpost .selectlist__options li.active'
	);
	if (activeOption) activeOption.classList.remove('active');
	e.target.classList.add('active');

	addPostSelectlistText.textContent = e.target.textContent;
}
