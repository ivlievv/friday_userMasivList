'use strict';

fetch('./user.json')
    .then(response => response.json())
    .then(addUsersToPage)
    .catch(console.error);

/*const fetchPromise = fetch('./user.json');

const jsonPromise = fetchPromise.then(response => response.json()).catch(console.error);

const data = jsonPromise.then(data => {appendUserItemToList( data)}).catch(console.error);*/

function createUserListItem (user) {

    const userItemContainer = document.createElement('li');
    userItemContainer.classList.add('userItem');


    const userImageContainer = document.createElement('div');
    userImageContainer.classList.add('imageContainer');

    const userImage = document.createElement('img');
    userImage.setAttribute('src', user.profilePicture);
    userImage.setAttribute('alt', "user picture");

    userImageContainer.appendChild(userImage);


    const userFullNameElem = document.createElement('h3');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;

    userItemContainer.appendChild(userImageContainer);
    userItemContainer.appendChild((userFullNameElem));


    return userItemContainer;
}





function addUsersToPage(users) {

   const usersList = document.getElementById("usersList");
users.forEach(function (user) {
    const newUserListItem = createUserListItem(user);

    usersList.appendChild(newUserListItem)
})



}
