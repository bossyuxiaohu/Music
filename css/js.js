/**
 * Created by Administrator on 2017/10/9.
 */
var music = document.getElementsByClassName("mid")[0].children;
var code = document.getElementsByTagName("code")[0];
var audio = document.getElementById("aud");
var aplay = document.querySelectorAll(".mid audio");

code.onclick=function(){
    audio.play();
    audio.currentTime = 0;
    for(var s=0;s<music.length;s++){
        var aud =  music[s].children[0];
        var play = music[s].children[1];
        var pause = music[s].children[2];
        play.style.display="inline-block";
        pause.style.display="none";
        aud.pause();
        aud.currentTime = 0;
        music[s].style.animation="";//停止自动旋转
    }
};
for(var i=0;i<music.length;i++){
    music[i].value=i;
    music[i].onclick=function(){
        audio.pause();
        audio.currentTime = 0;
        for(var k=0;k<music.length;k++){
            var aud = music[k].children[0];
            var play = music[k].children[1];
            var pause = music[k].children[2];
            if(music[this.value]==music[k]){
                play.style.display="none";
                pause.style.display="inline-block";
                aud.play();
                aud.currentTime = 0;
                music[k].style.animation="rt 10s infinite";//自动旋转
            }else{
                play.style.display="inline-block";
                pause.style.display="none";
                aud.pause();
                aud.currentTime = 0;
                music[k].style.animation="";//停止自动旋转
            }
        }
    }
}
//自动循环播放
function autoplay(){
    for(var k=0;k<music.length;k++){
        if(aplay[k].ended){
            if(k==music.length-1){
                aplay[k].currentTime=0;
                aplay[k].parentNode.style.animation="";//停止自动旋转
                aplay[k].parentNode.children[1].style.display="inline-block";
                aplay[k].parentNode.children[2].style.display="none";
                k=0;
                aplay[k].play();
                aplay[k].parentNode.style.animation="rt 10s infinite";//自动旋转
                aplay[k].parentNode.children[2].style.display="inline-block";
            }else{
                aplay[k].currentTime=0;
                aplay[k+1].play();
                aplay[k+1].parentNode.style.animation="rt 10s infinite";//自动旋转
                aplay[k].parentNode.style.animation="";//停止自动旋转
                aplay[k+1].parentNode.children[2].style.display="inline-block";
                aplay[k].parentNode.children[1].style.display="inline-block";
                aplay[k].parentNode.children[2].style.display="none";
            }
        }
    }

}
setInterval(autoplay,5000);





