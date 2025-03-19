//walk dog
// clean kitchen
// take out trash

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dogWalked = false;
      if (dogWalked) {
        resolve("PR: you walk a dog");
      } else {
        reject("PR: you didn't walk a dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PR:you clean kitchen");
    }, 2500);
  });
}

function takeouttrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PR:clean trash");
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeouttrash();
  })
  .then((value) => {
    console.log(value);
    console.log("PR:All tasks done");
  });
