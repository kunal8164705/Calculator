var btn=document.getElementsByClassName("btn");
var display=document.getElementById("display");





for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click', function(){
        var value=this.getAttribute('data-value');
        if(value=='='){
                display.innerText=eval(display.innerText);

        }

        else if(value=='AC'){
            display.innerText=null;

        }
        else if(value=='+/-'){
                
                    display.innerText=eval(display.innerText + '*(-1)');
                
                
                
        }

        else{
            display.innerText+=value;
        }
    });
}