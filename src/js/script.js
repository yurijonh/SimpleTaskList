const tasks = document.querySelector('input');
const submit = document.querySelector('button');
const result = document.querySelector('.result');

submit.onclick = function(){
    result.innerHTML += `<p style="text-align: center;">${tasks.value}</p>`;
    //result.innerHTML += `</br>`;
    console.log(tasks.value);
}
