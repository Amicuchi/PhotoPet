$(document).ready(function() {
    
    $('#imageGallery').lightSlider({
        gallery:false,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: true,
        addClass: 'brand-slider-full',
        currentPagerPosition:'left',
        adaptiveHeight: true,
        pager: false

    });


});

function calculaOrcamento(event){
    event.preventDefault()
    let nome = document.querySelector('#name').value;
    let precoBase = 20;
    let pack = document.querySelector('#selectPack option:checked').value;
    let qtdAnimais = document.querySelector('#qtdAnimais').value;
    let qtdFotos = document.querySelector('#qtdFotos').value;
    let precoFinal = qtdAnimais < 3 ? (precoBase * pack) * qtdFotos : ((precoBase * pack) * qtdFotos) *1.5;
    let precoFinalFormatado = parseFloat(precoFinal.toFixed(2)).toLocaleString('pt-BR', {currency: 'BRL',minimumFractionDigits: 2});

    document.querySelector('#resultadoOrcamento').innerHTML = `Olá, ${nome}, o seu orçamento fica em R\$${precoFinalFormatado}. <br> Para confirmar, nos envie uma mensagem no whatsapp.<br>`
    document.querySelector('#resultadoOrcamento').innerHTML += ` <a href="https://api.whatsapp.com/send?phone=5541992693665&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${nome}%2C%20quero%20confirmar%20o%20or%C3%A7amento%20de%20${qtdFotos}%20fotos%20no%20valor%20de%20${precoFinalFormatado}%20reais.%20Como%20realizo%20o%20pagamento%3F" class="btn btn-success btn-sm" type="submit" target="_blank">Enviar mensagem</a>`
  }
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
<<<<<<< HEAD
});
=======
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

//Preencher a galeria de raposa
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
>>>>>>> a11313fa779e994a2ce1f8d28606d89412900053
