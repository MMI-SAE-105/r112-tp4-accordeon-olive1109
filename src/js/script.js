// *** ACCORDEON ***
const accordeon = document.querySelectorAll(".accordeon > details");

accordeon.forEach((targetAccordeon) => {
    targetAccordeon.addEventListener("click", () => {
        accordeon.forEach((accordeon) => {
            if (accordeon !== targetAccordeon) {
                accordeon.removeAttribute("open");
            }
        });
    });
});