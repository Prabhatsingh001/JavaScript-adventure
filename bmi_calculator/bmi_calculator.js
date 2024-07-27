const form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    // value comes in string
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === "" || height<0 || isNaN(height)){
        result.innerHTML = "please give a valid height";
    }

})