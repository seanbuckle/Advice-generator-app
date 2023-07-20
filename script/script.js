function generate(){
    url = "https://api.adviceslip.com/advice"
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let idText = document.getElementById('advice-id');
        let adviceText = document.getElementById('advice');
        let id = data.slip.id
        let advice = data.slip.advice
        idText.innerHTML = id;
        adviceText.innerHTML = advice;
    })
}

window.addEventListener('load', ()=>  {
    generate();
    let btn = document.getElementById('generate')
    btn.addEventListener('click', ()=> {
        generate();
    });
});
