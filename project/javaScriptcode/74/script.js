let button1=document.getElementById("btn")

button1.addEventListener("dblclick",()=>{
    //   alert("i am clicked !")
    document.querySelector(".box").innerHTML="<b> hi i am clicked </b> enjoy your website"
})

button1.addEventListener("contextmenu",()=>{
    //   alert("i am clicked !")
    alert("Dont hack-up by  right click!")
})

