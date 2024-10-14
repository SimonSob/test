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
    const u= document.getElementById("u").value;
    const a= document.getElementById("a").value;
    const o= document.getElementById("o").value;

    let res;

    if(u == null)
    {
        u = r*
        document.getElementById('vysledek').innerText = vysledek;
    }
    else if(r == null)
    {
        r = u/i
        document.getElementById('vysledek').innerText = vysledek;
    }
    else if(i == null)
    {
        i = u/r
        document.getElementById('vysledek').innerText = vysledek;
    }
    else
    {
        res = "nelze";
    }
}