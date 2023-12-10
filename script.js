window.onload = function () {
    // Check if the user is using a mobile device
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Display a message based on the device type
    var messageElement = document.getElementById("deviceMessage");

    if (!isMobile) {
        // You can add mobile-specific content here if needed
        var container = document.createElement("div");

        var h1 = document.createElement("h1");
        h1.classList.add("my-4", "text-3xl", "md:text-5xl", "text-purple-800", "font-bold", "leading-tight", "text-center", "md:text-left", "slide-in-bottom-h1");
        h1.innerText = "Registra tu asistencia de manera rápida y confiable.";

        var subtitle = document.createElement("p");
        subtitle.classList.add("leading-normal", "text-base", "md:text-2xl", "mb-8", "text-center", "md:text-left", "slide-in-bottom-subtitle");
        subtitle.innerText = "!RegistrApp puedes usarla en cualquier dispositivo!";

        var webText = document.createElement("p");
        webText.classList.add("text-blue-400", "font-bold", "pb-8", "lg:pb-6", "text-center", "md:text-left", "fade-in");
        webText.innerText = "Visita el sitio web:";

        var webLink = document.createElement("a");
        webLink.href = "https://merry-chebakia-e83e15.netlify.app/";
        webLink.type = "button";
        webLink.classList.add("slide-in-bottom-subtitle", "bounce-top-icons", "text-white", "bg-gradient-to-br", "from-purple-600", "to-blue-500", "hover:bg-gradient-to-bl", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "dark:focus:ring-blue-800", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "me-2", "mb-2", "fade-in");
        webLink.innerText = "RegistrAPP Web";

        var linkContainer = document.createElement("div");
        linkContainer.classList.add("flex", "w-full", "justify-center", "md:justify-start", "pb-24", "lg:pb-0", "fade-in");
        linkContainer.appendChild(webLink);

        container.appendChild(h1);
        container.appendChild(subtitle);
        container.appendChild(webText);
        container.appendChild(linkContainer);

        // Append the dynamically created elements to the document
        messageElement.appendChild(container);
    } else {
        // Create HTML elements dynamically
        var container = document.createElement("div");

        var h1 = document.createElement("h1");
        h1.classList.add("my-4", "text-3xl", "md:text-5xl", "text-purple-800", "font-bold", "leading-tight", "text-center", "md:text-left", "slide-in-bottom-h1");
        h1.innerText = "Registra tu asistencia de manera rápida y confiable.";

        var subtitle = document.createElement("p");
        subtitle.classList.add("leading-normal", "text-base", "md:text-2xl", "mb-8", "text-center", "md:text-left", "slide-in-bottom-subtitle");
        subtitle.innerText = "!RegistrApp puedes usarla en cualquier dispositivo!";

        var webText = document.createElement("p");
        webText.classList.add("text-blue-400", "font-bold", "pb-8", "lg:pb-6", "text-center", "md:text-left", "fade-in");
        webText.innerText = "Descarga la APP:";

        var webLink = document.createElement("a");
        webLink.href = "https://geriiiii.github.io/registrapp-web/apk-release.apk";
        webLink.type = "button";
        webLink.classList.add("slide-in-bottom-subtitle", "bounce-top-icons", "text-white", "bg-gradient-to-br", "from-purple-600", "to-blue-500", "hover:bg-gradient-to-bl", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "dark:focus:ring-blue-800", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "me-2", "mb-2", "fade-in");
        webLink.innerText = "RegistrAPP Android";

        var linkContainer = document.createElement("div");
        linkContainer.classList.add("flex", "w-full", "justify-center", "md:justify-start", "pb-24", "lg:pb-0", "fade-in");
        linkContainer.appendChild(webLink);

        container.appendChild(h1);
        container.appendChild(subtitle);
        container.appendChild(webText);
        container.appendChild(linkContainer);

        // Append the dynamically created elements to the document
        messageElement.appendChild(container);
    }
};
