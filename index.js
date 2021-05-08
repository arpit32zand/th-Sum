let homeActive = document.querySelector(".home-active")
let aboutActive = document.querySelector('.about-active')
let workActive = document.querySelector('.work-active')
let blogActive = document.querySelector('.blog-active')
let contactActive = document.querySelector('.contact-active')
let homeClose = document.querySelector('.home-close')
let aboutClose = document.querySelector('.about-close')
let workClose = document.querySelector('.work-close')
let blogClose = document.querySelector('.blog-close')
let contactClose = document.querySelector('.contact-close');
let loginPanel = document.querySelector(".login-sec-wrapper")
let count=1

//menu-mouseover

homeClose.addEventListener('mouseover', () => {
    homeClose.style.display= 'none';
    homeActive.style.display= 'block'
})

aboutClose.addEventListener('mouseover', () => {
    aboutClose.style.display= 'none';
    aboutActive.style.display= 'block'
})

workClose.addEventListener('mouseover', () => {
    workClose.style.display= 'none';
    workActive.style.display= 'block'
})

blogClose.addEventListener('mouseover', () => {
    blogClose.style.display= 'none';
    blogActive.style.display= 'block'
})

contactClose.addEventListener('mouseover', () => {
    contactClose.style.display= 'none';
    contactActive.style.display= 'block'
})

//menu-click

homeActive.addEventListener('click', () => {
    // aboutClose.style.display= 'none';
    homeActive.style.display= 'block'
    workClose.style.display= 'block';
    aboutClose.style.display= 'block';
    blogClose.style.display= 'block';
    contactClose.style.display= 'block';
    if(aboutActive.style.display==='block') aboutActive.style.display='none'
    if(workActive.style.display==='block') workActive.style.display='none'
    if(contactActive.style.display==='block') contactActive.style.display='none'
    if(blogActive.style.display==='block') blogActive.style.display='none'
})

aboutActive.addEventListener('click', () => {
    // aboutClose.style.display= 'none';
    aboutActive.style.display= 'block'
    workClose.style.display= 'block';
    homeClose.style.display= 'block';
    blogClose.style.display= 'block';
    contactClose.style.display= 'block';
    if(homeActive.style.display==='block') homeActive.style.display='none'
    if(workActive.style.display==='block') workActive.style.display='none'
    if(contactActive.style.display==='block') contactActive.style.display='none'
    if(blogActive.style.display==='block') blogActive.style.display='none'
})

workActive.addEventListener('click', () => {
    // aboutClose.style.display= 'none';
    workActive.style.display= 'block'
    aboutClose.style.display= 'block';
    homeClose.style.display= 'block';
    blogClose.style.display= 'block';
    contactClose.style.display= 'block';
    if(homeActive.style.display==='block') homeActive.style.display='none'
    if(aboutActive.style.display==='block') aboutActive.style.display='none'
    if(contactActive.style.display==='block') contactActive.style.display='none'
    if(blogActive.style.display==='block') blogActive.style.display='none'
})

blogActive.addEventListener('click', () => {
    // aboutClose.style.display= 'none';
    blogActive.style.display= 'block'
    workClose.style.display= 'block';
    homeClose.style.display= 'block';
    aboutClose.style.display= 'block';
    contactClose.style.display= 'block';
    if(homeActive.style.display==='block') homeActive.style.display='none'
    if(workActive.style.display==='block') workActive.style.display='none'
    if(contactActive.style.display==='block') contactActive.style.display='none'
    if(aboutActive.style.display==='block') aboutActive.style.display='none'
})

contactActive.addEventListener('click', () => {
    // aboutClose.style.display= 'none';
    contactActive.style.display= 'block'
    workClose.style.display= 'block';
    homeClose.style.display= 'block';
    blogClose.style.display= 'block';
    aboutClose.style.display= 'block';
    if(homeActive.style.display==='block') homeActive.style.display='none'
    if(workActive.style.display==='block') workActive.style.display='none'
    if(aboutActive.style.display==='block') aboutActive.style.display='none'
    if(blogActive.style.display==='block') blogActive.style.display='none'
})

//menu-mouseout

homeActive.addEventListener('mouseout', () => {
    if(aboutActive.style.display==="block" || blogActive.style.display==="block" || workActive.style.display==="block" || contactActive.style.display==="block" ) {
        homeClose.style.display= 'block';
        homeActive.style.display= 'none'
    }
})

aboutActive.addEventListener('mouseout', () => {
    if(homeActive.style.display==="block" || blogActive.style.display==="block" || workActive.style.display==="block" || contactActive.style.display==="block" ) {
        aboutClose.style.display= 'block';
        aboutActive.style.display= 'none'
    }
})

workActive.addEventListener('mouseout', () => {
    if(homeActive.style.display==="block" || aboutActive.style.display==="block" || blogActive.style.display==="block" || contactActive.style.display==="block" ) {
        workClose.style.display= 'block';
        workActive.style.display= 'none'
    }
})

blogActive.addEventListener('mouseout', () => {
    if(homeActive.style.display==="block" || aboutActive.style.display==="block" || workActive.style.display==="block" || contactActive.style.display==="block" ) {
        blogClose.style.display= 'block';
        blogActive.style.display= 'none'
    }
})

contactActive.addEventListener('mouseout', () => {
    if(homeActive.style.display==="block" || blogActive.style.display==="block" || workActive.style.display==="block" || aboutActive.style.display==="block" ) {
        contactClose.style.display= 'block';
        contactActive.style.display= 'none'
    }
})



document.querySelector(".switch-link").addEventListener('click', () => {
    console.log(count);
    if(count%2!=0) {
        document.querySelector(".login-sec-wrapper").style.top= '0px';
        document.querySelector(".login-sec-wrapper").style.visibility= 'visible';
        document.querySelector(".form-wrapper").style.visibility= 'visible';
        document.querySelector(".switch-wrapper").style.top= '20.9vh'
        document.querySelector(".scale").style.top= '20.9vh'
        document.querySelector(".switch-label").innerText= "Close Panel"
        document.querySelector(".switch-label").style.background= "url(./images/bt_close.png) no-repeat left 0px"
    }
    if(count%2===0) {
        document.querySelector(".login-sec-wrapper").style.top= '-137px';
        document.querySelector(".login-sec-wrapper").style.visibility= 'hidden';
        document.querySelector(".form-wrapper").style.visibility= 'hidden';
        document.querySelector(".switch-wrapper").style.top= '0'
        document.querySelector(".scale").style.top= '0'
        document.querySelector(".switch-label").innerText= "Client Panel"
        document.querySelector(".switch-label").style.background= "url(./images/bt_open.png) no-repeat left 0px"
    }
    count++;
})