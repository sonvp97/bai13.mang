let numArray=[];
for (i=0;i<10;i++){
    let num=parseInt(prompt('Nhập số'));
    if (num>10){
        numArray.push(num);
    }

}document.write(numArray);