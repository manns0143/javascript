const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value.trim())
    const weight = parseInt(document.querySelector('#weight').value.trim())
    const res = document.querySelector('#results')
    // console.log(height, weight)

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `<span>invalid height: ${height}</span>`
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `<span>invalid weight: ${weight}</span>`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // results.innerHTML = `<span>your bmi is: ${bmi}</span>`
        if (bmi < 18.6) {
            results.innerHTML = `<span>your bmi is: ${bmi}. you are under weight</span>`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>your bmi is: ${bmi}. you are in the normal range</span>`
        } else {
            results.innerHTML = `<span>your bmi is: ${bmi}. you are over weight</span>`
        }
    }
})