

const allSections = document.querySelectorAll('.section');

const allButtons = document.getElementsByTagName('button');

const header = document.querySelector('.header');
document.getElementsByClassName('btn');


// Creating and inserting elements
// insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookie for improved functionality and analytics';
message.innerHTML = 
'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
header.after(message);


// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click',function (){
    //message.remove();
    message.parentElement.removeChild(message);
})