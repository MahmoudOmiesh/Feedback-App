import upvoteImg from '../assets/shared/icon-arrow-up.svg';
import repliesImg from '../assets/shared/icon-comments.svg';
const plannedContainer = document.querySelector(
	'.planned .roadmapposts__content'
);
const progressContainer = document.querySelector(
	'.inprogress .roadmapposts__content'
);
const liveContainer = document.querySelector('.live .roadmapposts__content');

export default function showRoadmap(plannedPosts, progressPosts, livePosts) {
	const main = document.querySelector('.main');
	const roadmap = document.querySelector('.roadmapposts');
	const goBack = document.querySelector('.roadmapposts .btn');

	main.style.display = 'none';
	roadmap.style.display = 'block';

	goBack.addEventListener('click', () => {
		main.style.display = 'grid';
		roadmap.style.display = 'none';
		plannedContainer.innerHTML = '';
		progressContainer.innerHTML = '';
		liveContainer.innerHTML = '';
	});

	showRoadmapPosts(plannedPosts, progressPosts, livePosts);
}

function showRoadmapPosts(plannedPosts, progressPosts, livePosts) {
	plannedPosts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.classList.add('minipost');
		postDiv.innerHTML = `
      <p class="minipost__category">${post.status}</p>
      <div class="post__content">
        <h1 class="post__title">${post.title}</h1>
        <p class="post__text">
          ${post.description}
        </p>
        <div class="tag">${post.category}</div>
      </div>
      <div class="minipost__footer">
        <div class="post__upvote">
          <img src="${upvoteImg}" />
          <span>${post.upvotes}</span>
        </div>
        <div class="post__replies">
          <img src="${repliesImg}" />
          <span>${post.comments ? post.comments.length : 0}</span>
        </div>
      </div>
    `;

		plannedContainer.appendChild(postDiv);
	});

	progressPosts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.classList.add('minipost');
		postDiv.innerHTML = `
      <p class="minipost__category">${post.status}</p>
      <div class="post__content">
        <h1 class="post__title">${post.title}</h1>
        <p class="post__text">
          ${post.description}
        </p>
        <div class="tag">${post.category}</div>
      </div>
      <div class="minipost__footer">
        <div class="post__upvote">
          <img src="${upvoteImg}" />
          <span>${post.upvotes}</span>
        </div>
        <div class="post__replies">
          <img src="${repliesImg}" />
          <span>${post.comments ? post.comments.length : 0}</span>
        </div>
      </div>
    `;

		progressContainer.appendChild(postDiv);
	});
	livePosts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.classList.add('minipost');
		postDiv.innerHTML = `
      <p class="minipost__category">${post.status}</p>
      <div class="post__content">
        <h1 class="post__title">${post.title}</h1>
        <p class="post__text">
          ${post.description}
        </p>
        <div class="tag">${post.category}</div>
      </div>
      <div class="minipost__footer">
        <div class="post__upvote">
          <img src="${upvoteImg}" />
          <span>${post.upvotes}</span>
        </div>
        <div class="post__replies">
          <img src="${repliesImg}" />
          <span>${post.comments ? post.comments.length : 0}</span>
        </div>
      </div>
    `;

		liveContainer.appendChild(postDiv);
	});
}
