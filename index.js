window.onscroll=function(){
    if(window.pageYOffset>15){
      document.getElementById('nav_bar').style.backgroundColor="rgb(128 128 128)";
    }
    else{
      document.getElementById('nav_bar').style.backgroundColor="transparent";
    }
  }