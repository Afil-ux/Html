const myFroms = document.forms[0],
myLogin = myFroms.login,
maAge = myFroms.age,
mypass = myFroms.password,
myprice = myFroms.price,
out = document.querySelector('h2'),
textnumber = document.querySelector('span')

// myFroms.login.addEventListener('focus', () =>{
//     myFroms.login.placeholder = ''
//     myFroms.login.style.backgroundColor = "coral"
// })
// myFroms.login.addEventListener('blur', () =>{
//     myFroms.login.placeholder = 'name'
//     myFroms.login.style.backgroundColor = "white"
// })
// ============================================
// mypass.focus()

// let x = () => mypass.blur()
// setTimeout(x,5000)

// myLogin,addEventListener('change', () => {
// out.textContent = `${myLogin.value}`
// })

// myLogin.addEventListener('input', () => {
//  out.textContent = `${myLogin.value}`
// })// 

// myprice.addEventListener('input', () => {
//     textnumber.textContent =myprice.value
// })

myLogin.addEventListener('paste', (event) => {
    event.preventDefault()
out.textContent = 'Незя'
})

mypass.addEventListener('copy',(event)=> {
    event.preventDefault()
    out.textContent = 'Незя копи'
})