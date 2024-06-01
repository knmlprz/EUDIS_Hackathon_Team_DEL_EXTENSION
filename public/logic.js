document.addEventListener('click', function (e) {
    e.preventDefault();
    chrome.runtime.sendMessage({action:"open_loading_site",data: e.target.href});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateData') {
        console.log('Received data:', request.data);
    }
});