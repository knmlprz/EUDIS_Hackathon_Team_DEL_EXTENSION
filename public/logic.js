document.addEventListener('click', function (e) {
    console.log(window.location.pathname);
    e.preventDefault();
    console.log(e.target.getAttribute('href'));
    chrome.runtime.sendMessage({action:"open_loading_site"});
});