// search box

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// <i class='bx bx-x'></i>
searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
        searchBox.classList.replace("bx-x" ,"bx-search");
    }
})


// sidebar open close js Code

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "0";
});
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
});


//sidebar sub menu open close js Code

let sixMonthArrow = document.querySelector(".sixMonth-arrow");
sixMonthArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});



let sixWeekArrow = document.querySelector(".sixWeek-arrow");
sixWeekArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show2");
});



// VAT constant

const VAT = 0.15;

document.getElementById('calculate-btn').addEventListener('click', function () {
    let total = 0;

    // Select all checkboxes within the course list
    const checkboxes = document.querySelectorAll('.course-list input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            // Use a fallback value of 0 if the value is missing or invalid
            const fee = parseFloat(checkbox.value) || 0;
            total += fee;
        }
    });

    const vatAmount = total * VAT;
    const finalTotal = total + vatAmount;

    // Update the total fee display
    document.getElementById('total-fee').innerText = finalTotal.toFixed(2);
});


