import "../scss/main.scss";
import SmoothScroll from "smooth-scroll";
var scroll = new SmoothScroll('a[href*="#"]');
console.log("Hello, I'm Mateusz - nice to meet you 😎");

fetch("https://api.github.com/users/mateusz-meler/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, homepage, html_url } = repo;
      const myGithub = document.querySelector(".github--js");
      const myTemplate = `<div class="github">
  <div class="github__bar">
      <div class="github__circle"></div>
      <div class="github__circle"></div>
      <div class="github__circle"></div>
    </div>
    <div class="github__elements">
    <img class="github__logo" src="img/github-logo.svg" alt="github logo">
    <ul class="list">
      <li class="list--item">project:</li>
      <li class="list--item">description:</li>
      <ul class="secondary-list">
      <li class="secondary-list--item">demo:</li>
      <li class="secondary-list--item">github:</li>
  </ul>
  </ul>
    <ul class="date">
    <li class="date__name"> ${name}</li>
    <li class="date__description">${description}</li>
    <li class="date__homepage--item">&lt;<a class="date__homepage" href="${homepage}" title="${name} - demo" target="_blank"  rel="noopener noreferrer">see here</a>&gt;</li>
    <li class="date__github--item">&lt;<a class="date__github" href="${html_url}" title="${name} - code" target="_blank"  rel="noopener noreferrer">source code</a>&gt;</li>
    </ul>
  </div>
  </div>
  `;
      myGithub.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Masz gdzieś błąd");
  });
