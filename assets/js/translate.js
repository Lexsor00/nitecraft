// Este objeto simula tu archivo JSON de traducciones
const translations = {
    es: {
        feedback: "Feedback",
        nav_home: "INICIO",
        nav_blog: "BLOG",
        nav_guides: "GUÍAS",
        nav_store: "TIENDA",
        news_title: "Noticias Nitecraft",
        news_subtitle: "¡Mantente al día con los últimos blogs y actualizaciones!",

        // Ultima Noticia
        news_item_title: "0.0.1 - Modelaje 3D",
        news_item_tag: "Desarrollo",
        news_item_date: "11 de Mar, 2026",
        news_item_excerpt: "Hemos comenzado a desarrollar un pilar esencial para NiteCraft: todo el ecosistema de modelos 3D. Desde NPCs y Mobs hasta objetos personalizados. Estamos trabajando cuidando cada detalle para completar con éxito la primera fase de nuestro universo.",


        news_btn: "VER TODOS LOS BLOGS",
        toast_copy: "¡IP copiada al portapapeles!",


        // Equipo
        team_title: "Conoce al Equipo",
        team_subtitle: "¡Descubre a las personas que hacen posible NiteCraft!",
        team_role_lexsor: "CONFIGURADOR Y MODELADOR",
        team_desc_lexsor: "¡Hola! Soy Lexsor00. Me encargo tanto de configurar los sistemas internos del servidor como de diseñar y dar vida a los modelos 3D que verás en el juego. Trabajo día y noche para que cada bloque, ítem y mecánica de NiteCraft sea una experiencia única.",
        team_role_arnau: "MANAGER",
        team_desc_arnau: "¡Buenas! Soy Arnauetcacawet. Coordino al equipo de Staff y gestiono el día a día del servidor. Mi objetivo es que la comunidad tenga la mejor experiencia posible y que todo funcione como un reloj suizo.",

        // Social
        social_title: "¡Seamos Sociales!",
        social_desc: "Aquí en NiteCraft creemos que la comunicación es la clave para una comunidad increíble. Por eso, valoramos enormemente nuestro Discord y la forma en que nos permite conectar con nuestras personas favoritas: ¡tú! ¡Únete a nosotros y vamos a crear nuestro universo juntos!",
        social_btn: "ÚNETE A NUESTRO DISCORD",

        // Footer
        footer_copy: "NiteCraft. Todos los derechos reservados.",
        footer_mojang: "No estamos afiliados ni respaldados de ninguna manera por Mojang, AB.",


        // --- TEXTOS NUEVOS PARA BLOG.HTML ---
        blog_page_title: "Blog de Desarrollo",
        blog_page_subtitle: "Todas las novedades y actualizaciones sobre Nitecraft.",



        // BLOG 3D MODELING
        article_toc_1: "¿Quiénes somos?",
        article_toc_2: "El mundo 3D",
        article_toc_3: "Siguientes pasos",
        article_h2_1: "¿Quiénes somos?",
        article_h2_2: "El mundo 3D",
        article_h2_3: "Siguientes pasos",
        article_p1: "¡Hola a todos! Hoy os traemos el primer vistazo oficial al desarrollo interno de NiteCraft. Llevamos semanas trabajando en las sombras para sentar las bases de lo que será una experiencia única, y todo empieza con el ecosistema visual.",
        article_p2: "Hemos comenzado a desarrollar un pilar esencial para NiteCraft: todo el ecosistema de modelos 3D. Desde NPCs y Mobs hasta objetos personalizados. Estamos trabajando cuidando cada detalle para completar con éxito la primera fase de nuestro universo. ¡Queremos que cada ítem que tengas en la mano se sienta especial!",
        article_p3: "Muy pronto revelaremos más detalles sobre las animaciones y cómo estos modelos interactuarán con el mundo. ¡Uníos al Discord para no perderos los spoilers exclusivos!",
        article_p4: "Nuestra hoja de ruta está clara. Primero, modelos. Segundo, texturas. Y finalmente, mecánicas custom. Mantente atento a futuras actualizaciones, porque lo que se viene es espectacular.",
        article_img_cap_1: "Prototipo del personaje principal de NiteCraft.",
        article_img_cap_2: "Personaje principal de NiteCraft",
    },
    en: {
        feedback: "Feedback",
        nav_home: "HOME",
        nav_blog: "BLOG",
        nav_guides: "GUIDES",
        nav_store: "STORE",
        news_title: "Nitecraft News",
        news_subtitle: "Stay up to date with the latest blogs & updates!",

        // Ultima Noticia
        news_item_title: "0.0.1 - 3D Modeling",
        news_item_tag: "Development",
        news_item_date: "Mar 11th, 2026",
        news_item_excerpt: "We have started developing an essential pillar for NiteCraft: the entire 3D modeling ecosystem. From NPCs and Mobs to custom items. We are working down to the smallest detail to successfully complete the first phase of our universe.",


        news_btn: "VIEW ALL BLOGS",
        toast_copy: "Copied IP to clipboard!",

        // Equipo
        team_title: "Meet The Team",
        team_subtitle: "Learn about the people who make NiteCraft amazing!",
        team_role_lexsor: "CONFIGURATOR & 3D MODELER",
        team_desc_lexsor: "Hey! I'm Lexsor00. I take care of both configuring the server's internal systems and designing the 3D models you'll see in-game. I work hard to make every block, item, and mechanic in NiteCraft a unique experience.",
        team_role_arnau: "MANAGER",
        team_desc_arnau: "Hi there! I'm Arnauetcacawet. I coordinate the Staff team and manage the day-to-day running of the server. My goal is to ensure the community has the best possible experience and everything runs smoothly.",
        
        // Social
        social_title: "Let's Be Social!",
        social_desc: "Here on NiteCraft we think communication is the key to an amazing community. Because of that, we heavily value our Discord and the way it allows us to connect with our favourite people ever you! Come join us, and let's create our universe together!",
        social_btn: "JOIN OUR DISCORD",

        // Footer
        footer_copy: "NiteCraft. All rights reserved.",
        footer_mojang: "We are in no way affiliated with or endorsed by Mojang, AB.",


        // --- TEXTOS NUEVOS PARA BLOG.HTML ---
        blog_page_title: "Development Blog",
        blog_page_subtitle: "All the news and updates about Nitecraft.",


        // BLOG 3D MODELING
        article_toc_1: "Who Are We?",
        article_toc_2: "The 3D World",
        article_toc_3: "Next steps",
        article_h2_1: "Who Are We?",
        article_h2_2: "The 3D World",
        article_h2_3: "Next steps",
        article_p1: "Hello everyone! Today we bring you the first official look at NiteCraft's internal development. We've been working in the shadows for weeks to lay the foundations for what will be a unique experience, and it all starts with the visual ecosystem.",
        article_p2: "We have started developing an essential pillar for NiteCraft: the entire 3D modeling ecosystem. From NPCs and Mobs to custom items. We are working down to the smallest detail to successfully complete the first phase of our universe. We want every item you hold in your hand to feel special!",
        article_p3: "Very soon we will reveal more details about the animations and how these models will interact with the world. Join our Discord so you don't miss any exclusive spoilers!",
        article_p4: "Our roadmap is clear. First, models. Second, textures. And finally, custom mechanics. Stay tuned for future updates, because what's coming is spectacular.",
        article_img_cap_1: "Prototype of the main character of NiteCraft.",
        article_img_cap_2: "Main character of NiteCraft.",
    }
};

let currentLang = localStorage.getItem('nitecraft_lang') || 'es';

// Función para cambiar de idioma
function toggleLanguage() {
    // Alternamos el valor
    if (currentLang === 'es') {
        currentLang = 'en';
    } else {
        currentLang = 'es';
    }

    // ¡NUEVO! Guardamos la elección en el navegador del usuario
    localStorage.setItem('nitecraft_lang', currentLang);

    // Actualizamos todo visualmente
    updateLanguageUI();
    applyTranslations();
}

function updateLanguageUI() {
    const langIcon = document.getElementById('lang-icon');
    const langText = document.getElementById('lang-text');

    // Por si acaso el script corre antes de que existan los botones
    if (!langIcon || !langText) return; 

    if (currentLang === 'en') {
        langIcon.className = 'fi fi-us';
        langText.textContent = 'EN';
    } else {
        langIcon.className = 'fi fi-es';
        langText.textContent = 'ES';
    }
}

// Función que recorre el HTML y aplica los textos correctos
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Opcional: Aplicar las traducciones iniciales por si acaso (aunque ya están en el HTML)
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    applyTranslations();

});
