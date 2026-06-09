function sendWhatsApp() {
    let name = document.querySelector('input[placeholder="Regina wango"]').value;
    let phone = document.querySelector('input[placeholder="254791220239"]').value;
    let service = document.querySelector('select').value;
    let date = document.querySelector('input[type="date"]').value;

    let message = `New Booking!
Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}`;

    let whatsappNumber = "254791220239";
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}