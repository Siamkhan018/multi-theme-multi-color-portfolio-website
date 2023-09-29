/* ========= Typing Animation JS Code ========*/

let typed = new Typed(".typing", {
    strings: ["Web Designer", "", "Web Developer","React JS Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
let name = new Typed(".name", {
    strings: ["","SIAM KHAN"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* ========= Aside Js Code ========*/
const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll('li'),
     totalNavList = navList.length,
     allSection = document.querySelectorAll(".section"),
     totalSection = allSection.length;

     for(let i = 0; i <  totalNavList; i++){

        const a = navList[i].querySelector("a");

        a.addEventListener("click", function(){

            for(let i = 0; i < totalSection; i ++){
                allSection[i].classList.remove("back-section");
            }

            for(let j = 0; j < totalNavList; j++){

                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add('active');
            showSection(this);

            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        });
     };

     function showSection(elem){

        for(let i = 0; i < totalSection; i ++){
            allSection[i].classList.remove("active");
        }
        const target = elem.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
   
     };

     function updateNev(elem){
        for(let i = 0; i < totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = elem.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
     }

     document.querySelector(".hire-me").addEventListener("click", function(){
        showSection(this);
        updateNev(this);
     });

     const navTogglerBtn = document.querySelector(".nav-toggler"),
           aside = document.querySelector(".aside");
           navTogglerBtn.addEventListener("click", () =>{

            asideSectionTogglerBtn();
           });

           function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");

            for(let i = 0; i < totalSection; i++){
                allSection[i].classList.toggle("open");
            }
           }


