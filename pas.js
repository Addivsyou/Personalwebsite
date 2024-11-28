document.getElementById("bottone").addEventListener("click", function () {

    const password = prompt("Inserisci la password per scaricare il CV:");

    const hashedPassword = CryptoJS.SHA256(password).toString();

    const correctHashedPassword = '2cb25a1331749ed72976226d7454453fc175f8bc130041b13c1c87090374f4c4';

    if (hashedPassword === correctHashedPassword) {

        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1EY3SBLv7uu_Wlq6oKzovlr2aVz0yjJ1S/view?usp=drive_link';
        link.download = 'CV Adnan.pdf';
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
        link.href = 'https://drive.google.com/file/d/1EY3SBLv7uu_Wlq6oKzovlr2aVz0yjJ1S/view?usp=drive_link';
        link.download = 'CV Adnan Said.pdf';
        link.click();
    } else {

        alert("Password errata. Riprova.");
    }
});
