//Changing the card title to red
//Using getElementByClassName
// let title = document.getElementsByClassName("card-title")[0]
// title.style.color = "red"
let title = document.getElementById("firstcardtitle")
title.style.color = "blue"

let titles = document.querySelectorAll(".card-title")
console.log(titles)
titles[0].style.color = "red"
titles[1].style.color = "blue"
titles[2].style.color = "yellow"
// document.querySelector(".this").style.color="black"
//Both are same
document.querySelectorAll(".this")[0].style.color = "black"
// document.querySelector(".this").style.background="white"
//getElementsByTagName()
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))


