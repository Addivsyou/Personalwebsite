document.getElementById("bottone").addEventListener("click", function () {

    const password = prompt("Inserisci la password per scaricare il CV:");

    const hashedPassword = CryptoJS.SHA256(password).toString();

    const correctHashedPassword = '2cb25a1331749ed72976226d7454453fc175f8bc130041b13c1c87090374f4c4';

    if (hashedPassword === correctHashedPassword) {

        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=13Gvve7vvckjpIjvr_IPawZj5h6JyZqbd';
        link.download = 'CV.pdf';
        link.click();
    } else {

        alert("Password errata. Riprova.");
    }
});

document.getElementById("bottone1").addEventListener("click", function () {

    const password = prompt("Inserisci la password per scaricare il CV:");

    const hashedPassword = CryptoJS.SHA256(password).toString();

    const correctHashedPassword = '2cb25a1331749ed72976226d7454453fc175f8bc130041b13c1c87090374f4c4';

    if (hashedPassword === correctHashedPassword) {

        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=13Gvve7vvckjpIjvr_IPawZj5h6JyZqbd';
        link.download = 'CV.pdf';
        link.click();
    } else {

        alert("Password errata. Riprova.");
    }
});