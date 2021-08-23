import upvoteImg from '../assets/shared/icon-arrow-up.svg';
import repliesImg from '../assets/shared/icon-comments.svg';
import showPostDetails from './showPostDetails';

export default function showPosts(posts) {
	const postsContainer = document.querySelector('.posts__body');
	posts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		postDiv.dataset.id = post.id;
		postDiv.innerHTML = `
    <div class="post__upvote">
      <img src="${upvoteImg}" alt="Upvote" />
      <span data-filter="upvotes">${post.upvotes}</span>
    </div>

    <div class="post__content">
      <h1 class="post__title">${post.title}</h1>
      <p class="post__text">${post.description}</p>
      <div class="tag">${post.category}</div>
    </div>

    <div class="post__replies">
      <img src="${repliesImg}" alt="Replies" />
      <span data-filter="replies">
        ${post.comments ? post.comments.length : 0}
      </span>
    </div>
    `;

		postsContainer.appendChild(postDiv);
		postDiv.addEventListener('click', showPostDetails);
	});
}
