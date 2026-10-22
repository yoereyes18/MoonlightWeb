const ofertasLista = document.querySelector('.ofertas-lista');
const ofertaSiguiente = document.getElementById('oferta-next');
const ofertaAnterior = document.getElementById('oferta-prev');

if (ofertasLista && ofertaSiguiente && ofertaAnterior) {
    let cambiandoOferta = false;

    const cambiarOferta = (direccion) => {
        if (cambiandoOferta) return;

        cambiandoOferta = true;
        ofertasLista.classList.add('cambiando');

        window.setTimeout(() => {
            const ofertas = ofertasLista.querySelectorAll('.oferta-card');
            if (direccion === 'siguiente') {
                ofertasLista.append(ofertas[0]);
            } else {
                ofertasLista.prepend(ofertas[ofertas.length - 1]);
            }

            window.requestAnimationFrame(() => {
                ofertasLista.classList.remove('cambiando');
                window.setTimeout(() => {
                    cambiandoOferta = false;
                }, 650);
            });
        }, 50);
    };

    ofertaSiguiente.addEventListener('click', () => cambiarOferta('siguiente'));
    ofertaAnterior.addEventListener('click', () => cambiarOferta('anterior'));
}

document.querySelectorAll('.oferta-leer-mas').forEach((boton) => {
    boton.addEventListener('click', () => {
        const dialogo = document.getElementById(boton.dataset.dialog);
        if (dialogo instanceof HTMLDialogElement) {
            dialogo.showModal();
        }
    });
});
