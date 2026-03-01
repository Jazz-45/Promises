const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User Data Loaded");
  }, 2000);
});

const fetchPost = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("User Data Not Loaded");
  }, 2000);
});

setTimeout(()=>{console.log(fetchUser)},2000);
setTimeout(()=>{console.log(fetchPost)},2000);