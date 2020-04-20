window.onload = ()=>{
    let name = document.querySelector('#inp')
    let lastName = document.querySelector('#inp1')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let btn = document.querySelector('#save')
    btn.addEventListener('click',()=>{
        let regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
        if (regex.test(email.value)== false) {
            alert('Please enter a valid Email')
            return false
        }
        const obj ={
            firstName:name.value,
            lName:lastName.value,
            emailValue:email.value,
            passwordValue:password.value

        } 
        localStorage.setItem('userData',JSON.stringify(obj))

    })
}