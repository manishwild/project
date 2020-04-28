window.onload = ()=>{
    let name = document.querySelector('#inp')
    let lastName = document.querySelector('#inp1')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let btn = document.querySelector('#save')
    let storeArr = []
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
        obj.forEach(element => {
            storeArr.push(element)
            console.log(element);
            

    })
    
    
})
name.addEventListener('keypress',function(e) {
        console.log(e)
        if (e.which == 13) {
            lastName.focus()
        }
    })
    lastName.addEventListener('keypress',function(e) {
        console.log(e)
        if (e.which == 13) {
            email.focus()
        }
    })
    email.addEventListener('keypress',function(e) {
        console.log(e)
        if (e.which == 13) {
            password.focus()
        }
    })
    password.addEventListener('keypress',function(e) {
        console.log(e)
        if (e.which == 13) {
            btn.focus()
        }
    })
}