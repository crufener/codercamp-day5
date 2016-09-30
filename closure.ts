function createFunction() {
    let a = 0;
    return function() {
        a++;
        console.log(a);
        return a;
    }
}

let c = createFunction();

let btn = document.getElementById("btn");
btn.addEventListener("click", (e => add(c())), false);
function add(x) {
    let out = document.getElementById("in");
    out.innerHTML = x;
}
/*Create a curry function named increment() that enables you to generate
functons that increment by different numbers*/
