/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards');
console.log(cards);

axios
.get("https://api.github.com/users/arizephyr123")
.then(response => {
  console.log(response.data);
  CreateCard(response);
})
.catch(error => {
  console.log("The GitHub data was not returned", error);
});


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "DannyManzietti",
  "bbaney",
  "crsullivan",
  "sydneyblom",
  "mary-clayton"
];

  followersArray.forEach(item =>{
    let followerUrl = `https://api.github.com/users/${item}`;
    //console.log(followerUrl);
    axios
.get(followerUrl)
.then(response => {
  //console.log(response.data);
  CreateCard(response);
})
.catch(error => {
  console.log("The GitHub data was not returned", error);
});
  })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/


function CreateCard(obj) {
  //create elements
  const userCard = document.createElement("div"),
    userImg = document.createElement("img"),
    infoDiv = document.createElement("div"),
    name = document.createElement("h3"),
    username = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    profileLink = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  //create structure
  cards.appendChild(userCard);
  userCard.appendChild(userImg);
  userCard.appendChild(infoDiv);
  infoDiv.appendChild(name);
  infoDiv.appendChild(username);
  infoDiv.appendChild(location);
  infoDiv.appendChild(profile);
  infoDiv.appendChild(profileLink);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);

  //assign classes
  userCard.classList.add("card");
  infoDiv.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  //set textContent/attributes
  userImg.src = `${obj.data.avatar_url}`;
  name.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = `Location: ${obj.data.location}`;
  profile.textContent = `Profile: `;
  profileLink.textContent = `${obj.data.html_url}`;
  profileLink.href = `${obj.data.html_url}`;
  followers.textContent = `Followers: ${obj.data.followers}`;
  following.textContent = `Following: ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;

  return userCard
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
