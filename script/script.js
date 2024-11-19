


function mascaraTelefoneFixo(elemento) {
    let valor = elemento.value;

  
    valor = valor.replace(/\D/g, "");


    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");


    valor = valor.substring(0, 14);

    
    elemento.value = valor;
}

document.getElementById('phone').addEventListener('input', function () {
    mascaraTelefoneFixo(this);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault()

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();

if(!name || !email || !phone || !message){
    alert("Por favor, preencha todos os espaços necessarios");
    return;
}

const whatsappNumber = "7988639489"; //<-- coloque seu numero de telefone 
const whatsappMessage = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
document.getElementById("confirmationMessage").innerText = `Obrigado por entrar em contato, ${name}! Em breve responderemos. Desde já agradecemos a atenção! `;
const mailtoLink = `mailto:contato@exemplo.com?subject=Contato&body=${encodeURIComponent(whatsappMessage)}`;
const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappURL, '_blank'); 
});


