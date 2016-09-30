function createFunction() {
    var a = 0;
    return function () {
        a++;
        console.log(a);
        return a;
    };
}
var c = createFunction();
var btn = document.getElementById("btn");
btn.addEventListener("click", (function (e) { return add(c()); }), false);
function add(x) {
    var out = document.getElementById("in");
    out.innerHTML = x;
}
