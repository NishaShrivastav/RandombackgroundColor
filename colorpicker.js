const getcolor=()=>{
  const randomNumber=Math.floor(Math.random()*16777215);
// to convert number into hex code
      const randomCode="#"+randomNumber.toString(16);
      document.body.style.backgroundColor=randomCode;
      document.getElementById("title").innerText=randomCode;
}

document.getElementById("btn").addEventListener(
      "click",getcolor
);
getcolor();