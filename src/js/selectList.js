export default function selectListLogic(e) {
	const selectedText = document.querySelector('.selectlist__selected');
	const activeOption = document.querySelector('.selectlist__options li.active');
	activeOption.classList.remove('active');
	e.target.classList.add('active');
	selectedText.textContent = e.target.textContent;

	const filterTerm = e.target.textContent.toLowerCase();

	selectListFilter(filterTerm);
}

function selectListFilter(filterTerm) {
	const allPosts = [...document.querySelectorAll('.post')];
	const postsContainer = document.querySelector('.posts__body');

	if (filterTerm === 'least upvotes') {
		allPosts.sort((a, b) => {
			const upvotesOne = +a.querySelector('[data-filter="upvotes"]')
				.textContent;
			const upvotesTwo = +b.querySelector('[data-filter="upvotes"]')
				.textContent;

			return upvotesOne - upvotesTwo;
		});

		postsContainer.innerHTML = '';

		allPosts.forEach(post => postsContainer.appendChild(post));
	} else if (filterTerm === 'least comments') {
		allPosts.sort((a, b) => {
			const repliesOne = +a.querySelector('[data-filter="replies"]')
				.textContent;
			const repliesTwo = +b.querySelector('[data-filter="replies"]')
				.textContent;

			return repliesOne - repliesTwo;
		});

		postsContainer.innerHTML = '';

		allPosts.forEach(post => postsContainer.appendChild(post));
	} else if (filterTerm === 'most comments') {
		allPosts.sort((a, b) => {
			const repliesOne = +a.querySelector('[data-filter="replies"]')
				.textContent;
			const repliesTwo = +b.querySelector('[data-filter="replies"]')
				.textContent;

			if (repliesOne > repliesTwo) return -1;
		});

		postsContainer.innerHTML = '';

		allPosts.forEach(post => postsContainer.appendChild(post));
	} else {
		allPosts.sort((a, b) => {
			const upvotesOne = +a.querySelector('[data-filter="upvotes"]')
				.textContent;
			const upvotesTwo = +b.querySelector('[data-filter="upvotes"]')
				.textContent;

			if (upvotesOne > upvotesTwo) return -1;
		});

		postsContainer.innerHTML = '';

		allPosts.forEach(post => postsContainer.appendChild(post));
	}

	document.querySelector('.selectlist__options').classList.remove('active');
}
