let readMoreBtn = document.querySelector("#read-more1");
let paragragh = document.querySelector("#para1");
let readMoreBtn2 = document.querySelector("#read-more2");
let paragragh2 = document.querySelector("#para2");
let readMoreBtn3 = document.querySelector("#read-more3");
let paragragh3 = document.querySelector("#para3");

readMoreBtn.addEventListener('click', function(){
    paragragh.classList.toggle("hidden");
})

readMoreBtn2.addEventListener('click', function(){
    paragragh2.classList.toggle("hidden");
})

readMoreBtn3.addEventListener('click', function(){
    paragragh3.classList.toggle("hidden");
})
