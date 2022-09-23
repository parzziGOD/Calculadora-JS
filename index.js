    window.addEventListener('load', ()=> {
        const display = document.querySelector('.calculator-display');
        const keypadBtn = document.getElementsByClassName('keypad-btn')

        const keypadBtnArray = Array.from(keypadBtn);

        keypadBtnArray.forEach( (button) => {
            button.addEventListener('click', ()=> {
                console.log(button.innerHTML)
            })
        })
    });
