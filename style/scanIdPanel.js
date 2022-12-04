let panel = document.querySelector("table#panel");
let scanBtn = document.querySelector("#openPanelBtn");

function openScanIdPanel(){
    panel.style.display = "table";
    scanBtn.style.display = "none";
    scanId();
}