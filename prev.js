window.onload = function () {
    // Funzione che esegue lo scroll dopo che tutti gli elementi sono caricati
    function scrollToElementWithDelay() {
        if (window.location.hash) {
            var elementId = window.location.hash.substring(1); // Ottiene l'ID dall'hash
            var element = document.getElementById(elementId);

            if (element) {
                // Aggiungi un ritardo di 500ms per dare il tempo a tutti gli elementi di caricarsi
                setTimeout(function () {
                    var offset = 100; // Offset per tenere conto dell'intestazione o del layout
                    var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    var offsetPosition = elementPosition - offset;

                    // Esegui lo scroll con animazione fluida
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 500); // Puoi regolare il ritardo in base al caricamento della pagina
            }
        }
    }

    scrollToElementWithDelay();
};

document.addEventListener('scroll', function () {
    const rows = document.querySelectorAll('.service-row, .service-text, .service-image img');
    const windowHeight = window.innerHeight;

    rows.forEach(row => {
        const positionFromTop = row.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            row.classList.add('in-view');
        }
    });
});