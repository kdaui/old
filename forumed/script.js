
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts;
}


function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}


function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        const username = document.createElement('h3');
        username.textContent = post.username;
        const message = document.createElement('p');
        message.textContent = post.message;
        postDiv.appendChild(username);
        postDiv.appendChild(message);
        postsDiv.appendChild(postDiv);
    });
}


function handleSubmit(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');
    const username = usernameInput.value;
    const message = messageInput.value;
    const posts = loadPosts();
    posts.push({ username, message });
    savePosts(posts);
    displayPosts(posts);
    usernameInput.value = '';
    messageInput.value = '';
}

document.getElementById('postForm').addEventListener('submit', handleSubmit);


const posts = loadPosts();
displayPosts(posts);
