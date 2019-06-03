window.onload =function () {
    let home = document.getElementById('home');
    console.log(1);
    let dian = document.getElementsByClassName('btnlist')
    // console.dir(dians);
    let ban = dian[0].getElementsByTagName('li')
    console.dir(ban);
    let activeColor = '#046b80', disactiveColor = '#ffffff'
    home.onmouseenter = function () {
        home.style.color = 'blue'
    }
    home.onmouseleave = function () {
        home.style.color = '#ffffff'
    }

    for (var i = 0; i < ban.length;i++) {
        ban[i].onmouseenter = function () {
            this.style.backgroundColor = activeColor
        }
        ban[i].onmouseleave = function () {
            this.style.backgroundColor = disactiveColor
        }
    }

// window.onload = function () {
// }
    let tablist = document.querySelectorAll('.tablist > li ')
    console.log(tablist);
    tablist.forEach(function ( elem,index) {
        elem.onmouseenter = function () {
            for (let i=0 ;i<tablist.length; i++){
                tablist[i].onmouseenter =function () {
                    for (let j =0;j<tablist.length;j++){
                        tablist[j].classList.remove('hot')
                    }
                    this.classList.add('hot')
                }

            }

        }

    })
    // for (var i =0;i<tablist.length;i++){
    //     tablist[i].onmouseenter =function () {
    //
    //     }
    // }
    /*
 * 轮播图
 * index 保存窗口中显示图片下标
 * */
    /*let index = 0;
    let rightbtn = document.querySelector('.rightbtn');
    let leftbtn = document.querySelector('.leftbtn');
    let bannerImg = document.querySelectorAll('.con1img li');
    console.log(bannerImg.length);

    rightbtn.onclick=function () {
        index++;
        console.log(index);
        if (index==bannerImg.length){
            console.log(index);
            index=0;
        }
        bannerImg.forEach(function (ele){
            ele.style.zIndex=1;
        });
        bannerImg[index].style.zIndex=999;
    }
    leftbtn.onclick=function () {
        if (index==0){
            index=bannerImg.length;
        }
        index--;
        bannerImg.forEach(function (ele){
            ele.style.zIndex=1;
        });
        bannerImg[index].style.zIndex=999;
    };
    let t = setInterval(rightbtn.onclick,3000)*/


    let index = 0;
    let current = 0 ,next = 0;
    let rightbtn = document.querySelector('.rightbtn');
    let leftbtn = document.querySelector('.leftbtn');
    let bannerImg = document.querySelectorAll('.con1img li');
    let w =bannerImg[0].offsetWidth;
    let flag =true;
    console.log(bannerImg.length);
    rightbtn.onclick = function(){
        if (!flag) {
            return
        }
        flag=false
        next++;
        if (next==bannerImg.length){
            next = 0;
        }
        bannerImg[next].style.left=w+'px';
        animate(bannerImg[current],{left:-w})
        animate(bannerImg[next],{left:0})
        flag=true
        Array.prototype.forEach.call(ban,function (elem) {
            elem.style.background='fff';
            ban[next].style.background='#6eb49c'
        })
        current=next
    }
    leftbtn.onclick = function(){
        next--;
        if (next<0){
            next=bannerImg.length-1;
        }
        bannerImg[next].style.left=-w+'px';
        animate(bannerImg[current],{left:w})
        animate(bannerImg[next],{left:0})
        current=next
    }

    /*轮播鼠标移入移出*/
    /*let bannerLeft = document.querySelector('.con1');

    bannerLeft.onmouseenter=function () {
        clearInterval(t);
    };
    bannerLeft.onmouseleave=function () {
        t=setInterval(rightbtn.onclick,3000);
    }
    for (var i=0;i<btnlist.length;i++){
        btnlist[i].index=i;
        btnlist[i].onclick=function () {
            Array.prototype.forEach.call(btnlist,function (elem) {
                elem.classList.remove('hot')
            });
            con1img[this.index].style.zIndex=999;
        }
    } */
    let bannerLeft =document.querySelector('.con1')
    let  t = setInterval(rightbtn.onclick,3000);
    bannerLeft.onmouseenter =function () {
        clearInterval(t)

    }
    bannerLeft.onmouseleave=function () {
        t = setInterval(rightbtn.onclick,3000);
    }
    for (var i=0 ;i<ban.length;i++){
        ban[i].onclick =function () {
            Array.prototype.forEach.call(ban,function (elem) {
                elem.classList.remove('hot')
            })
            bannerImg.forEach(function (ele) {
                ele.style.zIndex=1
            });
            this.classList.add('hot');
            bannerImg[index].style.zIndex=999;

        }
    }
    //四个按钮的
    for(let i=0;i<ban.length;i++){
        ban[i].onclick=function () {
            next=i;
            if(i>current){
                //左移
                bannerImg[next].style.left= w +'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left:0});
            }else if(i<current){
                //右
                bannerImg[next].style.left= -w +'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left:0});
            }else{
                return;
            }
            Array.prototype.forEach.call(ban,function(elem){
                elem.style.background='none';
            });
            ban[i].style.background='#6eb49c';
            current=next;
        }
    }




}



