window.onload = function () {
    // Check if the user is using a mobile device
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Display a message based on the device type
    var messageElement = document.getElementById("deviceMessage");

    if (!isMobile) {
        // You can add mobile-specific content here if needed
        var container = document.createElement("div");
        container.classList.add("flex", "flex-col", "w-full", "xl:w-2/5", "justify-center", "lg:items-start", "overflow-y-hidden");

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
        container.classList.add("flex", "flex-col", "w-full", "xl:w-2/5", "justify-center", "lg:items-start", "overflow-y-hidden");

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
        webLink.href = "https://pro-app-storage.s3.amazonaws.com/builds/d170ebb9-77ee-4db1-8b3a-badc79fab86e-release.apk?AWSAccessKeyId=ASIAUUWEHETWXR7ANV6S&Signature=XouAX2ctUqiKRp2IhkAG77Pv310%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBbOTjmP4G2U2imzbpKZUUv5qAX5VBoW1ldH2FMwJIYBAiAm7oFLIWaM0XJOpSnv1sBHMZmNxe7pNoqkWg67B3UBmCqkBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDMxOTMxMjgzMTcyNSIMwQo7KHACfyOWBOj3KvgDY6LjLgRBH7v%2BSHxb%2FsrFZF2vQZhtf7XvKCyWejvKVzmdnCDHsO78PvSHgC8TDzGJQS%2BGfjsu1u6BWUQ4ZYi31WquUdjTn4IV8HOoUn4pjVo7Xp8Td3njMeNmrf%2FEYBJdeUstd0lMQQ%2Fn2BU2AoKbzfopT8lca7WZeWV5ERGNdWSULK4LwGuOnWFcUwfkmxQbHQFDUi8J4C4r79jj1LTxHqoOTml%2BWkVbKVBVcdLL37bRLF99UtHHBLcy2Ods5rnNbo0sumJjuiPsrRLsOi%2Bwp08bdstErrGOIB5MtOmQEcfp9bixBaDYdZWBss%2Bg07GxND89%2Fc%2FXQ1RvGt89WiZ7tpW28ap6X%2BKL8%2FY1ApOb02bQ4g4Uxuv7M0iKFLi0NMVkyLVQMEwGSAeO3qA4S5WuWWGbGsaB0E6x3VCUPfhDRThX8ogV0yDrTcDUNux9iyB9Wsf30OqQaYL%2BwDNIJFXoNT8RZx9W3lYVR7cvmgMb6iMJW8TKwHyc4P5fc5hbsE8NxCfS2xViGKoeTGXrcDLiUDVZMJtxT14M08sPiaxec%2FR8JRdbOyuzUzWKEJhQQReYrz7DhVPlGr1EFALHYZyFrMNZsnQPfUpAjPuA%2Fbf3MteHdMGvwuoHlFPKCtDP5CnZjNJNgemoArXaD9lUJW0ae4uUzKCcFHuXMLCZnKsGOqcBzRKNP8ftqFLu2nVtt51JNioS60jl3wvQTntjFO%2BYYveJ6CEwa3yILCrQGRh5K0yH8jg8jVWw3SVftxyWx83KhZiKk0hur6wuToDsrBFqNVoXwj4b5Z%2FkSgd%2BtMhZoKp3OoSirmMmQUsigBq%2FgFdFX6WlYfvS6GkgSo%2FPkMJde3fEpY03OPmMuKwRjGOyg5Rb8kAKmD7d0lrYQH63uxyuxoM9SWZTMlw%3D&Expires=1701262703";
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
