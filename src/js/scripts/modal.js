// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".js-block-catalog-btn");

    triggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            const item = trigger.closest(".js-block-catalog-item");

            const name = item.querySelector(".block-catalog__item-name").textContent.trim();
            const imageSrc = item.querySelector(".block-catalog__item-image img").getAttribute("src");

            const hiddenBlock = item.querySelector(".js-block-catalog-text-hide");
            const hiddenText = hiddenBlock ? hiddenBlock.innerHTML : "";

            document.querySelector(".js-modal-name").textContent = name;
            document.querySelector(".js-modal-image img").setAttribute("src", imageSrc);
            document.querySelector(".js-modal-content").innerHTML = hiddenText;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const videoTriggers = document.querySelectorAll(".block-video__image");
    const modalIframe = document.querySelector('[data-graph-target="modal-video"] iframe');

    videoTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const videoSrc = trigger.getAttribute("data-video-src");
            modalIframe.setAttribute("src", videoSrc);
        });
    });

    const modalClose = document.querySelector('[data-graph-target="modal-video"] .js-modal-close');
    modalClose.addEventListener("click", () => {
        modalIframe.setAttribute("src", "");
    });
});


