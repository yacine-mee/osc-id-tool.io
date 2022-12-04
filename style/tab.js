let tab1btn = document.querySelector("nav > div:nth-child(1)");
let tab2btn = document.querySelector("nav > div:nth-child(2)");
let tab1 = document.querySelector("#encrypt");
let tab2 = document.querySelector("#decrypt");

tab1btn.style.color = "rgb(255, 89, 0)";
tab1btn.style.borderColor = "rgb(255, 89, 0)";
tab2.style.display = "none";


tab2btn.onclick = () => {
    tab1.style.display = "none";
    tab2.style.display = "flex";
    tab1btn.style.color = "#ffffff";
    tab1btn.style.borderColor = "#ffffff";
    tab2btn.style.color = "rgb(255, 89, 0)";
    tab2btn.style.borderColor = "rgb(255, 89, 0)";
}

tab1btn.onclick = () => {
    tab1.style.display = "flex";
    tab2.style.display = "none";
    tab1btn.style.color = "rgb(255, 89, 0)";
    tab1btn.style.borderColor = "rgb(255, 89, 0)";
    tab2btn.style.color = "#ffffff";
    tab2btn.style.borderColor = "#ffffff";
}