const anchorLink = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < anchorLink.length; index++) {
    const element = anchorLink[index];

    element.addEventListener("click", function(ev){
        ev.preventDefault();        
        if(document.getElementById(this.getAttribute("href").replace("#","")))
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });    
    })
    
}