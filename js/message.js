window.onload = function () {
    let headImage = document.querySelectorAll("img[id]");
    let prev = 0;
    for(let i=0;i<headImage.length;i++){
        headImage[i].onclick = function () {
            headImage[prev].style.opacity = 0.7;
            this.style.opacity = 1;
            prev = i;
        }
    }
    let userName = document.querySelector("input[name=name]");
    let textarea = document.querySelector("textarea");
    let already = document.querySelector("#already");
    let left = document.querySelector("#left");
    let max = 50;
    already.innerText = 0;
    left.innerText =max;
    textarea.onkeyup = function () {
        let value = this.value;
        already.innerText = value.length;
        left.innerText = max -value.length ;
    }

    let message = document.querySelector(".message");
    let submit = document.querySelector("input[type=submit]")
    submit.onclick = function (e) {
        let touxiang = headImage[prev].src;
        let name = userName.value;
        let text = textarea.value;
        e.preventDefault()
        let html=`
        <li>
             <div class="touxiang"><img src="${touxiang}" alt=""></div>
             <div class="text">
             <p><b>${name}</b> <span>${new Date()}</span></p>
             <p>${text}</p>
             </div>
        `
        message.innerHTML =html + message.innerHTML;
        return false;
    }
}
