//Ativar links do menu

const links = document.querySelectorAll('.header-menu a');

const linkActived = (link)=> {
const url = location.href;
const href = link.href

if(url.includes(href)){
    link.classList.add('actived')
}

}

links.forEach(linkActived)

//Ativar itens do orçamento

const params = new URLSearchParams(location.search);

const activeProduct = (param)=> {
    const element = document.getElementById(param);
    
    if(element){
        element.checked = true;
    }
}

params.forEach(activeProduct);

//Perguntas frequentes

const faqs = document.querySelectorAll('.questions button');

const activeFaq = (event)=> {
    const faq = event.currentTarget;
    const controls = faq.getAttribute('aria-controls');
    const response = document.getElementById(controls);

    response.classList.toggle('dropdown');

    const active = response.classList.contains('dropdown');
    faq.setAttribute('aria-expanded', active);
}

const eventFaq = (faq)=> {
    faq.addEventListener('click', activeFaq);
}

faqs.forEach(eventFaq);


// Galeria de bicicletas

const galery = document.querySelectorAll('.bike-img-2 img');
const galeryContainer = document.querySelector('.bike-img-2');

const chanceImage = (event)=> {
    const img = event.currentTarget;

    const media = matchMedia('(min-width: 1000px').matches;
    
    if(media){
    galeryContainer.prepend(img);
    }
    
 }

const eventGalery = (img) => {
    img.addEventListener('click', chanceImage);
}

galery.forEach(eventGalery);