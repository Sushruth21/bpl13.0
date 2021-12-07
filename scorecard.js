const firebaseConfig = {
    apiKey: "AIzaSyB78BOd8u08o6dhufQ2vgWmTDUxNAfUxvs",
    authDomain: "bplcricket-ba0be.firebaseapp.com",
    databaseURL: "https://bplcricket-ba0be-default-rtdb.firebaseio.com",
    projectId: "bplcricket-ba0be",
    storageBucket: "bplcricket-ba0be.appspot.com",
    messagingSenderId: "644565317207",
    appId: "1:644565317207:web:db2238c2c322723ab1d512"
  };
  

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function get_scorecard(){
    firebase.database().ref("scorecard").on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) { 
        childData = childSnapshot.key; 
        
        sc = childData;
        
         console.log(sc);
         row = "<div id="+sc+" onclick='redirectToRoomName(this.id)' >#"+ sc +"</div><hr>";
         document.getElementById("output").innerHTML += row;
         console.log(row);
      

  
    });  });
  
}
get_scorecard();
function back1(){
    window.location = "user.html";
}