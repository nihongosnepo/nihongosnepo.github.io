const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const subject = subjectEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {

        }
    }
    if (email === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {
            sendMail()
        }
    }
}

function reset() {
    nameEl = "";
    emailEl = "";
    subjectEl = "";
    messageEl = "";
    document.querySelector(".name-error").innerText = "";
}