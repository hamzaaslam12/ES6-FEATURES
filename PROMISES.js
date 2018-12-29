/**
|--------------------------------------------------
| Promise
|--------------------------------------------------
*/
// - A promise is an object that may produce a single value some time in the future:

// It will be in one of 3 possible states:
// Fulfilled: onFulfilled() will be called
// Rejected: onRejected() will be called
// Pending: not yet fulfilled or rejected

var promised = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(20000);
    }, 1500);
  });
  
  promised
    .then(function(data) {
      console.log({ data });
    })
    .catch(function(error) {
      console.log({ error });
    });
  
  /**
  |--------------------------------------------------
  | Fetch
  |--------------------------------------------------
  */
  function getDataFromGithub() {
    const url = 'https://api.github.com/users/mtahir08';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    fetch(url, options)
      .then(function(response) {
        console.log('status', response.status);
        console.log('statusText', response.statusText);
        if (response.status == 200) {
          return response.json();
        }
        throw response;
      })
      .then(function(json) {
        console.log('json', json);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  }


  /**
  |--------------------------------------------------
  | Using Ajax (jQuery)
  |--------------------------------------------------
  */

  // jQuery Library
  // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
  var url = 'https://api.github.com/users/mtahir08';
  function getUserData() {
      $.ajax({
          url: url,
          type: 'GET',
          success: function (data) {
              console.log("Success data", data);
          },
          error: function (err) {
              console.log("Error ", err);
          }
      });
  }
  getUserData();
  for (let i = 0; i < 10; i++) {
      setTimeout(function () {
          console.log(i);
      }, 0)
  }