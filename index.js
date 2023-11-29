// Below code is for tab view humburg icon change into close icon
let menuBtn = document.querySelector('.tab-menu')
let tbContainer = document.querySelector('.nav-cont')
menuBtn.addEventListener('click', () => {
    menuBtn.innerText = (menuBtn.innerText === 'menu') ? 'close' : 'menu';
    (menuBtn.innerText === 'menu') ? tbContainer.classList.remove('open') : tbContainer.classList.add('open');
})
// ----------------------------------------------
// jquery code for nav-content show when nav lnks hover
function handleHoverEffect(mediaQuery) {
    if (mediaQuery.matches) {
        // Handling hover effect for navigation links
        $('.link').mouseenter(function () {
            var id = $(this).attr('data-id');
            $(this).addClass('link-hover-effect');
            $('#' + id).addClass('open');
        });
        $('.link').mouseleave(function () {
            var id = $(this).attr('data-id');
            $('.hover-content').removeClass('open');
            $(this).removeClass('link-hover-effect');
        });
        // Handling hover effect for content containers
        $('.hover-content').mouseenter(function () {
            var contentId = $(this).attr('id');
            $('.link[data-id="' + contentId + '"]').addClass('link-hover-effect');
        });
        $('.hover-content').mouseleave(function () {
            var contentId = $(this).attr('id');
            $('.link[data-id="' + contentId + '"]').removeClass('link-hover-effect');
        });
    } else {
        // Handle functionality for screen sizes that don't match the media query (if needed)
        // For example, you might want to remove all event listeners or perform different actions
    }
}
// Check the initial media query state on page load
var initialMediaQuery = window.matchMedia("(min-width: 1024px)");
handleHoverEffect(initialMediaQuery);
// Listen for changes in the media query
initialMediaQuery.addListener(function(mediaQuery) {
    handleHoverEffect(mediaQuery);
});
// --------------------------------------------------
// Tab view links open and close functionality
let tabViewLinks = document.querySelectorAll('.tab-view-links');
let links = document.querySelectorAll('.tab-active-link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        const isOpen = tabViewLinks[i].classList.contains('open');
        // Close all tab-view-links
        tabViewLinks.forEach((tab) => {
            tab.classList.remove('open');
        });
        // Remove 'link-hover-effect' from all links
        links.forEach((link) => {
            link.classList.remove('link-hover-effect');
        });
        // Toggle the classes for the clicked link and its associated tab-view-links
        if (!isOpen) {
            links[i].classList.add('link-hover-effect');
            tabViewLinks[i].classList.add('open');
        }
    });
}
