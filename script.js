let showMobile = async (phone) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`);
    let data = await res.json();
    let phones = data.data
    // console.log(phones);
    displayMobile(phones)
}
let displayMobile = (phones) => {
    // console.log(phones);
    let mobileContainer = document.getElementById('mobile-container');
    mobileContainer.innerText = '';

    phones.forEach(phone => {
        let div = document.createElement('div');
        div.classList = 'card bg-base-100 w-96 shadow-xl';
        div.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" />
        </figure>
        <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.phone_name}!</h2>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                    <h1>$999</h1>
                    <div class="card-actions">
                        <button class="btn btn-primary">Show Details</button>
                    </div>
                </div>
        `;
        mobileContainer.appendChild(div)

    })
}
let search = () => {
    // let searchBtn = document.getElementById('search-btn')
    let inputField = document.getElementById('input-field');
    let inputText = inputField.value;
    console.log(inputText);
    // inputField.value = '';
    showMobile(inputText)
}