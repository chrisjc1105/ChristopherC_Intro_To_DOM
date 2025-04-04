let titleElement = document.getElementById("title");
console.log(titleElement);

// const firstTitle = document.querySelector("h1#title");
// console.log(firstTitle);

// const firstParagraph = document.querySelector("p#paragraph1");
// console.log(firstParagraph);
// console.log((firstParagraph).innerText);
// console.log((firstParagraph).innerText = "My last name is Camacho!")

// const secondParagraph = document.querySelector("p#paragraph2");
// console.log(secondParagraph);

let description = document.querySelector("p");
console.log(description );

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

document.querySelector("#image").src = 
"https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=";

const createdElement = document.createElement("div");
(createdElement).innerHTML = "<div class='container'></div>";
document.body.append(createdElement);