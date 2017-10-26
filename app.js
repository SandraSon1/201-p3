(function(){



//firebase
	const config = {
      apiKey: "AIzaSyD1FWLNeV1Z_eX-0DzCbpPcIg7jTUgbnHE",
      authDomain: "nameme-bab93.firebaseapp.com",
      databaseURL: "https://nameme-bab93.firebaseio.com",
      projectId: "nameme-bab93",
      storageBucket: "nameme-bab93.appspot.com",
      messagingSenderId: "388977165924"
    };
    firebase.initializeApp(config);

//elements

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');





//add login event
btnLogin.addEventListener('click', e =>{
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise
	.catch(e => console.log(e.message));

});

//add sign up event

btnSignUp.addEventListener('click', e =>{
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();

	//sign in
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise
		// .catch(e => console.log(e.message));
		.catch(function(error){
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);});

});

btnLogout.addEventListener('click', e=>{
	firebase.auth().signOut();

});
//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
	}else{
		console.log('not logged in')
		btnLogout.classList.add('hide');
	}
});



}());














