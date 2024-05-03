document.querySelector("#no-btn").addEventListener("mouseover", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let btnCordinates = e.currentTarget.getBoundingClientRect()
    for (const iterator in btnCordinates) {
        if (iterator !== "toJSON") {
            btnCordinates[iterator] = parseInt(btnCordinates[iterator])
        }
    }
    let btn = e.currentTarget
    if(!btn.style.position){
        btn.style.position = "relative"
    }
    console.log(btn.style.position);
    console.log(btnCordinates);
    console.log(e);
    console.log(`mouse x ${mouseX}`);
    console.log(`mouse y ${mouseY}`);
    if (mouseY < btnCordinates.bottom && mouseX >= btnCordinates.left && mouseX - btnCordinates.left <= 10) {
        console.log("lqvo");
        btn.style.left = +btn.style.left.replace("px","") + 70 + "px";
    }
    else if(mouseY < btnCordinates.bottom && mouseX <= btnCordinates.right && btnCordinates.right - mouseX <= 10){
        console.log("dqsno");
        btn.style.left = +btn.style.left.replace("px","") - 70 + "px";
    }
    else if(mouseY >= btnCordinates.bottom || btnCordinates.bottom - mouseY <= 15){
      //  console.log("dolu");
        btn.style.top = +btn.style.top.replace("px","") - 70 + "px";
    }
    else if(mouseY < btnCordinates.bottom){
       // console.log("gore");
        btn.style.top = +btn.style.top.replace("px","") + 70 + "px";
    }
    //console.log(btn.style);
})

document.addEventListener("scroll",() => {
    if(document.querySelector("#no-btn")){
        document.querySelector("#no-btn").remove();
    }
})

document.querySelector("#yes-btn").addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove()
    document.querySelector("h3").innerHTML = "иееееееее &#129395"
    document.querySelector("img").src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zmnqy3XClZHSw3kHUmZ9rXxj_-LHi9dUvElGiNPCRhn8DKr3D6Y7BzNdaJpVozuKNCc&usqp=CAU`
})