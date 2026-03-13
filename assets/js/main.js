function copyIP() {
    const ipText = "Soon!!"; 
    
    navigator.clipboard.writeText(ipText).then(() => {
        const toast = document.getElementById("toast");
        
        // ¡NUEVO! Obtenemos el texto traducido del objeto translations
        toast.textContent = translations[currentLang]['toast_copy'];
        
        toast.classList.add("show");
        
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error('Error al copiar la IP: ', err);
    });
}

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        // Añadimos una clase para desvanecer suavemente (vía CSS)
        loaderWrapper.style.opacity = '0';
        loaderWrapper.style.visibility = 'hidden';

        // Opcional: Eliminar el elemento del DOM después de la animación
        setTimeout(() => {
            loaderWrapper.remove();
        }, 500); // 500ms coincide con la transición CSS
    }
});

// Articulos
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.article-section');
    const tocLinks = document.querySelectorAll('.toc-link');

    // Opciones del observador de scroll
    const observerOptions = {
        root: null, 
        rootMargin: '-100px 0px -60% 0px', 
        threshold: 0 
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Quitamos 'active' de todos
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Añadimos 'active' al que toca
                const activeLink = document.querySelector(`.toc-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


// NAV
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.querySelector('.navbar');

    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', () => {
            // Activa o desactiva la clase que muestra el menú
            navbar.classList.toggle('active');
            
            // Cambiamos el icono (de rayitas a la cruz)
            const icon = mobileMenuBtn.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
});