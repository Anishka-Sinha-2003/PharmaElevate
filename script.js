 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCYofEXW-ICVlBZiP8WR_OgFVF8aEgUalE",
    authDomain: "pharma-elevate.firebaseapp.com",
    projectId: "pharma-elevate",
    storageBucket: "pharma-elevate.appspot.com",
    messagingSenderId: "766189394721",
    appId: "1:766189394721:web:f266b9e1eb375ca1017c60"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()

  function register() {
    first_name = document.getElementById('firstname').value
    last_name = document.getElementById('lastname').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  }

  auth.createUserWithEmailandPassword(email , password)
  .then(function() {
    var user = auth.currentUser

    alert('User Created !!')

    var database_ref = database.ref()

    var user_data = {
        first_name : first_name , 
        last_name : last_name , 
        email : email ,
        password : password
    }

    database_ref.child('users/' + user.uid).set(user_data)
  })
  
  .catch(function() {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })