import data from '../data/data';
import showPosts from './showPosts';
import filterPosts from './filterPosts';
import headerSelectListLogic from './headerSelectList';
import showRoadmap from './showRoadmap';
import showNumbers from './showNumbers';
import increaseUpvoteCount from './increaseUpvoteCount';
import showAddPostOverlay from './showAddPostOverlay';

export const suggestionPosts = data.productRequests.filter(post => {
	return post.status === 'suggestion';
});

const roadmapPosts = data.productRequests.filter(post => {
	return (
		post.status === 'planned' ||
		post.status === 'in-progress' ||
		post.status === 'live'
	);
});

const plannedPosts = roadmapPosts.filter(post => post.status === 'planned');
const progressPosts = roadmapPosts.filter(
	post => post.status === 'in-progress'
);
const livePosts = roadmapPosts.filter(post => post.status === 'live');

//show posts

showPosts(suggestionPosts);

const filterTags = document.querySelectorAll('.filter .tag');
const headerSelectedText = document.querySelector(
	'.posts .selectlist__selected'
);
const headerOptionsList = document.querySelector('.posts .selectlist__options');
const headerOptions = document.querySelectorAll(
	'.posts .selectlist__options li'
);
const roadmapBtn = document.querySelector('.roadmap__link');

const addPostOverlayBtn = document.querySelector('.posts__header .btn');
const postsContainer = document.querySelector('.posts__body');

//show post numbers

showNumbers(
	suggestionPosts.length,
	plannedPosts.length,
	progressPosts.length,
	livePosts.length
);

//Listeners for filter tags

filterTags.forEach(tag => {
	tag.addEventListener('click', e =>
		filterPosts(suggestionPosts, tag.textContent, e.target)
	);
});

// listener for header select list

headerSelectedText.addEventListener('click', () => {
	headerOptionsList.classList.toggle('active');
});

// listener for header options

headerOptions.forEach(option => {
	option.addEventListener('click', e => {
		headerSelectListLogic(e, suggestionPosts);
	});
});

// shows roadmap posts

roadmapBtn.addEventListener('click', () =>
	showRoadmap(plannedPosts, progressPosts, livePosts)
);

// shows add post overlay

addPostOverlayBtn.addEventListener('click', showAddPostOverlay);

// listener for upvotes

postsContainer.addEventListener('click', e => {
	if (e.target.classList.contains('post__upvote'))
		increaseUpvoteCount(e, suggestionPosts);
});
