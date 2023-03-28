// GETING ELEMENT FROM HTML 
let body1 = document.body
let btn = document.querySelectorAll(".btn")
let text = document.querySelector(".text")

// LISTENING CLICK EVENT
btn[0].onclick = () => {
    console.log("1");
    let bcolour = prompt("ENTER COLOR");
    text.style.color = bcolour;
}
btn[1].onclick = () => {
    console.log("2");
    let bcolour = prompt("ENTER COLOR");
    body1.style.background = bcolour;
}
btn[2].onclick = () => {
    let bcolour = prompt("ENTER COLOR");
    btn[0].style.background = bcolour;
    btn[1].style.background = bcolour;
    btn[2].style.background = bcolour;
}
