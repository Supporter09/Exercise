let $no = document.getElementById("answer1");
let $answer = document.getElementById('answer-container');
let count =0;
// Thêm listener
// $no.addEventListener('mouseover',()=>{
//     //Your Code
// })

// Ghi đè listener
// $no.onmouseover = function(){
//     console.log("Cau chon to dung ko?")
//     $no.innerHTML="Yes"
// }


$no.addEventListener('mouseover',()=>{
    count++;
    if(count<5){
        $answer.classList.toggle('reverse');
    } else {
        $answer.style.display = "none";
    }
    
})