// let divMy = document.querySelector("#date");
let time = document.querySelector(".time")
time.innerHTML = "";

let date = document.querySelector(".date")

    setInterval(() => {
        let myDate = new Date();
        let timeDate = myDate;
        date.innerHTML = timeDate.toLocaleString();
        

    },1000)


// divMy.innerHTML = myDate;

// console.log(myDate);

// function heelo() {
    
// } 