console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 2000);

setTimeout(() => {
  console.log("Food ready");
}, 4000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);

let count = 0;

let clock = setInterval(() => {
  let now = new Date();
  console.log("Clock:", now.toLocaleTimeString());

  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);

function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts() {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 1000);
}

loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});

function getProducts() {
  return new Promise((resolve, reject) => {
    let success = true; 

    setTimeout(() => {
      if (success) {
        resolve(["Mobile", "Laptop", "Headphones"]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

getProducts()
  .then((data) => {
    console.log("Products:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request Completed");
  });