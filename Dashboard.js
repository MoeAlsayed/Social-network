// Store the elements in seperate values 👍🐸
let firstNameInput = document.getElementById("firstname");
let lastNameInput = document.getElementById("lastname");
let emailInput = document.getElementById("email");
let userlist = document.getElementById("user");
let btn = document.getElementById("btn");


// Create an event listener for the submit button 👍🐸
/* submitButton.addEventListener("click", (e)=>{
  let firstname = firstNameInput.value;
  let lastname = lastNameInput.value;
  let email = emailInput.value;

  let dataObj = {
    "firstname": firstname,
    "lastname": lastname,
    "email": email
  }

  postData(dataObj, "user")
}) */

btn.addEventListener("click",submitUser);

function submitUser(e) {
	//stop Default event for <FORM>
	e.preventDefault();
	let dataObj = {
	};

	postData(dataObj, "http://localhost:3000/","user",e);
}

// Send the data with fetch() 👍🐸
// Follow the "Example" to set up the json-server: https://github.com/typicode/json-server
// START THE SERVER: json-server --watch db.json

// Test the function with an object
/* let testObj = {
  "firstname": "Peter",
  "lastname": "Parker",
  "email": "peter.parker@devugees.org"
} 
postData(testObj, "user")*/

// How to use this function
// postData({}, "user")
function postData(data,API ,type,e) {
	// Example:
	// "http://localhost:3000/" + "user" + "/"
	// Result: http://localhost:3000/user/

	let initPOST = {
		method: "POST",
		body: JSON.stringify(data),
		headers: new Headers({ "Content-Type": "application/json" })
	};
	// put the data into the json file. 
	fetch(API + type + "/", initPOST)
		.then(function(response){
			return response.json();
		}).then((JSONDATA) => {
			console.log("PostReq",JSONDATA);
			showData();
		}).catch((error) => {
			console.log(error);
		});
}
function showData(){
	fetch("./db.json",{mode: "cors"})
		.then(response => response.json())
		.then((data) => {
			console.log("allData",data.user);
			const myArray=data.user;
			let ulHtml=myArray.map((u)=>{
				return `<li>num: ${u.id}, name: ${u.firstname} ${u.lastname}, email: ${u.email}</li>`;
			}).join("");
			userlist.innerHTML=ulHtml;
		}).catch((error) => {
			console.log(error);
		});
}  
//.then(response => response.json())
// Get data and Display it on the website in the console

/*       fetch(API + type + "/")
    .then(response => {response.json()})
    .then(JSONDATA => console.log(JSONDATA))

} */
// Get data and Display it on the website in the html 
/*     fetch("http://localhost:3000/user/")
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      document.querySelector(".user").innerHTML += `<ul>
                                                  <li>ID is ${element.id}</li>
                                                  <li>My Name is ${element.firstname} ${element.lastname}</li>
                                                  <li>and my Email is ${element.email}</li>
                                                </ul>
                                                `;
    });
	}) */
	

// Reza Code

/*Select Image and Don't Show selected Image */

function readURL(input) {
	if (input.files && input.files[0]) {
			let reader = new FileReader();

			reader.onload = function (e) {
					$('#preview-img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
	}
}
$("#uploadImage").change(function () {
	readURL(this);

});




/* Add new post */

let addPosts = document.querySelector('#myForm');
let postsList = document.querySelector('.list');
let posts = JSON.parse(localStorage.getItem('posts')) || [];

function addPost(e) {
	e.preventDefault();
	let textP = document.querySelector('.postInput').value;
	//let author = document.querySelector('.author').value;
	let imgP = document.querySelector('#preview-img').src;


	let articlePost = {
			textP,
			imgP
	};


	posts.push(articlePost);
	posts.reverse();
	feedList(posts, postsList);
	localStorage.setItem('posts', JSON.stringify(posts));

}



function feedList(posts = [], postsList) {
	postsList.innerHTML = posts.map((item) => {

			return `
					<div class="posts-list">
							<img src="${item.imgP}" id="img-posted" alt="">
							<div class="description">
									<img class="rounded-circle" src="img/profile-pic.png" id="img-profile-author" alt="">
									<p id="text-posted">${item.textP}
									<a class="author" href="#"> @Mike</a> !</p>
							</div>
					</div>
					
			`;
	}).join('');

}

addPosts.addEventListener('submit', addPost);
feedList(posts, postsList);




/* function for Go-to-Top button */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
			document.getElementById("gototop").style.display = "block";
	} else {
			document.getElementById("gototop").style.display = "none";
	}
}


function goToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}







/* 
function postArticle(){
	
	let imgArticle = document.getElementById('preview-img').src;
	let textArticle = document.getElementById('text-input').value;

	document.getElementById('img-posted').innerHTML.src = imgArticle;
	document.getElementById('text-posted').innerHTML = textArticle;

	return `
			<img src="" id="img-posted" alt="">

			<div class="description">
					<img class="rounded-circle" src="" id="img-profile-author" alt="">
					<p id="text-posted">${textArticle}
							<a class="author" href="#"> @Mike</a> !</p>
			</div>
	`;
} */