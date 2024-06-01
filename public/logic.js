document.addEventListener('click', function (e) {
    e.preventDefault();
    chrome.runtime.sendMessage({action:"open_loading_site",data: e.target.href});
});