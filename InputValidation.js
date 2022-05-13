'use strict'
const TIME_FOR_SEND_FORM = 5000;
const TEXT_FOR_SEND_FORM = "The form has been submitted";
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("formForSendMessage");
    form.addEventListener('submit', formSend);
    const buttonToSendForm = document.getElementById("contact-BtnForSendTOEmail");

    const inputToCheck = form.querySelectorAll('._req');
    for(let index = 0; index<inputToCheck.length; index++){
        inputToCheck[index].oninput  = function () {
            CheckInputForFormButton();
        }
    }

    async function formSend(e){
        e.preventDefault();
        if (buttonToSendForm.disabled === false ){
            buttonToSendForm.disabled =true;
            buttonToSendForm.classList.remove("SendButtonActive");
            //send form
            form.reset();
            create();
        }
    }

    function CheckInputForFormButton (){
        let error = 0;

        for(let index = 0; index<inputToCheck.length; index++){
            const input = inputToCheck[index];

            if (input.value.trim() === '') {
                error++;
            }else {
                if(input.classList.contains("_email")) {
                    if (!emailCheck(input)) {
                        error++;
                    }
                }

                if(input.classList.contains("_name")) {
                    if (!nameCheck(input)) {
                        error++;
                    }
                }
            }
        }

        if (!error){
            buttonToSendForm.classList.add("SendButtonActive");
            buttonToSendForm.disabled = false;
        }
    }

    function emailCheck(input){
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(input.value.trim());
    }

    function nameCheck(input){
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(input.value.trim());
    }

    function create() {
        let divFormMessage = document.createElement('div');
        divFormMessage.classList.add("sendMessage");
        divFormMessage.textContent= TEXT_FOR_SEND_FORM;
        document.body.append(divFormMessage);

        setTimeout(function () {
            divFormMessage.remove();
        }, TIME_FOR_SEND_FORM)
    }
});
