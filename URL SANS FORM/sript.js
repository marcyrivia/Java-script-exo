
let paramsUrl = new URLSearchParams(window.location.search);
lastName.innerText = paramsUrl.get('lastName');