document.addEventListener('click', function (e) {
    console.log(window.location.pathname);
    e.preventDefault();
    console.log(e.target.getAttribute('href'));
    chrome.runtime.sendMessage({action:"open_loading_site"});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateData') {
        console.log('Received data:', request.data);
    }
});