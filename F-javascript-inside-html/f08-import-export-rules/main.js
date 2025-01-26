
import greetings from './hello.js'
import { changeHeader, redColor } from './change-header.js'

// global elements are available inside modules:

document.body.style.backgroundColor = '#111'
document.body.style.color = `#ccc`
document.body.style.fontFamily = 'sans-serif'
document.body.style.display = 'flex'


// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style


console.log(greetings('John'))

const header = changeHeader('I changed the header...')
header.style.color = redColor
