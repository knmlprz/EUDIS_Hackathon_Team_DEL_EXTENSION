chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "open_loading_site") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let activeTab = tabs[0];
            chrome.tabs.update(activeTab.id, { url: chrome.runtime.getURL("loading.html") });
        });
    }
});