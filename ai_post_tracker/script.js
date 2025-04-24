
let postCount = 0;

function submitPost() {
  const content = document.getElementById('postContent').value.trim();
  if (!content || postCount >= 7) return;

  postCount++;

  const postDiv = document.createElement('div');
  postDiv.className = 'post';
  const timestamp = new Date().toLocaleString();
  postDiv.textContent = `Day ${postCount}: ${content} (Posted on ${timestamp})`;
  document.getElementById('posts').prepend(postDiv);

  document.getElementById('day-label').textContent = `Day ${postCount}`;
  const box = document.getElementById(`hbox${postCount}`);
  if (box) box.classList.add('checked');

  document.getElementById('postContent').value = '';
}
