function createCard(title, cName,views,monthsOld,duration,thumbnail){
    let viewStr
    if(views<1000000){
         viewStr = views/1000 + "K";
    }
    else if(views>1000000){
         viewStr = views/1000000 + "M";
    }
    else{
         viewStr = views/1000 + "K";
    }
    let html = `<div class="card">
      <div class="image">
        <img
          src=" ${thumbnail}"
          alt="photo">
        <div class="capsule">${duration}</div>
      </div>
      <div class="text">

        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
      </div>
    </div>`

    document.querySelector(".container").innerHTML=html
}
createCard("Introduction to backened | Santosh bro whatsup!","bharat",43000,8,"31:22", "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg")



createCard("Introduction to backened | Santosh bro whatsup!","bharat",43000,8,"31:22", "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg" )
