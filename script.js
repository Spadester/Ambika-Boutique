// ===============================
// Ambika Boutique - script.js
// ===============================

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Sticky Navbar Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
        header.style.background = "rgba(255,255,255,.98)";

    }else{

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,.95)";

    }

});


// Reveal Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// Add To Cart Demo

let cart = 0;

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        cart++;

        button.innerHTML = "✓ Added";

        button.style.background = "#2E8B57";

        setTimeout(()=>{

            button.innerHTML = "Add to Cart";

            button.style.background = "#8B1E3F";

        },1500);

        alert("Item added to cart!\n\nTotal Items : " + cart);

    });

});


// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#8B1E3F";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// Footer Year

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Ambika Boutique. All Rights Reserved.`;

}
// Search Products

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});


// Filter Products

function filterProducts(category){

document.querySelectorAll(".filter-buttons button").forEach(btn=>{

btn.classList.remove("active");

});

event.target.classList.add("active");

document.querySelectorAll(".card").forEach(card=>{

if(category==="all"){

card.style.display="block";

}else{

card.dataset.category===category
? card.style.display="block"
: card.style.display="none";

}

});

}