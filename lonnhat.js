let numArray=[2,6,8,7,5,11,2,5,4,66];
let result='';
let max=numArray[0];
for(let i=1;i<numArray.length;i++){
    if (numArray[i]>max){
        max=numArray[i];
        result=i;
    }
}document.write('Số lớn nhất là: '+max+' ở vị trí số '+result);