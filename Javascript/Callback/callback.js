function openFile(callback) {
  setTimeout(() => {
    console.log("File Opened.....!");
    callback();
  }, 3000);
}

function addSomething() {
  console.log("Something Added the file ......!");
}

function removeSomething() {
  console.log("Something Removed the file ......!");
}

openFile(addSomething);
openFile(removeSomething);
