const bill = document.getElementById("billAmount");
const tip = document.getElementById("tipAmount");
const addtipBill = document.getElementById("add-tip-bill");
const totalBill = document.getElementById("total");


function calcTotal(){
    event.preventDefault();
    const billVal = bill.value;
    const tipVal = tip.value;
    const totalVal = billVal * (1 + tipVal / 100);
    totalBill.innerText = totalVal.toFixed(2);
}

addtipBill.addEventListener("click", calcTotal);