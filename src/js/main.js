import data from '../data/data';
import showPosts from './showPosts';
import filterPosts from './filterPosts';
import selectListLogic from './selectList';
import showRoadmap from './showRoadmap';
import showNumbers from './showNumbers';

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

showNumbers(
	suggestionPosts.length,
	plannedPosts.length,
	progressPosts.length,
	livePosts.length
);

const filterTags = document.querySelectorAll('.filter .tag');

showPosts(suggestionPosts);

filterTags.forEach(tag => {
	tag.addEventListener('click', e => filterPosts(tag.textContent, e.target));
});

const selectedText = document.querySelector('.selectlist__selected');
const optionsList = document.querySelector('.selectlist__options');
const options = document.querySelectorAll('.selectlist__options li');

selectedText.addEventListener('click', () => {
	optionsList.classList.toggle('active');
});

options.forEach(option => {
	option.addEventListener('click', e => {
		selectListLogic(e);
	});
});

const roadmapBtn = document.querySelector('.roadmap__link');

roadmapBtn.addEventListener('click', () =>
	showRoadmap(plannedPosts, progressPosts, livePosts)
);
