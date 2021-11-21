clickEvent = () => {
    console.log('click event triggered');
}

selected = () => {
    console.log('selected');
    document.getElementById('btn').style.display = 'none';
}

showBtn = () => {
    document.getElementById('btn').style.display = 'block';
}
hideBtn = () => {
    document.getElementById('btn').style.display = 'none';
}

showForm = () =>{
    console.log('show form');
  let registrationForm =  document.getElementById('registration-form');
  registrationForm.classList.remove('registration-form-hide');
  registrationForm.classList.add('registration-form-show');
  document.getElementById('btn').style.display = 'none';
}
// on mouse over
// on mouse out 
// keydown event
// keyup event
// onchange

showName = () => {
    let name  = document.getElementById('name').value;
    document.getElementById('nameDetails').innerHTML = name;
}


register = () => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let alertSuccess = document.getElementById('alert-success');
    let alertDanger = document.getElementById('alert-danger');
    if(name.value == '' || email.value == ''){
        alertDanger.classList.remove('alert-danger-hide');
        alertDanger.classList.add('alert-danger-show');
        setTimeout(() => {
            
            alertDanger.classList.remove('alert-danger-show');
            alertDanger.classList.add('alert-danger-hide');
        } , 2000);
    }
    else{

        name.value = '';
        email.value = '';
        alertSuccess.classList.remove('alert-success-hide');
        alertSuccess.classList.add('alert-success-show');
        setTimeout(() => {

            alertSuccess.classList.remove('alert-success-show');
            alertSuccess.classList.add('alert-success-hide');
        } , 2000);
    }
}