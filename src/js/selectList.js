import showPosts from './showPosts';
export default function selectListLogic(e, suggestionPosts) {
	const selectedText = document.querySelector('.selectlist__selected');
	const activeOption = document.querySelector('.selectlist__options li.active');
	const postsContainer = document.querySelector('.posts__body');
	activeOption.classList.remove('active');
	e.target.classList.add('active');
	selectedText.textContent = e.target.textContent;

	const filterTerm = e.target.textContent.toLowerCase();
	const sortedPosts = filterPosts(filterTerm, suggestionPosts);

	sortedPosts.forEach(sortedPostJson => {
		const sortedPostDiv = document.querySelector(
			`[data-id="${sortedPostJson.id}"]`
		);
		postsContainer.appendChild(sortedPostDiv);
	});
}

function filterPosts(filterTerm, suggestionPosts) {
	if (filterTerm === 'least upvotes') {
		return suggestionPosts.sort((a, b) => a.upvotes - b.upvotes);
	} else if (filterTerm === 'least comments') {
		return suggestionPosts.sort(
			(a, b) =>
				(a.comments ? a.comments.length : 0) -
				(b.comments ? b.comments.length : 0)
		);
	} else if (filterTerm === 'most comments') {
		return suggestionPosts.sort((a, b) => {
			if (
				(a.comments ? a.comments.length : 0) >
				(b.comments ? b.comments.length : 0)
			)
				return -1;
		});
	} else {
		return suggestionPosts.sort((a, b) => {
			if (a.upvotes > b.upvotes) return -1;
		});
	}
}
