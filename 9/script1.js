document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const value = document.getElementById('value');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');
    const increaseBtn = document.getElementById('increase');

    function updateValue() {
        value.textContent = count;
        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = '#222';
        }
    }

    decreaseBtn.addEventListener('click', () => {
        count--;
        updateValue();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateValue();
    });

    increaseBtn.addEventListener('click', () => {
        count++;
        updateValue();
    });
});
