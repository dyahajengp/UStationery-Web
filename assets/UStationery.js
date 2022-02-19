let field = document.querySelector(".container-product");
let item = Array.from(field.children);
let pilih = document.getElementById('pilih');
let produk = [];

for (let i of item){
    const last = i.lastElementChild;
    const x = last.textContent.trim();
    const y = Number(x.substring(2));
    i.setAttribute('data-harga', y);
    produk.push(i);
}

pilih.onchange = urutValue;

function urutValue(){
    if (this.value === 'default'){
        while(field.firstChild) {
            field.removeChild(field.firstChild);
        }
        field.append(...produk);
    } if (this.value === 'dariMurah'){
        urutElemendariMurah(field, item);
    } if (this.value === 'dariMahal'){
        urutElemendariMahal(field, item);
    }
}

function urutElemendariMurah(field, item){
    let urutItem = item.sort((a,b) => {
        const ax = a.getAttribute('data-harga');
        const bx = b.getAttribute('data-harga');

        return ax - bx;
    });
    while(field.firstChild) {
        field.removeChild(field.firstChild);
    }
    field.append(...urutItem);
}

function urutElemendariMahal(field, item){
    let urutItem = item.sort((a,b) => {
        const ax = a.getAttribute('data-harga');
        const bx = b.getAttribute('data-harga');

        return bx - ax;
    });
    while(field.firstChild) {
        field.removeChild(field.firstChild);
    }
    field.append(...urutItem);
}


