function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const folders = document.getElementById('folders');
const folder1 = document.createElement('img');
const folder2 = document.createElement('img');

folder1.setAttribute('src', 'folder1.png');
folder2.setAttribute('src', 'folder2.png');

folder1.style.position = 'absolute';
folder2.style.position = 'absolute';

folder1.onerror = () => {
  folder1.src = 'default_folder.png';
};
folder2.onerror = () => {
  folder2.src = 'default_folder.png';
};

folder1.style.left = `${getRandomInt(0, 80)}vw`;
folder1.style.top = `${getRandomInt(0, 80)}vh`;

folder2.style.left = `${getRandomInt(0, 80)}vw`;
folder2.style.top = `${getRandomInt(0, 80)}vh`;

const folder1Link = document.createElement('a');
folder1Link.setAttribute('href', 'https://kdaui.github.io/home.html');
folder1Link.appendChild(folder1);

const folder2Link = document.createElement('a');
folder2Link.setAttribute('href', 'https://kdaui.github.io/posts');
folder2Link.appendChild(folder2);

// Add a line of code to add the folders to the DOM after they have been loaded
window.onload = () => {
  document.getElementById('folders').appendChild(folder1Link);
  document.getElementById('folders').appendChild(folder2Link);
}
