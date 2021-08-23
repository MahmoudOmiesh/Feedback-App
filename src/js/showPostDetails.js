import { suggestionPosts, currentUser } from './main';
import images from '../assets/user-images/*.jpg';

export default function showPostDetails(e) {
	const clickedPostDiv = e.currentTarget.cloneNode(true);
	const clickedPostData = suggestionPosts.filter(
		post => post.id === +clickedPostDiv.dataset.id
	)[0];
	let postComments = '';
	if (clickedPostData.comments) {
		clickedPostData.comments.forEach(comment => {
			const imgSrc = `image-${comment.user.name.split(' ')[0].toLowerCase()}`;
			postComments += `
			<div class='comment' data-comment-id="${comment.id}">
				<img
					src='${images[imgSrc]}'
					alt='${comment.user.name}'
					class='comment__user-pfp'
				/>
				<div class='comment__content'>
					<h4 class='comment__user-name'>@${comment.user.name}</h4>
					<p class='comment__user-at'>${comment.user.username}</p>
					<p class='comment__text'>
					${comment.content}
					</p>
					<div class="comment__reply">
						<textarea placeholder="Replying to @${comment.user.username}" class="comment__reply-text"></textarea>
						<button class="comment__reply-send btn btn-secondary">send</button>
					</div>
				</div>
				<button class='btn btn-text'>Reply</button>
			</div>
    `;

			if (comment.replies) {
				comment.replies.forEach(reply => {
					const imgSrc = `image-${reply.user.name.split(' ')[0].toLowerCase()}`;
					postComments += `
					<div class='comment reply'>
					<img
						src='${images[imgSrc]}'
						alt='${reply.user.name}'
						class='comment__user-pfp'
					/>
					<div class='comment__content'>
						<h4 class='comment__user-name'>${reply.user.name}</h4>
						<p class='comment__user-at'>@${reply.user.username}</p>
						<p class='comment__text'>
						<span class="attext">@${reply.replyingTo} </span>
						${reply.content}
						</p>
					</div>
				</div>
				`;
				});
			}
		});
	}
	const postDetails = document.querySelector('.details');
	postDetails.classList.add('active');
	postDetails.innerHTML = `
	  <div class="details__content">
	  <div class="details__header">
	    <button class="btn btn-transparent btn-back">go back</button>
	    <button class="btn btn-secondary">edit feedback</button>
	  </div>
	  <div class="details__comments">
	    <h3 class="details__comments-count">${
				clickedPostData.comments ? clickedPostData.comments.length : 0
			} Comments</h3>
      ${postComments}
	  </div>
	  <div class="details__add">
	    <h4 class="details__add-title">Add Comment</h4>
	    <textarea
	      placeholder="Place your comment here"
	      class="details__add-text"
	    ></textarea>
	    <div class="details__add-footer">
	      <p class="details__add-letters">0 / 250</p>
	      <button class="btn btn-primary">post comment</button>
	    </div>
	  </div>
	</div>
	`;
	postDetails.querySelector('.details__header').after(clickedPostDiv);

	addDetailsEvents();
}

function addDetailsEvents() {
	const postDetails = document.querySelector('.details');
	const replyBtns = postDetails.querySelectorAll('.comment .btn-text');
	const sendBtns = postDetails.querySelectorAll('.comment__reply-send');
	const commentBtn = postDetails.querySelector(
		'.details__add-footer .btn-primary'
	);

	replyBtns.forEach(btn =>
		btn.addEventListener('click', e => {
			e.currentTarget.previousElementSibling
				.querySelector('.comment__reply')
				.classList.toggle('active');
		})
	);

	sendBtns.forEach(btn => btn.addEventListener('click', addReply));

	commentBtn.addEventListener('click', addComment);
}

function addReply(e) {
	const commentDiv = e.currentTarget.parentElement.parentElement.parentElement;

	const commentDataIdx = +commentDiv.dataset.commentId;

	const replyText = e.currentTarget.previousElementSibling.value;

	const newReplyObj = {
		content: replyText,
		user: currentUser,
	};

	suggestionPosts.filter(({ comments }) => {
		if (comments)
			comments.filter(comment => {
				if (comment.id === commentDataIdx) {
					if (!comment.replies) comment.replies = [];

					newReplyObj.replyingTo = comment.user.username;
					comment.replies.push(newReplyObj);
				}
			});
	});

	const imgSrc = `image-${newReplyObj.user.name.split(' ')[0].toLowerCase()}`;
	const newReplyDiv = document.createElement('div');
	newReplyDiv.className = 'comment reply';
	newReplyDiv.innerHTML = `
		<img
		src='${images[imgSrc]}'
		alt='${newReplyObj.user.name}'
		class='comment__user-pfp'
	/>
	<div class='comment__content'>
		<h4 class='comment__user-name'>${newReplyObj.user.name}</h4>
		<p class='comment__user-at'>@${newReplyObj.user.username}</p>
		<p class='comment__text'>
		<span class="attext">@${newReplyObj.replyingTo}</span>
		${newReplyObj.content}
		</p>
	</div>
	`;

	commentDiv.after(newReplyDiv);

	e.currentTarget.parentElement.classList.remove('active');
	e.currentTarget.previousElementSibling.value = '';
}

function addComment(e) {
	const postDivIdx =
		+e.currentTarget.parentElement.parentElement.previousElementSibling
			.previousElementSibling.dataset.id;

	const commentText =
		e.currentTarget.parentElement.previousElementSibling.value;

	const commentContainer =
		e.currentTarget.parentElement.parentElement.previousElementSibling;

	let randomCommentId = Math.floor(Math.random() * (1000 - 7 + 1)) + 7;

	const newCommentObj = {
		id: randomCommentId,
		content: commentText,
		user: currentUser,
	};

	suggestionPosts.filter(post => {
		if (post.id === postDivIdx) {
			if (!post.comments) post.comments = [];

			post.comments.push(newCommentObj);
		}
	});

	const imgSrc = `image-${newCommentObj.user.name.split(' ')[0].toLowerCase()}`;

	const commentDiv = document.createElement('div');
	commentDiv.className = 'comment';
	commentDiv.dataset.commentId = newCommentObj.id;
	commentDiv.innerHTML = `
		<img
			src='${images[imgSrc]}'
			alt='${newCommentObj.user.name}'
			class='comment__user-pfp'
		/>
		<div class='comment__content'>
			<h4 class='comment__user-name'>@${newCommentObj.user.name}</h4>
			<p class='comment__user-at'>${newCommentObj.user.username}</p>
			<p class='comment__text'>
			${newCommentObj.content}
			</p>
			<div class="comment__reply">
				<textarea placeholder="Replying to @${newCommentObj.user.username}" class="comment__reply-text"></textarea>
				<button class="comment__reply-send btn btn-secondary">send</button>
			</div>
		</div>
		<button class='btn btn-text'>Reply</button>
	`;

	commentContainer.appendChild(commentDiv);
	addDetailsEvents();
	e.currentTarget.parentElement.previousElementSibling.value = '';
}

// TODO : Add comments DONE .
// TODO : Comment Images DONE .
// TODO : Replies DONE .
