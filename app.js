if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function Calculate()
{
    
    const u= parseFloat(document.getElementById("u").value);
    const i= parseFloat(document.getElementById("i").value);
    const o = parseFloat(document.getElementById("o").value);

    
    let vysledek;

    

    if(isNaN(u) && !isNaN(o) && !isNaN(i))
    {
        console.log("fjdfjkf");
        vysledek = o*i;
        document.getElementById('vysledek').innerHTML = vysledek;
        
    }
    else if(isNaN(o) && !isNaN(u) && !isNaN(i))
    {
        vysledek = u/i;
        document.getElementById('vysledek').innerHTML = vysledek;
    }
    else if(isNaN(i) && !isNaN(o) && !isNaN(u))
    {
        vysledek = u/o;
        document.getElementById('vysledek').innerHTML = vysledek;
    }
    else if(isNaN(o) && isNaN(i) && isNaN(u) )
    {
        vysledek = "nelze";
        document.getElementById('vysledek').innerHTML = vysledek;
    }
    else
    {
        vysledek = "nelze";
        document.getElementById('vysledek').innerHTML = vysledek;
    }



}