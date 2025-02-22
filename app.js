document.addEventListener('DOMContentLoaded', () => {
    let numberElement = document.getElementById('number');
    let number = parseInt(numberElement.innerText);
    const touch = document.getElementById('touch');
    const reset = document.getElementById('reset');

    touch.addEventListener('click', () => {
        number++;
        numberElement.innerText = number;
    });

    reset.addEventListener('click', () => {
        number = 0; // مقدار را به صفر بازنشانی می‌کنیم
        numberElement.innerText = number;
    });
});
