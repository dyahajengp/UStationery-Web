// const keranjang = {
//     stickynotes: 0,
//     highlighter: 0,
//     notebook: 0,
//     organizer: 0,
//     journalingset: 0,
//     card: 0
// }

// const pesanan = document.querySelector(".card")
// for (let card of pesanan) {
//     card.addEventListener('click', function(event) {
//         const target = event.target;

//         if(target.classList.contains('stickynotes')){
//             alert("keranjang");
//             keranjang.stickynotes=+1;
//             return
//         } else if (target.classList.contains('highlighter')){
//             keranjang.highlighter=+1;
//             return;
//         }
//     });
// }
 
let pesanan = [];
let total = document.querySelector(".keranjang");

function hitungPesanan(val) {
    let divObj = document.querySelector(".card");
    divObj.value = val;
    pesanan.push(parseInt(divObj.value));
    console.log(pesanan);
    let jumlah = pesanan.reduce((a,b) => a+b);
    total.innerHTML = 'Total belanja Anda : $(jumlah)';
}
