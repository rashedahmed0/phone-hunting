let showMobile = async (phoneNames, isShowAll) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneNames}`); // use awit and fetch api data
    let data = await res.json(); // user await and res.json 
    let phone = data.data; // data 
    // console.log(data.data);
    displayMobile(phone, isShowAll) // displayMobile funsion argument pass
}

let displayMobile = (phones, isShowAll) => {
    let mobileContainer = document.getElementById('mobile-container'); // create mobile contaiener use id 
    mobileContainer.innerHTML = ' ';
    // show all button 
    let showBtn = document.getElementById('show-btn');
    if (phones.length > 6 && !isShowAll) {
        showBtn.classList.remove('hidden');
    }
    else {
        showBtn.classList.add('hidden');
    }
    console.log('is show all ', isShowAll);
    if (!isShowAll) {
        phones = phones.slice(0, 6)

    }
    phones.forEach(phone => { // here use phone.foreach 
        // console.log(phone);
        let div = document.createElement('div');  // here crate a new elemnet 
        div.classList = 'card bg-base-100 shadow-xl '; //here add classlist add tailwind classes 
        div.innerHTML = `
          <figure class="px-10 pt-10">
                    <img src="${phone.image}" alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                    <h2 class="card-title">$999</h2>
                    <div class="card-actions">
                        <button onclick="showDetails('${phone.slug}');my_modal_3.showModal()" class="btn btn-primary">Show Details</button>
                    </div>
                </div>
        `;
        mobileContainer.appendChild(div)


    });

}

let showDetails = async (id) => {
    console.log(id);
    let res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    let data = await res.json();
    // console.log(data);
    let details = data.data;
    console.log(details.mainFeatures.chipSet);
    ShowPhoneDetails(details)

}
let ShowPhoneDetails = (phone) => {
    console.log(phone);
    let img = document.getElementById('img')
    img.src = `${phone.image}`
    let detailsName = document.getElementById('details-name');
    detailsName.innerText = `${phone.name}`;
    let detailsDescription = document.getElementById('details-description');
    detailsDescription.innerText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
    let display = document.getElementById('display');
    display.innerText = `${phone.mainFeatures.displaySize}`;
    let Storage = document.getElementById('Storage');
    Storage.innerText = `${phone.mainFeatures.storage}`;
    let Chipset = document.getElementById('Chipset');
    Chipset.innerText = `${phone.mainFeatures.chipSet}`;

    let Memory = document.getElementById('Memory');
    Memory.innerText = `${phone.mainFeatures.memory}`;

    let Slug = document.getElementById('Slug');
    Slug.innerText = `${phone.slug}`;
    let ReleaseData = document.getElementById('Release-data ');
    ReleaseData.innerText = `${phone.releaseDate}`;
    // let GPS = document.getElementById('GPS ');
    // GPS.innerText = `${phone.others.GPS}`;
}


let search = (isShowAll) => {
    let searchInput = document.getElementById('input-field');
    let inputText = searchInput.value;
    // console.log(inputText);
    showMobile(inputText, isShowAll);
}

let showAllButton = () => {
    search(true)
}
showAllButton()