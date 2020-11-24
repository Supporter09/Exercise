let case_num = parseInt( prompt("so phan tu trong mang"));
for(let i=0;i<case_num;i++){
    var add = prompt("a["+i +"] =");
        add = parseInt(add);
        arr.push(add);
}

console.log(arr);

for(let i=0;i<case_num;i++){
    for(let j=2;j<arr[i]-1;j++){
        if(arr[i] % j != 0)
        console.log(arr[i]);  
    }
}
     