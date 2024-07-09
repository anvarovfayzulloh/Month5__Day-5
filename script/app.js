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
        listItem.textContent = `${productList.name} - ${productList.amount} - ${productList.price}`;
        $productListDc.appendChild(listItem);
        count += 1;
        $sumOfProductNumber.textContent = count
        sumOfProductPrice += Number(productList.amount) * Number(productList.price)
        $sumOfProductPrice.textContent = sumOfProductPrice
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