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

    let vysledek;

    if(u == NaN && r != NaN && i != NaN)
    {
        vysledek = r*i
        document.getElementById("vysledek").innerHTML = vysledek;
    }
    else if(r == NaN && u != NaN && i != NaN)
    {
        vysledek = u/i
        document.getElementById("vysledek").innerHTML = vysledek;
    }
    else if(i == NaN && r != NaN && u != NaN)
    {
        vysledek = u/r
        document.getElementById("vysledek").innerHTML = vysledek;
    }
    else
    {
        vysledek = "nelze";
    }
}