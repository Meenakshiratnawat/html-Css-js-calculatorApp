let string = "";
// let buttons = document.querySelectorAll('.button');
let buttons = document.querySelectorAll('.button, .buttonClear, .buttonEqual, .buttonDel');

var output = document.getElementById('input');
var text = output.innerHTML

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    
    if(e.target.innerHTML == '='){
        console.log(e.target.innerHTML)
      string = eval(string);
      console.log(string,"after =")
      document.querySelector('input').value = string;
      string = string.toString(); 

      console.log(string,"after =")

    }
    else if(e.target.innerHTML == 'Reset'){
      string = ""
      document.querySelector('input').value = string;
    }
   
    else if(e.target.innerHTML == 'Del' ){
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
      }
       else{ 
    console.log(e.target,14)

    string = string + e.target.innerHTML;
    console.log(string)

    document.querySelector('input').value = string;

      }
    
  })
})

