let menuBtn = document.querySelector('.tab-menu')
let tbContainer = document.querySelector('.nav-cont')
menuBtn.addEventListener('click', () => {
    menuBtn.innerText = (menuBtn.innerText === 'menu') ? 'close' : 'menu';
    (menuBtn.innerText === 'menu') ? tbContainer.classList.remove('open') : tbContainer.classList.add('open');

})

// const mainContainer = document.querySelector('.main-container');
// const hoverContainers = document.querySelectorAll('.hover-content');

// mainContainer.addEventListener("mouseover", function (e) {
//     const id = e.target.dataset.id;
//     if (id) {
//         const element = document.getElementById(id);
//         element.classList.add("open");
//     }
// });

//  js code for nav-content show when nav lnks hover

const mainContainer = document.querySelector('.nav-links');
const hoverContents = document.querySelectorAll('.hover-content');


mainContainer.addEventListener("mouseover", function (e) {
    const id = e.target.closest('.link').dataset.id;

    if (id) {
        for (const content of hoverContents) {
            if (content.id === id) {
                content.classList.add("open");
            } else {
                content.classList.remove("open");
            }
        }
    }
});

mainContainer.addEventListener("mouseleave", function (e) {
    for (const content of hoverContents) {
        content.classList.remove("open");
    }
});


// jquery code for nav-content show when nav lnks hover

$(document).ready(function () {
    $('.link').mouseenter(function() {
        var id = $(this).attr('data-id');
        $('#' + id).addClass('open');
    });

    $('.nav-links').mouseleave(function() {
        $('.hover-content').removeClass('open');
    });
});


let tabViewLink = document.querySelectorAll('.tab-view-links')

for (let i = 0; i < tabViewLink.length; i++) {
    tabViewLink[i].addEventListener('mouseover', (e)=>{
        // tabViewLink[i].previousSibling.style.backgroundColor = 'block'
        console.log(tabViewLink[i].previousSibling);
    })
}
