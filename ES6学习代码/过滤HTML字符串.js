
function saferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt");

        s += templateData[i];
    }
    return s;
}

var sender = "<script>alert('abc')</script>"; // 恶意代码
var message = saferHTML`<p>${sender} has sent you a message.</p>`;
console.log(message);