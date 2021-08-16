import noneImg from '../assets/suggestions/illustration-empty.svg';

export default function filterPosts(suggestionPosts, filterText, clickedTag) {
	const allPosts = [...document.querySelectorAll('.post')];
	const activeTag = document.querySelector('.filter .tag.active');
	const postsContainer = document.querySelector('.posts__body');

	if (document.querySelector('.none')) document.querySelector('.none').remove();

	const filteredPosts = suggestionPosts.filter(post => {
		if (filterText === 'all') {
			return true;
		} else {
			return filterText.toLowerCase() === post.category.toLowerCase();
		}
	});

	activeTag.classList.remove('active');
	clickedTag.classList.add('active');

	allPosts.forEach(post => (post.style.display = 'none'));

	filteredPosts.forEach(filteredPostJson => {
		const filteredPostDiv = document.querySelector(
			`[data-id="${filteredPostJson.id}"]`
		);
		filteredPostDiv.style.display = 'flex';
	});

	if (filteredPosts.length === 0)
		postsContainer.appendChild(showNoneDiv(filterText));
}

function showNoneDiv(filterText) {
	const noneDiv = document.createElement('div');
	noneDiv.classList.add('none');
	noneDiv.innerHTML = `
	<img src=".${noneImg}" alt="None Found" />
	<h1 class='none__title'>There is no ${filterText} feedback yet.</h1>
	<p class='none__text'>
		Got a suggestion? Found a bug that needs to be squashed? We love hearing
		about new ideas to improve our app.
	</p>
	<button class='btn btn-primary btn-add'>Add Feedback</button>`;

	return noneDiv;
}
