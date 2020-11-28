

function checkPrime(n){
    var flag = true;
    for (i = 2; i <= n - 1; i++) 
                if (n % i == 0) { 
                    flag = false; 
                    break; 
                } 
}
function filterPrime(arr){
    for(i=0;i<arr.length;i++){
        if(checkPrime(arr[i])){
            console.log(arr[i]);
        }
    }
}
let arr= [1,4,3,6,5,7,10];
let str = prompt(" Nhap va 1 day so: ")
let arr = spilt(',');

let numbers = arr.map(function(number){
    return Number(number)
})
// Tìm hiểu map(), find();filter(),findIndex(),indexOf(); push(),pop(); add(); unshift(), splice(), shift()