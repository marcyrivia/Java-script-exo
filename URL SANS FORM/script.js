function CheckInfo() {
  let lastname = document.querySelector("#lastName").value
  let firstName = document.querySelector("#firstName").value
  let age = document.querySelector("#Age").value
  let numbers = document.querySelector("#number").value
  let mail = document.querySelector("#mail").value
  let tel = document.querySelector("#tel").value
  let avis = document.querySelector("#avis").value
  let btnCheck = document.querySelector("#btnCheck")
  const info1 = encodeURIComponent(lastname)
  const info2 = encodeURIComponent(firstName)
  const info3 = encodeURIComponent(age)
  const info4 = encodeURIComponent(numbers)
  const info5 = encodeURIComponent(mail)
  const info6 = encodeURIComponent(tel)
  const info7 = encodeURIComponent(avis)

window.location.href = `summary.html?lastname=${info1}&firstName=${info2}&age=${info3}&numbers=${info4}&mail=${info5}&tel=${info6}&avis=${info7}`
  // let test = (window.location.search).split("&")
  // console.log(test[0])
}




  
  let paremUrl = new URLSearchParams(window.location.search);
  console.log(paremUrl);

  let urlLastname = paremUrl.get("lastName");
  let urlFirstName = paremUrl.get("firstName");
  let urlAge = paremUrl.get("age");
  let urlNumbers = paremUrl.get("numbers");
  let urlMail = paremUrl.get("mail");
  let urlTel = paremUrl.get("tel");
  let urlAvis = paremUrl.get("avis");
  

  /// += conserve le html du span de page.html
