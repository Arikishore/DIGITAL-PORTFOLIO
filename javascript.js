javascript
//You can add interactivity using javascript if needed
//for example,you can create a form to submit contact information

//Example:Handle form submission 
const  contactform=document.queryselector('contact-form');

contactform.addEventListener('submit', function (event)
{
    event.preventDefault();
//Handle form submission logic here
    alert('Form submitted');
    
});