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


// =========================================
// CARRUSEL DEL EQUIPO
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Base de datos del equipo (¡Ahora con colores!)
    const teamMembers = [
        {
            name: "Lexsor00",
            roleKey: "team_role_lexsor", 
            descKey: "team_desc_lexsor", 
            render: "assets/img/render-lexsor00.png",
            colorClass: "color-red"
        },
        {
            name: "Arnauetcacawet",
            roleKey: "team_role_arnau",
            descKey: "team_desc_arnau",
            render: "assets/img/render-arnau.png",
            colorClass: "color-orange" 
        }
    ];

    let currentTeamIndex = 0;
    let teamInterval;

    const btnNext = document.getElementById('next-member');
    const btnPrev = document.getElementById('prev-member');
    const avatars = document.querySelectorAll('.avatar-head');
    const progressBar = document.getElementById('team-progress');

    if (btnNext && btnPrev) {
        
        function updateTeamMember(index) {
            const member = teamMembers[index];
            const renderImg = document.getElementById('member-render');
            const nameElem = document.getElementById('member-name');
            const roleElem = document.getElementById('member-role');
            
            // Efecto fade-out en la imagen
            renderImg.style.opacity = 0;
            
            setTimeout(() => {
                // Cambiar textos
                nameElem.textContent = member.name;
                roleElem.setAttribute('data-i18n', member.roleKey);
                document.getElementById('member-desc').setAttribute('data-i18n', member.descKey);
                
                // === NUEVO: Cambiar el color del rango ===
                nameElem.className = 'member-name ' + member.colorClass;
                roleElem.className = 'role-badge ' + member.colorClass;
                
                // Cambiar imagen
                renderImg.src = member.render;
                renderImg.alt = member.name + " Render";
                renderImg.style.opacity = 1;

                if (typeof applyTranslations === 'function') {
                    applyTranslations();
                }
            }, 300);

            // Actualizar cabecitas
            avatars.forEach((avatar, i) => {
                if (i === index) avatar.classList.add('active');
                else avatar.classList.remove('active');
            });

            // Reiniciar la animación de la barra
            progressBar.style.animation = 'none';
            progressBar.offsetHeight; 
            progressBar.style.animation = 'progress-anim 10s linear forwards';
        }

        function nextMember() {
            currentTeamIndex = (currentTeamIndex + 1) % teamMembers.length;
            updateTeamMember(currentTeamIndex);
            resetInterval();
        }

        function prevMember() {
            currentTeamIndex = (currentTeamIndex - 1 + teamMembers.length) % teamMembers.length;
            updateTeamMember(currentTeamIndex);
            resetInterval();
        }

        function resetInterval() {
            clearInterval(teamInterval);
            teamInterval = setInterval(nextMember, 10000); 
        }

        btnNext.addEventListener('click', nextMember);
        btnPrev.addEventListener('click', prevMember);

        avatars.forEach(avatar => {
            avatar.addEventListener('click', () => {
                currentTeamIndex = parseInt(avatar.getAttribute('data-index'));
                updateTeamMember(currentTeamIndex);
                resetInterval();
            });
        });

        progressBar.style.animation = 'progress-anim 10s linear forwards';
        resetInterval();
    }
});
