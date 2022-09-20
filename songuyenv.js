let num=[5,34,5,6,7,346,346,6,4,3];
let V=[6,4,3,3,5,67,7];
let result = 0;
for (let i = 0 ; i < V.length ; i++){
    for (let j = 0; j < num.length ; j++ ){
        if (V[i]===num[j]){
            result+=1;
            break;
        }
        else {
            result+=0;
        }
    }
}
if (result==7){
    document.write('V is in the array');
}else {
    document.write('V is not in the array');
}