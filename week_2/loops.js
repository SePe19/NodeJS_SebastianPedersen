// smartphones

// why we don't like for loops in JavaScript:
//  - overly verbose
//  - error prone
//  - not functional

const smartPhones = [
    {brand: "Samsung", price: 4500},
    {brand: "iPhone", price: 7200},
    {brand: "Sony Experia", price: 3800},
];

//wrong way
//const discountedPhones = [];

//smartPhones.forEach(smartPhones => {
//    smartPhones.price -= 500;
//    discountedPhones.push(smartPhones);
//});

//console.log(discountedPhones);

// correct way
const discountedPhones = smartPhones.map(smartPhone => {
    smartPhone.price -= 500;
    return smartPhone.price;
});

console.log(discountedPhones);

// remove all over 4000
const phonesUnder4000 = smartPhones.filter(smartPhone => smartPhone.price <= 4000);

console.log(phonesUnder4000);