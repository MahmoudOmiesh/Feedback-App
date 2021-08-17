import data from '../data/data';
import showPosts from './showPosts';
import filterPosts from './filterPosts';
import headerSelectListLogic from './headerSelectList';
import showRoadmap from './showRoadmap';
import showNumbers from './showNumbers';
import addPostSelectlistLogic from './addPostSelectlist';
import addPost, { removeAddPostOverlay } from './addPost';

const suggestionPosts = data.productRequests.filter(post => {
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
const addPostOverlay = document.querySelector('.addpost');
const addPostSelectlist = document.querySelector(
	'.addpost .selectlist__content'
);
const addPostOptionsList = document.querySelector(
	'.addpost .selectlist__options'
);
const addPostOptions = document.querySelectorAll(
	'.addpost .selectlist__options li'
);
const addPostBtn = document.querySelector('.addpost .btn-primary');
const removeAddPostOverlayBtn = document.querySelector(
	'.addpost .btn-secondary'
);
const goBackOverlayBtn = document.querySelector('.addpost .btn-back');

//show posts

showPosts(suggestionPosts);

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

addPostOverlayBtn.addEventListener('click', () => {
	addPostOverlay.classList.add('active');
});

// listener for add post selectlist

addPostSelectlist.addEventListener('click', () => {
	addPostOptionsList.classList.toggle('active');
});

// listener for add post select list options

addPostOptions.forEach(option => {
	option.addEventListener('click', e => {
		addPostSelectlistLogic(e);
	});
});

// add post listener for add button

addPostBtn.addEventListener('click', e => addPost(e, suggestionPosts));

removeAddPostOverlayBtn.addEventListener('click', removeAddPostOverlay);
goBackOverlayBtn.addEventListener('click', removeAddPostOverlay);
