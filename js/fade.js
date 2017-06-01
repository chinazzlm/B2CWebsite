//淡入
function fadeIn(el,time){  
    if(el.style.opacity === ""){  
        el.style.opacity = 0;  
    }  
    if(el.style.display === "" || el.style.display === 'none'){  
        el.style.display = 'block';  
    }  
  
    var t = setInterval(function(){  
        if(el.style.opacity < 1){  
            el.style.opacity = parseFloat(el.style.opacity)+0.01;  
        }  
        else{  
            clearInterval(t);  
        }  
    },time/100);  
}  


//淡出  
function fadeOut(el,time){  
    if(el.style.opacity === ""){  
        el.style.opacity = 1;  
    }  
    if(el.style.display === "" || el.style.display === 'none'){  
        el.style.display = 'block';  
    }  
  
    var t = setInterval(function(){  
        if(el.style.opacity > 0){  
            el.style.opacity = parseFloat(el.style.opacity)-0.01;  
        }  
        else{  
            clearInterval(t);  
            el.style.display = 'none'  
        }  
    },time/100);  
}  
  
function show(){  
    var div=document.getElementById('div');  
    fadeIn(div,400);  
    window.setTimeout(fadeOut(div,800),1000);  
}  