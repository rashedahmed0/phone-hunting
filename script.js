//main funtion to fetch 
let showMobile = async (phone) => { // here phone is a parameter using for dynamic api url 
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`); // here the use the dynamic api 
    let data = await res.json();

    let phones = data.data // get data
    // console.log(phones);
    displayMobile(phones) // show function
}
let displayMobile = (phones) => {
    // console.log(phones);

    let mobileContainer = document.getElementById('mobile-container'); // get mobile container 
    mobileContainer.innerText = ''; // clear the previous search mobile 

    phones.forEach(phone => {
        let div = document.createElement('div'); // craete the mobile card 
        div.classList = 'card bg-base-100 w-96 shadow-xl'; // set the tailwind class using classlist 
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
        `; // dynamic card create 
        mobileContainer.appendChild(div) // create div append in to the mobile container 

    })
}
let search = () => {
    let inputField = document.getElementById('input-field'); // here make button clicked 
    let inputText = inputField.value; // get the input field values 
    inputField.value = ''; // clear the input field after search 
    showMobile(inputText)
}