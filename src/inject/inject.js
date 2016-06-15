            var foundIt = false
                jQuery.fn.highlight = function (str, className) {
                    var regex = new RegExp(str, "gi");
                    return this.each(function () {
                        $(this).contents().filter(function() {
                            return this.nodeType == 3 && regex.test(this.nodeValue);
                        }).replaceWith(function() {
                            return (this.nodeValue || "").replace(regex, function(match) {
                                foundIt = true
                                return "<span style='background-color:yellow'>" + match + "</span>";
                            });
                        });
                    });
                };
            
            $("*").highlight("simply", "highlight")

            if (foundIt) {

                chrome.runtime.sendMessage({
                    type: "shownotification"
                }, function() {});

            }

