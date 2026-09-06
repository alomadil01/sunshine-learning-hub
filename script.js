document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const studentClass = document.getElementById("studentClass").value;
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
`Hello Sunshine Learning Hub!

Parent / Student Name: ${name}
Phone Number: ${phone}
Class: ${studentClass}
Message: ${message}`;

    const whatsappURL =
        `https://wa.me/918011927672?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});