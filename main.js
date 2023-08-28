import "./app.scss";
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import "waypoints/lib/noframework.waypoints";

let typed = new Typed('.element', {
    strings: ['Dishes ...', 'Food ...'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay:3000,
    loop:true

  });

let toDown = {
  distance: '50px',
  origin: 'top',
  interval : 300,
  duration : 800
};

ScrollReveal().reveal('.to-Down', toDown);

let toRight = {
  distance: '50px',
  origin: 'left',
  interval : 300,
  duration : 800
};

ScrollReveal().reveal('.to-Right', toRight);

let toLeft = {
  distance: '50px',
  origin: 'right',
  interval : 300,
  duration : 800
};

ScrollReveal().reveal('.to-Left', toLeft);

new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
      let oldNavLink = document.querySelector(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show ");
      if(oldNavLink != null){
    oldNavLink.classList.remove('active');
      }
    let currentNavLink = document.querySelector(`[href='#home']`);
    currentNavLink.classList.add('active');
   
  },
  offset: "10%" 
}) 

new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show ");
    oldNavLink.classList.remove('active');
    let currentNavLink = document.querySelector(`[href='#about']`);
    currentNavLink.classList.add('active');
  },
  offset: "50%" 
}) 

new Waypoint({
  element: document.getElementById('services'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show ");
    oldNavLink.classList.remove('active');
    let currentNavLink = document.querySelector(`[href='#services']`);
    currentNavLink.classList.add('active');
  },
  offset: "50%" 
}) 

new Waypoint({
  element: document.getElementById('menus'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show ");
    oldNavLink.classList.remove('active');
    let currentNavLink = document.querySelector(`[href='#menus']`);
    currentNavLink.classList.add('active');
  },
  offset: "50%" 
})

new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show ");
    oldNavLink.classList.remove('active');
    let currentNavLink = document.querySelector(`[href='#contact']`);
    currentNavLink.classList.add('active');
  },
  offset: "50%" 
})

// let sections = ['about','services','menus','contact'];
// sections.forEach(function (section) {
//   new Waypoint({
//     element: document.getElementById('section'),
//     handler: function (direction) {
//       let oldNavLink = document.querySelector(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show ");
//       oldNavLink.classList.remove('active');
//       let currentNavLink = document.querySelector(`[href='${section}']`);
//       currentNavLink.classList.add('active');
//     },
//     offset: "75%"
//   });
// })

let menuList =[
  {
    id :1,
    img : "/public/img/bc-salad-2.png",
    title : "Barbecue Salad",
    description : "Special Delicius Dish",
    price : 22.2,
    currency : "$"
  },
  {
    id :2,
    img : "/public/img/fish.png",
    title : "Salad with fish",
    description : "Special Delicius Dish",
    price : 35.3,
    currency : "$"
  },
  {
    id :3,
    img : "/public/img/spanish salad-1.png",
    title : "Spainish Salad",
    description : "Special Delicius Dish",
    price : 45.2,
    currency : "$"
  },
  {
    id :4,
    img : "/public/img/kevin-s-natural-foods-heat-eat-entree-chicken-tikka-masala-37922990031062_1400x Background Removed.png",
    title : "Chicken tikka masala",
    description : "Special Delicius Dish",
    price : 25.5,
    currency : "$"
  },
  {
    id :5,
    img : "/public/img/dosa.png",
    title : "Dosa",
    description : "Special Delicius Dish",
    price : 6,
    currency : "$"
  },
  {
    id :6,
    img : "/public/img/grilled paella.png",
    title : "Grilled Paellad",
    description : "Special Delicius Dish",
    price : 25.1,
    currency : "$"
  },
  {
    id :7,
    img : "/public/img/Gulab Jamun.png",
    title : "Gulab jamun",
    description : "Special Delicius Dish",
    price : 8.5,
    currency : "$"
  },
  {
    id :8,
    img : "/public/img/poutine.png",
    title : "Poutine",
    description : "Special Delicius Dish",
    price : 15.9,
    currency : "$"
  },
  {
    id :9,
    img : "/public/img/adobo-1.png",
    title : "Philippine adobo",
    description : "Special Delicius Dish",
    price :  35.2,
    currency : "$"
  },
  {
    id :10,
    img : "/public/img/butter chicken new .png",
    title : "Butter chicken",
    description : "Special Delicius Dish",
    price : 45,
    currency : "$"
  },
  {
    id :11,
    img : "/public/img/kabab-1 .png",
    title : "Kebab",
    description : "Special Delicius Dish",
    price : 9,
    currency : "$"
  },
  {
    id :12,
    img : "/public/img/momo new.png",
    title : "Momo",
    description : "Special Delicius Dish",
    price :10,
    currency : "$"
  }
];

let menuRow = document.getElementById('menuRow');

menuLists.forEach(function(menuList){
  let div = document.createElement('div');
   div.classList.add("col-8", "col-md-4", "col- lg-4");
   div.innerHTML = `
   <div class="card to-Down">
   <img src="${menuList.img}" class="w-75 mx-auto d-block" alt="">
   <div class="card-body">
     <p class="fw-bold">${menuList.title}</p>
     <p class="text-black-50 small">${menuList.description}</p>
     <div class="d-flex justify-content-between align-items-center">
       <p class="mb-0">${menuList.currency} ${menuList.price}</p>
       <button class="btn btn-outline-primary">
         <i class="bi bi-cart-plus"></i>
       </button>
     </div>
   </div>
   `;
  menuRow.append(div)
})