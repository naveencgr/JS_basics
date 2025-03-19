//walk dog
// clean kitchen
// take out trash

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dogWalked = false;
      if (dogWalked) {
        resolve("AW: you walk a dog");
      } else {
        reject("AW: you didn't walk a dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("aW:you clean kitchen");
    }, 2500);
  });
}

function takeouttrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("AW:clean trash");
    }, 500);
  });
}

async function doTasks() {
  try {
    const walkDog1 = await walkDog();
    console.log(walkDog1);

    const cleanKitchen1 = await cleanKitchen();
    console.log(cleanKitchen1);

    const takeOutTrash = await takeouttrash();
    console.log(takeOutTrash);

    console.log("all Done");
  } catch (error) {
    console.log(error);
  }
}

doTasks();
