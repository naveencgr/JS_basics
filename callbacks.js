//walk dog
// clean kitchen
// take out trash

function walkDog(callback) {
  setTimeout(() => {
    console.log("you walk a dog");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("you clean kitchen");
    callback();
  }, 2500);
}

function takeouttrash(callback) {
  setTimeout(() => {
    console.log("clean trash");
    callback();
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeouttrash(() => {
      console.log("you completed the taks");
    });
  });
});
