chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);




            var query = /simply/gi

            var replaceHtml = $("body").html().replace(query, '<span style="background-color:yellow"> simply </span>');

            console.log(query.test(replaceHtml))

            if (query.test(replaceHtml)) {

                var opt = {
                    TemplateType: "basic",
                    title: "Testing!",
                    message: "mayybe this works?",
                    iconUrl: "icons/icon48.png"
                };
                chrome.runtime.sendMessage({
                    type: "shownotification",
                    opt: opt
                }, function() {});

            }


            $("body").html(replaceHtml)

        }
    }, 10);
});