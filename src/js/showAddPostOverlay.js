import addPostSelectlistLogic from './addPostSelectlist';
import addPost, { removeAddPostOverlay } from './addPost';
import addImg from '../assets/shared/icon-new-feedback.svg';
import arrowDown from '../assets/shared/icon-arrow-down.svg';
import { suggestionPosts } from './main';

const addPostOverlay = document.querySelector('.addpost');

export default function showAddPostOverlay() {
	addPostOverlay.classList.add('active');
	addPostOverlay.innerHTML = `
	<div class="addpost__content">
	<button class="btn btn-transparent btn-back">go back</button>
	<form class="addpost__form">
		<img
			src="${addImg}"
			alt="Add"
			class="addpost__img"
		/>
		<h1 class="addpost__title">Create New Feedback</h1>
		<div class="addpost__input">
			<h3 class="addpost__input-title">Feedback Title</h3>
			<p class="addpost__input-text">Add a short, descriptive headline</p>
			<input
				type="text"
				class="addpost__input-input"
				data-input="title"
			/>
		</div>
		<div class="addpost__input">
			<h3 class="addpost__input-title">Category</h3>
			<p class="addpost__input-text">
				Choose a category for your feedback
			</p>
			<div class="selectlist">
				<p class="selectlist__content">
					<span class="selectlist__selected" data-input="category"
						>UI</span
					>
					<span
						><img
							src="${arrowDown}"
							alt="Open Select list"
					/></span>
				</p>

				<ul class="selectlist__options">
					<li>UI</li>
					<li>UX</li>
					<li>Enhancement</li>
					<li>Bug</li>
					<li>Feature</li>
				</ul>
			</div>
		</div>
		<div class="addpost__input">
			<h3 class="addpost__input-title">Feedback Details</h3>
			<p class="addpost__input-text">
				Include any specific comments on what should be improved, added,
				etc.
			</p>
			<textarea
				class="addpost__input-input"
				data-input="description"
			></textarea>
		</div>
		<div class="addpost__buttons">
			<button class="btn btn-secondary">cancel</button>
			<button class="btn btn-primary">add</button>
		</div>
	</form>
</div>
	`;

	const addPostSelectlist = addPostOverlay.querySelector(
		'.selectlist__content'
	);
	const addPostOptionsList = addPostOverlay.querySelector(
		'.selectlist__options'
	);
	const addPostOptions = addPostOverlay.querySelectorAll(
		'.selectlist__options li'
	);
	const addPostBtn = addPostOverlay.querySelector('.btn-primary');
	const removeAddPostOverlayBtn =
		addPostOverlay.querySelector('.btn-secondary');
	const goBackOverlayBtn = addPostOverlay.querySelector('.btn-back');

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

	addPostBtn.addEventListener('click', e => {
		addPost(e, suggestionPosts);
	});

	// listeners for back and cancel buttons

	removeAddPostOverlayBtn.addEventListener('click', removeAddPostOverlay);
	goBackOverlayBtn.addEventListener('click', removeAddPostOverlay);
}
