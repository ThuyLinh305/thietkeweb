let randomNumber = Math.floor(Math.random() * 2); 

let userNumber;
do {
    userNumber = prompt('Nhập số (0 hoặc 1):'); 
    userNumber = parseInt(userNumber); 
} while (userNumber !== randomNumber); 

alert('Bạn đã đoán đúng số!');
