const loginDialog = document.querySelector("#login-dialog");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector(".site-actions .btn-login");

if (loginDialog && loginForm && loginButton instanceof HTMLButtonElement) {
    const closeButton = loginDialog.querySelector(".login-cerrar");

    loginButton.addEventListener("click", () => loginDialog.showModal());
    closeButton?.addEventListener("click", () => loginDialog.close());

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        loginForm.reset();
        loginDialog.close();
    });
}
