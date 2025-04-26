let postCount = 0;

function updateTrackerName() {
  const username = document.getElementById('username').value.trim();
  if (username) {
    document.getElementById('tracker-header').textContent = `${username}'s 7 Days of AI Tracker`;
    document.title = `${username}'s 7 Days of AI Tracker`;
  }
}

function submitPost() {
  const content = document.getElementById('postContent').value.trim();
  if (!content || postCount >= 7) return;

  postCount++;

  // Create post div using HTML to ensure proper formatting
  const postDiv = document.createElement('div');
  postDiv.className = 'post';
  
  const timestamp = new Date().toLocaleString();
  
  // Format the post with HTML elements
  postDiv.innerHTML = `
    <div class="post-title">Day ${postCount}</div>
    <div class="post-content">${content}</div>
    <div class="post-timestamp">Posted on ${timestamp}</div>
  `;
  
  document.getElementById('posts').prepend(postDiv);

  document.getElementById('day-label').textContent = `Day ${postCount}`;
  const box = document.getElementById(`hbox${postCount}`);
  if (box) box.classList.add('checked');

  document.getElementById('postContent').value = '';
}
