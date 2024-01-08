let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    let userNumber;
    do {
        userNumber = prompt('Nhập số từ 1 đến 10:'); 
        userNumber = parseInt(userNumber); 
    } while (userNumber !== randomNumber); 

    alert('Bạn đã đoán đúng số!'); 
}
