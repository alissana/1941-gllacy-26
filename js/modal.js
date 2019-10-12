function documentReady() {
    var link = document.querySelector(".contacts-action"); 
    var popup = document.querySelector(".feedback");
    var close = popup.querySelector(".feedback-close-button");
    var form = popup.querySelector(".feedback-form");
    var name = popup.querySelector("[name=yourname]");
    var email = popup.querySelector("[name=email]");
    var comment = popup.querySelector("[name=comment]");

    var isStorageSupport = true;
    var storage;

    try {
        storage = localStorage.getItem("name");
    } catch (err) {
        isStorageSupport = false;
    } 

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("feedback-show");
        if (storage) {
            name.value = storage;
            email.focus();
        } else {
            if (isStorageSupport) {
                name.focus();
            }
        }
    }); 

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
    });

    form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value || !comment.value) {
            evt.preventDefault();
            popup.classList.add("feedback-error"); 
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("feedback-error"); 
        } else {
            if (isStorageSupport) {
            localStorage.setItem("name", name.value);
            }
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("feedback-show")) {
                evt.preventDefault();
                popup.classList.remove("feedback-show");
                popup.classList.remove("feedback-error");
            }
        }
    }); 
}

document.addEventListener("DOMContentLoaded", documentReady);