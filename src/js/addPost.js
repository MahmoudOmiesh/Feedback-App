import showPosts from './showPosts';

export default function addPost(e, suggestionPosts) {
	e.preventDefault();

	const postTitle = document.querySelector('[data-input="title"]').value;
	const postCategory = document.querySelector(
		'[data-input="category"]'
	).textContent;
	const postDescription = document.querySelector(
		'[data-input="description"]'
	).value;
	const postsContainer = document.querySelector('.posts__body');

	let randomID = Math.floor(Math.random() * (1000 - 7 + 1)) + 7;

	const newPost = {
		id: randomID,
		title: postTitle,
		category: postCategory,
		upvotes: 0,
		status: 'suggestion',
		description: postDescription,
		comments: [],
	};

	suggestionPosts.push(newPost);
	postsContainer.innerHTML = '';
	showPosts(suggestionPosts);

	removeAddPostOverlay(null);
}

export function removeAddPostOverlay(e) {
	if (e) e.preventDefault();
	const addPostOverlay = document.querySelector('.addpost');
	addPostOverlay.classList.remove('active');
	addPostOverlay.innerHTML = '';
}
