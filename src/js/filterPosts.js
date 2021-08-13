import noneImg from '../assets/suggestions/illustration-empty.svg';

export default function filterPosts(filterText, clickedTag) {
	const postsContainer = document.querySelector('.posts__body');
	const postTags = document.querySelectorAll('.post .tag');
	const allPosts = [...document.querySelectorAll('.post')];
	const activeTag = document.querySelector('.filter .tag.active');

	activeTag.classList.remove('active');
	clickedTag.classList.add('active');

	allPosts.forEach(post => (post.style.display = 'none'));

	if (document.querySelector('.none')) document.querySelector('.none').remove();

	if (filterText === 'all') {
		allPosts.forEach(post => (post.style.display = 'flex'));
	}

	postTags.forEach(tag => {
		if (`${filterText.toLowerCase()}` === tag.textContent.toLowerCase()) {
			const filteredPost = tag.parentElement.parentElement;
			filteredPost.style.display = 'flex';
		}
	});

	if (allPosts.every(post => post.style.display === 'none')) {
		const noneDiv = document.createElement('div');
		noneDiv.classList.add('none');
		noneDiv.innerHTML = `
		<img src=".${noneImg}" alt="None Found" />
		<h1 class='none__title'>There is no ${filterText} feedback yet.</h1>
		<p class='none__text'>
			Got a suggestion? Found a bug that needs to be squashed? We love hearing
			about new ideas to improve our app.
		</p>
		<button class='btn btn-primary btn-add'>Add Feedback</button>
		`;

		if (document.querySelector('.none'))
			document.querySelector('.none').remove();
		postsContainer.appendChild(noneDiv);
	}
}
