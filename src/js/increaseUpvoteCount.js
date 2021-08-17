export default function increaseUpvoteCount(e, suggestionPosts) {
	if (!e.target.classList.contains('active')) {
		updatePostData(suggestionPosts, e, 'add');
	} else {
		updatePostData(suggestionPosts, e, 'subtract');
	}
}

function updatePostData(suggestionPosts, e, operation) {
	const postUpvotesText = e.target.querySelector('span');
	const postIdx = +e.target.parentElement.dataset.id;

	suggestionPosts.forEach(post => {
		if (post.id === postIdx) {
			if (operation === 'add') {
				post.upvotes++;
				postUpvotesText.textContent = post.upvotes;
				e.target.classList.add('active');
			} else {
				post.upvotes--;
				postUpvotesText.textContent = post.upvotes;
				e.target.classList.remove('active');
			}
		}
	});
}
