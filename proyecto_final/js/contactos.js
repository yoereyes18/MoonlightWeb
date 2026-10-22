const formularioContacto = document.getElementById('formulario-contacto');
const confirmacionContacto = document.getElementById('confirmacion-contacto');
const enviarOtroMensaje = document.getElementById('enviar-otro-mensaje');
const abrirMapaInframen = document.getElementById('abrir-mapa-inframen');
const dialogoMapaInframen = document.getElementById('dialogo-mapa-inframen');

if (abrirMapaInframen && dialogoMapaInframen instanceof HTMLDialogElement) {
    abrirMapaInframen.addEventListener('click', () => {
        dialogoMapaInframen.showModal();
    });

    dialogoMapaInframen.addEventListener('click', (evento) => {
        if (evento.target === dialogoMapaInframen) {
            dialogoMapaInframen.close();
        }
    });
}

if (formularioContacto && confirmacionContacto && enviarOtroMensaje) {
    formularioContacto.addEventListener('submit', (evento) => {
        evento.preventDefault();
        formularioContacto.hidden = true;
        confirmacionContacto.hidden = false;
        confirmacionContacto.querySelector('h3').focus();
    });

    enviarOtroMensaje.addEventListener('click', () => {
        formularioContacto.reset();
        confirmacionContacto.hidden = true;
        formularioContacto.hidden = false;
        formularioContacto.querySelector('input').focus();
    });
}

document.querySelectorAll('a[href="#formulario-contacto"]').forEach((enlace) => {
    enlace.addEventListener('click', () => {
        window.setTimeout(() => {
            document.getElementById('nombre')?.focus({ preventScroll: true });
        }, 350);
    });
});
