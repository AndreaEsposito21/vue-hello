// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Hello World',
            images: "https://www.worldexcellence.com/wp-content/uploads/2019/06/world-excellence-le-fonti.jpg"
        }
    }
);