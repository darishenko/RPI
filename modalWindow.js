function show_modal_window() {
  let background = document.createElement('div');
  background.id = "modal_background";
  document.querySelector('#Page').appendChild(background); 

  let modal = document.createElement('div');
  modal.className = "modal";
  background.appendChild(modal);

  let header = document.createElement('div');
  header.className = "modal_header";
  modal.appendChild(header);

  let header_text = document.createElement('span');
  header_text.textContent = "Contact Us";
  header_text.className = "header_text";
  header.appendChild(header_text);

  let close = document.createElement('button');
  close.className = "btn_close";
  close.textContent = "x";  
  close.onclick = close_modal;
  header.appendChild(close);  

  let contact_inf = document.createElement('div');
  contact_inf.className= 'contact_inf';
  modal.appendChild(contact_inf);  

  let icons =  document.createElement('ul');
  icons.className = "modal_contact_icons";
  contact_inf.appendChild(icons);

  let icon1 =  document.createElement('li');
  icon1.className = "contact_icons1";
  icons.appendChild(icon1);

  let icon2 =  document.createElement('li');
  icon2.className = "contact_icons2";
  icons.appendChild(icon2);

  let icon3 =  document.createElement('li'); 
  icon3.className = "contact_icons3";
  icons.appendChild(icon3);

  let icon1_a =  document.createElement('a');
  icon1_a.href = "https://yandex.by/maps/147/kharkiv/house/prospekt_yuriia_haharina_43/Z08YdAJmS0MCQFpjfXV2dXVgYQ==/?ll=36.256266%2C49.974936&z=16.28";
  icon1_a.target = "_blank";
  icon1.appendChild(icon1_a);

  let icon2_a =  document.createElement('a');
  icon2_a.href = "https://web.telegram.org/k/";
  icon2_a.target = "_blank";
  icon2.appendChild(icon2_a);

  let icon3_a =  document.createElement('a');
  icon3_a.href = "https://accounts.google.com/signin/v2/identifier?hl=ru&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  icon3_a.target = "_blank";
  icon3.appendChild(icon3_a);

  let icon1_i = document.createElement('i');
  icon1_i.className = "fa fa-map-marker";
  icon1_i.ariaHidden = "true";
  icon1_a.appendChild(icon1_i);

  let icon2_i = document.createElement('i');
  icon2_i.className = "fa fa-phone";
  icon2_i.ariaHidden = "true";
  icon2_a.appendChild(icon2_i);

  let icon3_i = document.createElement('i');
  icon3_i.className = "fa fa-envelope";
  icon3_i.ariaHidden = "true";
  icon3_a.appendChild(icon3_i);

  let contact_inf_li = document.createElement('div');
  contact_inf_li.className= 'contact_inf_li';
  contact_inf.appendChild(contact_inf_li);

  let address = document.createElement("p");
  address.className = "modal_contact_text";
  address.textContent = "43 gagarina street, kharkov, ukraine";
  contact_inf_li.appendChild(address);

  let phone = document.createElement("p");
  phone.className = "modal_contact_text";
  phone.textContent = "+38 (057) 777-05-05";
  contact_inf_li.appendChild(phone);

  let email = document.createElement("p");
  email.className = "modal_contact_text";
  email.textContent = "mynameisskokov@gmail.com";  
  contact_inf_li.appendChild(email);

  document.body.style.overflow = "hidden";
}

function close_modal() {
  document.querySelector("#modal_background").remove();
  document.body.style.overflow = "";
}

document.querySelector("#ContactUsBtn").addEventListener("click", show_modal_window);

document.querySelector("#Page").onclick = function(e)
{
  if(e.target.closest(".modal") == null){
    close_modal(); 
  }
}
