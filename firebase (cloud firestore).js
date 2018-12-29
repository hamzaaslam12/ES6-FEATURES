// FUNCTIONS FOR USING CLOUD STORE FIRESTORE DATABASE: 

// FOR ADDING DATA TO FIRESTORE:

const form = document.getElementById("form");
// form in which client fills input fields to save data.

form.addEventListener("submit", (e) => {
e.preventDefault();

//students is the name under which data to be save.
db.collection("students").add({

    name: form.name.value,
    age: form.age.value
    // etc: form.etc.value
})

// DELETING DATA
cross.addEventListener('click', (e) => {
// cross is the button like tool to whom pressing to deleting the particular item from collection
    
   let id = e.target.parentElement.getAttribute("id");   
    db.collection('students').doc(id).delete();
})

// GETTING DATA
db.collection('students').get().then((response) => {
    response.docs.forEach(function(doc) {
        doc.data() // it gives a object to use it, use with .and property
    });  
})

//  FOR GETTIN SELECTED DATA:
db.collection('students').where('age', '==', '12').get().then((response) => {
    // age is use as for example
    response.docs.forEach(function(doc) {
        doc.data();
    });  
}) 

// FOR ORDER THE DATA: 
 db.collection('students').orderBy('name').get().then((response) => {
    //  name is use as for example
    response.docs.forEach(function(doc) {
      doc.data()
    });  
})
