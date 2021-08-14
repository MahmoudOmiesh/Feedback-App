export default function showNumbers(suggestion, planned, progress, live) {
	const plannedPostsNumber = document.querySelector(
		'.roadmap__list li:first-child .roadmap__count'
	);
	const inprogressPostsNumber = document.querySelector(
		'.roadmap__list li:nth-child(2) .roadmap__count'
	);
	const livePostsNumber = document.querySelector(
		'.roadmap__list li:last-child .roadmap__count'
	);
	const postsCount = document.querySelector('.posts__header-suggestion p span');

	postsCount.textContent = suggestion;
	plannedPostsNumber.textContent = planned;
	inprogressPostsNumber.textContent = progress;
	livePostsNumber.textContent = live;
}
