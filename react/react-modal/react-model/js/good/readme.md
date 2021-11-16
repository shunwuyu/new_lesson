// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; 
setTimeout(blastOff, MILLISECONDS_PER_DAY); // 代码可读性

------
function addToDate(date, month) {
  // ...
}
const date = new Date();
// It's hard to tell from the function name what is added
addToDate(date, 1);

function addMonthToDate(month, date) {
  // ...
}
const date = new Date();
addMonthToDate(1, date);


----------------------
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => { // location
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});

-------------------
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}

function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}

-------------

import { get } from "request-promise";
import { writeFile } from "fs-extra";

get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin")
  .then(body => {
    return writeFile("article.html", body);
  })
  .then(() => {
    console.log("File written");
  })
  .catch(err => {
    console.error(err);
  });


async function getCleanCodeArticle() {
  try {
    const body = await get(
      "https://en.wikipedia.org/wiki/Robert_Cecil_Martin"
    );
    await writeFile("article.html", body);
    console.log("File written");
  } catch (err) {
    console.error(err);
  }
}

getCleanCodeArticle()



