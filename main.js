//Constantes
const hambMenu= document.getElementById("hambuMenu");
const navMenu= document.getElementById("navMenu");
const close= document.getElementById("closeImg");
const featuresButton= document.getElementById("Features-button");
const companyButton=document.getElementById("Company");
const featuresItems = document.getElementById("Features-li");
const CompanyItems = document.getElementById("Company-li");
const featuresArrow = document.getElementById("Fea-img");
const companyArrow = document.getElementById("Compa-img")

hambMenu.addEventListener("click",()=>{
    hambMenu.style.display="none";
    navMenu.style.display="block";
})

close.addEventListener("click",()=>{
    hambMenu.style.display=(window.innerWidth <= 425 )? "block" :"none";
    navMenu.style.display=(window.innerWidth >= 500 )? "block" :"none";
})

featuresButton.addEventListener("click",()=>{
   featuresItems.style.display =(featuresItems.style.display==="block") ? "none" : "block";
   featuresArrow.style.transform =(featuresItems.style.display === "block")?"rotate(180deg)" : "rotate(0deg)" 

})
companyButton.addEventListener("click",()=>{
    CompanyItems.style.display =(CompanyItems.style.display==="block") ? "none" : "block";
    companyArrow.style.transform=(CompanyItems.style.display==="block") ?"rotate(180deg)" : "rotate(0deg)" ;

})
