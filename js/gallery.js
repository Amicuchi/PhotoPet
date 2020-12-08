let buttons = document.querySelectorAll(".btnplus");
let modals = document.querySelectorAll(".custommodal");
let closebtns = document.querySelectorAll(".close");

//Define os eventos que irão abrir e fechar os modais
const modalEvents = () => {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      modals[index].classList.add("show");
      setTimeout(() => {
        modals[index].style.opacity = 1;
      }, 100);
    });
  });

  closebtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      modals[index].style.opacity = 0;
      setTimeout(() => {
        modals[index].classList.remove("show");
      }, 300);
    });
  });
};

//Preencher a galeria de gatos
const getCats = () => {
  let catGallery = document.querySelector(".catpics");

  for (let i = 0; i < 25; i++) {
    fetch("https://aws.random.cat/meow")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        catGallery.innerHTML += `<a href="${data.file}" target="_blank"><img src="${data.file}"/></a>`;
      });
  }
};

//Preencher a galeria de cachorros
const getDogs = () => {
  let dogGallery = document.querySelector(".dogpics");

  for (let i = 0; i < 25; i++) {
    fetch("https://random.dog/woof.json?include=jpg,jpeg,gif,png")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dogGallery.innerHTML += `<a href="${data.url}" target="_blank"><img src="${data.url}"/></a>`;
      });
  }
};

//Preencher a galeria de cachorros
const getFoxes = () => {
  let foxGallery = document.querySelector(".foxpics");

  for (let i = 0; i < 25; i++) {
    fetch("https://randomfox.ca/floof/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        foxGallery.innerHTML += `<a href="${data.image}" target="_blank"><img src="${data.image}"/></a>`;
      });
  }
};

//Executa as funções definidas
modalEvents();
getCats();
getDogs();
getFoxes();