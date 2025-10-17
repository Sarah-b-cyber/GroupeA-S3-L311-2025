window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = true;

    init();

    function init(){
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run;
            
            if ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) {
                document.querySelector('.button').setAttribute('class', 
                    document.querySelector('.button').getAttribute('class').replace(' pause', ''));
            } else {
                document.querySelector('.button').setAttribute('class', 
                    document.querySelector('.button').getAttribute('class') + ' pause');
            }
        });

        setInterval(function(){
            if(is_run){
                let oDate = new Date();
                document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML, 
                    document.querySelector('#minutes').innerHTML, 
                    document.querySelector('#seconds').innerHTML
                );
            }
        }, 1000);
    }

    function adjustTimer(timer){
        return (timer < 10 ? '0'+timer : timer.toString());
    }

    function randomHexColor(x, y, z){
        return "rgb(" + Math.floor(parseInt(x)/100 * 256) + "," + Math.floor(parseInt(y)/100 * 256) + "," + Math.floor(parseInt(z)/100 * 256) + ")";
    }
});