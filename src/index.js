console.log('%c HI', 'color: firebrick')
// CHALLENGE 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener('DOMContentLoaded', fetchDog) 

function fetchDog() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => handleImage(data))
}

function handleImage(data) {
    // dogContainer is where we will add in the images
    const dogContainer = document.querySelector("#dog-image-container") 
    // next we will iterate over the array from the data["message"]

    const dogPics = data["message"].map(dog => {
        const d = document.createElement('li')
        d.innerHTML = `<img src=${dog}>`
        dogContainer.appendChild(d)
    })

}

// CHALLENGE 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogBreeds = document.querySelector("#dog-breeds")

let breeds = []

document.addEventListener('DOMContentLoaded', loadDogBreeds) 

function loadDogBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        breeds = Object.keys(data["message"])
        appendDogBreeds(breeds)
    })
};

function appendDogBreeds(breeds) {
    for (const breed of breeds) {
        const li = document.createElement('li')
        li.innerText = `${breed}`
        dogBreeds.appendChild(li)
    }
};

// CHALLENGE 3

dogBreeds.addEventListener('click', handleClick)

function handleClick(event) {
    if (event.target.style.color === "black") {
        event.target.style.color = "red"
    } else {
        event.target.style.color = "black"
    }
}

// CHALLENGE 4

const dropDown = document.querySelector("#breed-dropdown")

dropDown.addEventListener('change', filteredDogBreeds)

function filteredDogBreeds(event) {
    // filter breeds by letter that was selected (event.target.value)
    const letter = event.target.value
    // redefine breeds to filtered array
    const filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
    // append the new array to appendDogBreeds()
    dogBreeds.innerHTML = ""
    appendDogBreeds(filteredBreeds)

    // dogBreeds.innerHTML = "" -- how to preserve the event listener
}


