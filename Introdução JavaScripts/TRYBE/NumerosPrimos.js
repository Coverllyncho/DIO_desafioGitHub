var n = 10;
var numerosPrimos = [];

for(var i = 2; i <= n; i++){
    var primo = true;
    for(var j = 2; j < i;j++){
        if(i % j === 0){
            primo = false;
            //console.log(i + " não é primo");
            break;
        }

    }
    if(primo){
        numerosPrimos.push(i);
    }
}

console.log(numerosPrimos);
