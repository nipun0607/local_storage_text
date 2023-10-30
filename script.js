let textarea=document.querySelector("#textarea");



textarea.addEventListener("input", (e)=>{
    localStorage.setItem("saveData",JSON.stringify(e.target.value));

   
  
});


if (localStorage.getItem("saveData")) {
    textarea.value = localStorage.getItem("saveData");
}



