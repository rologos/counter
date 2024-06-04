//set initial count
let count = 0;

//select value and buttons
const value = document.querySelectorAll('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(   (x) => 

    x.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }
        console.log(value);


        value.textContent = count;

        }
    )
);
