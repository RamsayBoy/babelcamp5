// Elements
const [input, button, counters] = document.querySelectorAll('input, button, #counters');

// Functions
function count(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
}

function addCounter(seconds) {
    let c = 0;

    const counter = document.createElement('li');
    counter.textContent = `0/${seconds}`;

    const interval = setInterval(() => {
        c++;
        console.log(`counter: ${c}/${seconds}`)
        counter.textContent = `${c}/${seconds}`;
    }, 1000);
    counters.appendChild(counter);

    function stopCounter() {
        clearInterval(interval);
        counter.remove();
    }

    counter.onclick = stopCounter;

    count(seconds * 1000).then(stopCounter);
}

// Events
input.onkeyup = (e) => {
    const seconds = e.target.value;

    button.textContent = seconds ? `Contar ${seconds} segundos` : 'Contar';

    if (e.key === 'Enter') {
        button.click();
    }
}

button.onclick = () => {
    if (input.value) {
        addCounter(input.value);
    }
    input.focus();
    input.select();
}