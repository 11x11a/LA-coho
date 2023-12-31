function arthe(a,b,type){
    if(type == "sum"){
        return a+b;
    }
    if (type == "minus"){
        return a-b;
    }
}
const answer = arthe(11,11,"sum");
console.log(answer);