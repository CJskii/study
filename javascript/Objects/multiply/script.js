// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(){
    for (key in menu){
        if (typeof menu[key] == 'number'){
            menu[key] *= 2;
        }
        
    }
}