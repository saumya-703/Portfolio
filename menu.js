let about =document.querySelector('#about');
let exp =document.querySelector('#exp');
let port =document.querySelector('#port');
let cont =document.querySelector('#cont');

about.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('about.png')";
});
exp.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('Experience.png')";
});
port.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('projects.png')";
});
cont.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = "url('contact.png')";
});