// Function to load posts from local storage
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts;
}

// Function to save posts to local storage
function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to display posts on the page
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

// Function to handle form submission
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

// Set up event listener for form submission
document.getElementById('postForm').addEventListener('submit', handleSubmit);

// Load and display posts when the page loads
const posts = loadPosts();
displayPosts(posts);
