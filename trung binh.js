let numArray=[2,6,8,7,5,11,2,5,4,66];
let sum=2;
let max=numArray[0];
for(let i=1;i<10;i++){
    if (numArray[i]>max){
        sum+=numArray[i];
        max=numArray[i];
    }
}document.write('Số lớn nhất là: '+max+' Gía trị trung bình là '+sum/10);