import "../scss/app.scss";
//import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";
const R = require('ramda')
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  
  let result= R.pluck('class')(arrayToPluck);
  const articles = document.querySelectorAll("article");
  for(let i=0; i<result.length;i++) {
    articles[i].classList.add(result[i]);
  }
});