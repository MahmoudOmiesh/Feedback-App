import upvoteImg from '../assets/shared/icon-arrow-up.svg';
import repliesImg from '../assets/shared/icon-comments.svg';

export default function (posts) {
	const postsContainer = document.querySelector('.posts__body');
	posts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		postDiv.innerHTML = `
    <div class="post__upvote">
      <img src="${upvoteImg}" alt="Upvote" />
      ${post.upvotes}
    </div>

    <div class="post__content">
      <h1 class="post__title">${post.title}</h1>
      <p class="post__text">${post.description}</p>
      <div class="tag">${post.category}</div>
    </div>

    <div class="post__replies">
      <img src="${repliesImg}" alt="Replies" />
      <span>
        ${post.comments ? post.comments.length : 0}
      </span>
    </div>
    `;

		postsContainer.appendChild(postDiv);
	});
}
