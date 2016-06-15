chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.type === "shownotification") {

            new Notification("This tutorial isn't for beginners!")

        }
        chrome.pageAction.show(sender.tab.id);
        sendResponse();

    });