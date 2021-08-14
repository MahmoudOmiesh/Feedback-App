import data from '../data/data';
import showPosts from './showPosts';
import filterPosts from './filterPosts';
import selectListLogic from './selectList';

const suggestionPosts = data.productRequests.filter(post => {
	return post.status === 'suggestion';
});

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
