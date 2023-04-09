const userList = document.getElementById("user-list");

// Get the query string from the URL
const queryString = window.location.search;

// Create a new URLSearchParams object using the query string
const queryParams = new URLSearchParams(queryString);

// Retrieve the value of the "id" parameter
const userId = queryParams.get("id");

var userData;

fetch(`http://localhost:8080/users/${userId}`)
  .then((response) => response.json())
  .then((user) => {
    userData = user;


    const name = document.getElementById("username");
    name.innerText = "Name: " + user.name;

    const email = document.getElementById("email");
    email.innerText = "Email: " + user.email;

    const bio = document.getElementById("description");
    bio.innerText = "Bio: " + user.bio;

    const create = document.getElementById("create");
    create.innerText = "createdAt: " + user.createdAt;

    const update = document.getElementById("update");
    update.innerText = "updatedAt: " + user.updatedAt;
  })
  .catch((error) => console.error(error));

let updatePage = () => {
  const user = {
    id:  userData.id,
    name: userData.name,
    email: userData.email,
    bio: userData.bio,
  };
  const searchParams = new URLSearchParams(user);
  const queryString = searchParams.toString();

  window.location.href = `createNewUser.html?${queryString}`;
};











