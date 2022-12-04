function copy() {
    var copyText = document.querySelector("#encrypt > #result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
  