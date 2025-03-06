const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons)
// console.log(body)

buttons.forEach( (button) =>  {
    // console.log(button)
    button.addEventListener('click' , (event) => {
        // console.log(event)
        // console.log(event.target)
        if (event.target.id === 'red') {
            body.style.backgroundColor = 'red'
        } else if (event.target.id === 'green') {
            body.style.backgroundColor = 'green'
        } else if (event.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        } else if (event.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }
    })
})