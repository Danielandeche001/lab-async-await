const postList = document.getElementById('post-list');
const fallbackPosts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
];

function displayPosts(posts) {
  postList.innerHTML = '';

  posts.forEach((post) => {
    const listItem = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    title.textContent = post.title;
    body.textContent = post.body;

    listItem.append(title, body);
    postList.appendChild(listItem);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Unable to load posts:', error);
    displayPosts(fallbackPosts);
  }
}

displayPosts(fallbackPosts);
fetchPosts();
