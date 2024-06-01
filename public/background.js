chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "open_loading_site") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let activeTab = tabs[0];
            chrome.tabs.update(activeTab.id, { url: chrome.runtime.getURL("loading.html") });
        });
    }
});


let pollInterval = 5000;

function fetchData() {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { action: 'updateData', data: "Fetching data..." });
        });
    });
}

setInterval(fetchData, pollInterval);

fetchData();