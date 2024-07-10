const $form = document.querySelector("#form");
const $nameInput = document.querySelector("#nameInput");
const $amountInput = document.querySelector("#amountInput");
const $priceInput = document.querySelector("#priceInput");
const $productListDc = document.querySelector("#productListDc");
const $sumOfProductNumber = document.querySelector("#sumOfProductNumber");
const $sumOfProductPrice = document.querySelector("#sumOfProductPrice");


let count = 0;
let sumOfProductPrice = 0;

form.addEventListener("submit", (e) => {
    function addProductToList(productList) {
    const listItem = document.createElement("li");  
    $productListDc.appendChild(listItem);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = productList.name;
    listItem.appendChild(nameParagraph);

    const amountParagraph = document.createElement("p");
    amountParagraph.textContent = productList.amount;
    listItem.appendChild(amountParagraph);

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = productList.price;
    listItem.appendChild(priceParagraph);

    count += 1;
    $sumOfProductNumber.textContent = `Mahsulotlar soni: ${count}`;

    sumOfProductPrice += Number(productList.amount) * Number(productList.price);
    $sumOfProductPrice.textContent = `Jami: ${sumOfProductPrice} so'm`;

    }
    const name = $nameInput.value.trim();
    const amount = $amountInput.value.trim();
    const price = $priceInput.value.trim();

    if (name === "" || amount === "" || price === "") {
        alert("Input bosh");
        e.preventDefault();
        return;
    }

    const productList = {
            name: name,
            amount: amount,
            price: price,
    };
    
    console.log(productList);
    e.preventDefault();
    alert("Mahsulot muvaffaqiyatli qo'shildi")
    addProductToList(productList)
    $nameInput.value = "";
    $amountInput.value = "";
    $priceInput.value = "";
})