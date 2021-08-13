import data from '../data/data';
import showPosts from './showPosts';
import filterPosts from './filterPosts';

const suggestionPosts = data.productRequests.filter(post => {
	return post.status === 'suggestion';
});

const filterTags = document.querySelectorAll('.filter .tag');

showPosts(suggestionPosts);

filterTags.forEach(tag => {
	tag.addEventListener('click', e => filterPosts(tag.textContent, e.target));
});

// REFACTOR
// const selectedText = document.querySelector('.selectlist__selected');
// const options = document.querySelector('.selectlist__options');

// selectedText.addEventListener('click', () => {
// 	options.classList.toggle('active');
// });
