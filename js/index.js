// Your code goes here

// 1. Nav bar - Mouseover event
const navBar = document.querySelector('.nav');
navBar.addEventListener('mouseover', (event) => { 
    event.target.style.textShadow = '0 0 3px #f3ec19';
});

navBar.addEventListener('click', (event) => {
    event.preventDefault();
});

// 2. Logo
const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', (event) => { event.target.style.color = 'pink';});

// 3. 'Welcome to Fun Bus' h2
const introHeading = document.querySelector('.intro h2');
introHeading.addEventListener('mouseenter', (event) => { event.target.style.backgroundColor = '#c6e2ff';});

// 4. Intro image
const introImg = document.querySelector('.intro img');
// navBar.addEventListener('focus', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});

// 5. Let's go
const mainHeading = document.querySelector('.text-content h2');
// navBar.addEventListener('scroll', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});

// 6. Let's go img
const mainImg = document.querySelector('.img-content img');
// navBar.addEventListener('drag', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});

// 7. Destination section
const destSection = document.querySelector('.content-destination');
// navBar.addEventListener('load', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});

// 8. All the buttons
const buttons = document.querySelectorAll('.btn');
// navBar.addEventListener('keydown', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});

// 9. Destination img
const contentImg = document.querySelector('.content-destination img');
// navBar.addEventListener('resize', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});

// 10. Footer
const footer = document.querySelector('.footer');
// navBar.addEventListener('wheel', (event) => { event.target.style.textShadow = '0 0 3px #f3ec19';});