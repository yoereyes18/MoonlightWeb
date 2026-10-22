const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const tiltItems = [
    ...document.querySelectorAll(".nosotros-imagen"),
].map((area) => ({ area, element: area.querySelector("img") }))
    .concat(
        [...document.querySelectorAll(".Banner > img, .servicio-banner")]
            .map((element) => ({ area: element, element }))
    );

if (canTilt.matches && !reducedMotion.matches) {
    tiltItems.forEach(({ area, element }) => {
        if (!element) return;

        area.addEventListener("pointermove", (event) => {
            const bounds = area.getBoundingClientRect();
            const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
            const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

            element.style.setProperty("--tilt-x", `${vertical * -28}deg`);
            element.style.setProperty("--tilt-y", `${horizontal * 28}deg`);
        });

        area.addEventListener("pointerleave", () => {
            element.style.setProperty("--tilt-x", "0deg");
            element.style.setProperty("--tilt-y", "0deg");
        });
    });
}