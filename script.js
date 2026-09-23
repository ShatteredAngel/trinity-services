/* =========================================================
   TRINITY SERVICES
   Main JavaScript
   ========================================================= */


/* ================= LOCATION ================= */

const locationButton =
    document.getElementById("locationButton");

const locationMenu =
    document.getElementById("locationMenu");

const currentLocation =
    document.getElementById("currentLocation");

const currentFlag =
    document.getElementById("currentFlag");


locationButton.addEventListener("click", function (event) {

    event.stopPropagation();

    locationMenu.classList.toggle("active");

    locationButton.setAttribute(
        "aria-expanded",
        locationMenu.classList.contains("active")
    );

});


document.querySelectorAll(
    ".location-menu button"
).forEach(function (button) {

    button.addEventListener("click", function () {

        currentLocation.textContent =
            this.dataset.location;

        currentFlag.textContent =
            this.dataset.flag;

        locationMenu.classList.remove("active");

        locationButton.setAttribute(
            "aria-expanded",
            "false"
        );

        localStorage.setItem(
            "trinity-location",
            this.dataset.location
        );

        localStorage.setItem(
            "trinity-flag",
            this.dataset.flag
        );

    });

});


/* ================= LANGUAGE ================= */

const translations = {

    en: {

        navServices: "What we do",
        navIndustries: "Industries",
        navInsights: "Insights",
        navAbout: "Who we are",
        contactButton: "Contact",

        heroLabel: "TRINITY SERVICES",

        heroTitle:
            "Technology that moves business forward.",

        heroText:
            "We build software, platforms and professional services for organisations operating where technology and business complexity meet.",

        heroButton:
            "Explore our services →",

        introLabel:
            "WHAT WE DO",

        introTitle:
            "We turn complex technology challenges into practical solutions.",

        introText:
            "Trinity Services works with organisations that depend on reliable technology, strong engineering and effective project delivery.",

        introText2:
            "From software development and developer portals to telecom engineering, oil & gas services and project management, we help teams move from ideas to results.",

        servicesLabel:
            "OUR SERVICES",

        service1Title:
            "Software development",

        service1Text:
            "Custom software, internal tools, automation, integrations and applications built around your organisation's needs.",

        service2Title:
            "Developer portals",

        service2Text:
            "Developer-focused platforms that make APIs, documentation, services and technical resources easier to discover and use.",

        service3Title:
            "Professional services",

        service3Text:
            "Technical and professional expertise for telecommunications, oil & gas and technology organisations.",

        service4Title:
            "Project management",

        service4Text:
            "Structured project delivery that connects technical teams, business requirements, timelines and outcomes.",

        learnMore:
            "Learn more →",

        featureLabel:
            "ENGINEERING",

        featureTitle:
            "Engineering solutions for industries where complexity matters.",

        featureText:
            "Technology becomes most valuable when it solves a real operational problem. We combine engineering thinking with industry knowledge to create solutions that work in the real world.",

        featureButton:
            "Explore industries →",

        industriesLabel:
            "INDUSTRIES",

        industriesTitle:
            "Experience where technology meets industry.",

        industry1Title:
            "Telecommunications",

        industry1Text:
            "Network automation, monitoring, software platforms, data processing and operational technology for telecommunications environments.",

        industry2Title:
            "Oil & gas",

        industry2Text:
            "Technology and professional services supporting complex operational environments across the energy sector.",

        industry3Title:
            "Technology",

        industry3Text:
            "Digital products, software engineering, integrations and technology solutions for modern organisations.",

        insightsLabel:
            "INSIGHTS & WORK",

        insightsTitle:
            "Ideas, technology and practical delivery.",

        insight1Title:
            "Building better network operations through automation",

        insight1Text:
            "How automation can reduce repetitive operational work and help technical teams focus on higher-value problems.",

        insight2Title:
            "From internal tools to scalable platforms",

        insight2Text:
            "Turning practical internal requirements into maintainable software platforms.",

        insight3Title:
            "Making complex projects easier to deliver",

        insight3Text:
            "Connecting people, technology and business goals through structured project delivery.",

        readMore:
            "Read more →",

        aboutLabel:
            "WHO WE ARE",

        aboutTitle:
            "A technology services company built around practical expertise.",

        aboutText:
            "Trinity Services brings together software development, technical consulting and project delivery to help organisations solve difficult technology problems.",

        aboutText2:
            "We believe good technology should be useful, understandable and built to last.",

        contactLabel:
            "GET IN TOUCH",

        contactTitle:
            "Let's build something useful.",

        contactText:
            "Tell us what you're working on and we'll start the conversation.",

        namePlaceholder:
            "Your name",

        emailPlaceholder:
            "Email address",

        companyPlaceholder:
            "Company",

        messagePlaceholder:
            "Tell us about your project",

        sendMessage:
            "Send message →",

        footerText:
            "Technology services for complex industries.",

        footerExplore:
            "Explore",

        footerContact:
            "Contact",

        footerRights:
            "All rights reserved."

    },


    no: {

        navServices:
            "Hva vi gjør",

        navIndustries:
            "Bransjer",

        navInsights:
            "Innsikt",

        navAbout:
            "Om oss",

        contactButton:
            "Kontakt",

        heroLabel:
            "TRINITY SERVICES",

        heroTitle:
            "Teknologi som driver virksomheten fremover.",

        heroText:
            "Vi utvikler programvare, plattformer og profesjonelle tjenester for organisasjoner der teknologi og forretningsmessig kompleksitet møtes.",

        heroButton:
            "Utforsk våre tjenester →",

        introLabel:
            "HVA VI GJØR",

        introTitle:
            "Vi gjør komplekse teknologiske utfordringer om til praktiske løsninger.",

        introText:
            "Trinity Services samarbeider med organisasjoner som er avhengige av pålitelig teknologi, solid utvikling og effektiv prosjektgjennomføring.",

        introText2:
            "Fra programvareutvikling og utviklerportaler til telekommunikasjon, olje og gass og prosjektledelse hjelper vi team med å gå fra idé til resultat.",

        servicesLabel:
            "VÅRE TJENESTER",

        service1Title:
            "Programvareutvikling",

        service1Text:
            "Skreddersydd programvare, interne verktøy, automatisering, integrasjoner og applikasjoner utviklet rundt organisasjonens behov.",

        service2Title:
            "Utviklerportaler",

        service2Text:
            "Plattformer for utviklere som gjør API-er, dokumentasjon, tjenester og tekniske ressurser enklere å finne og bruke.",

        service3Title:
            "Profesjonelle tjenester",

        service3Text:
            "Teknisk og profesjonell ekspertise for telekommunikasjon, olje og gass og teknologibedrifter.",

        service4Title:
            "Prosjektledelse",

        service4Text:
            "Strukturert prosjektgjennomføring som kobler sammen tekniske team, forretningskrav, tidsplaner og resultater.",

        learnMore:
            "Les mer →",

        featureLabel:
            "UTVIKLING",

        featureTitle:
            "Teknologiske løsninger for bransjer der kompleksitet betyr noe.",

        featureText:
            "Teknologi skaper størst verdi når den løser et reelt operativt problem. Vi kombinerer teknisk kompetanse med bransjeforståelse for å skape løsninger som fungerer i praksis.",

        featureButton:
            "Utforsk bransjer →",

        industriesLabel:
            "BRANSJER",

        industriesTitle:
            "Erfaring der teknologi møter bransje.",

        industry1Title:
            "Telekommunikasjon",

        industry1Text:
            "Nettverksautomatisering, overvåking, programvareplattformer, databehandling og operativ teknologi for telekommunikasjonsmiljøer.",

        industry2Title:
            "Olje og gass",

        industry2Text:
            "Teknologi og profesjonelle tjenester som støtter komplekse operative miljøer i energisektoren.",

        industry3Title:
            "Teknologi",

        industry3Text:
            "Digitale produkter, programvareutvikling, integrasjoner og teknologiløsninger for moderne organisasjoner.",

        insightsLabel:
            "INNSIKT OG ARBEID",

        insightsTitle:
            "Ideer, teknologi og praktisk gjennomføring.",

        insight1Title:
            "Bedre nettverksdrift gjennom automatisering",

        insight1Text:
            "Hvordan automatisering kan redusere repetitivt operativt arbeid og hjelpe tekniske team med å fokusere på viktigere oppgaver.",

        insight2Title:
            "Fra interne verktøy til skalerbare plattformer",

        insight2Text:
            "Hvordan praktiske interne behov kan utvikles til vedlikeholdbare programvareplattformer.",

        insight3Title:
            "Enklere gjennomføring av komplekse prosjekter",

        insight3Text:
            "Vi kobler mennesker, teknologi og forretningsmål gjennom strukturert prosjektgjennomføring.",

        readMore:
            "Les mer →",

        aboutLabel:
            "OM OSS",

        aboutTitle:
            "Et teknologiserviceselskap bygget rundt praktisk ekspertise.",

        aboutText:
            "Trinity Services kombinerer programvareutvikling, teknisk rådgivning og prosjektgjennomføring for å hjelpe organisasjoner med å løse krevende teknologiske utfordringer.",

        aboutText2:
            "Vi mener god teknologi skal være nyttig, forståelig og bygget for å vare.",

        contactLabel:
            "TA KONTAKT",

        contactTitle:
            "La oss bygge noe nyttig.",

        contactText:
            "Fortell oss hva du jobber med, så starter vi samtalen.",

        namePlaceholder:
            "Navn",

        emailPlaceholder:
            "E-postadresse",

        companyPlaceholder:
            "Bedrift",

        messagePlaceholder:
            "Fortell oss om prosjektet ditt",

        sendMessage:
            "Send melding →",

        footerText:
            "Teknologitjenester for komplekse bransjer.",

        footerExplore:
            "Utforsk",

        footerContact:
            "Kontakt",

        footerRights:
            "Alle rettigheter forbeholdt."

    }

};


/* ================= APPLY LANGUAGE ================= */

function applyLanguage(language) {

    const selectedLanguage =
        translations[language] || translations.en;

    document.documentElement.lang =
        language === "no" ? "no" : "en";


    document.querySelectorAll(
        "[data-i18n]"
    ).forEach(function (element) {

        const key =
            element.dataset.i18n;

        if (selectedLanguage[key]) {

            element.textContent =
                selectedLanguage[key];

        }

    });


    /* Form placeholders */

    document.querySelectorAll(
        "[data-placeholder]"
    ).forEach(function (element) {

        const type =
            element.dataset.placeholder;

        let translationKey;

        if (type === "name") {
            translationKey = "namePlaceholder";
        }

        if (type === "email") {
            translationKey = "emailPlaceholder";
        }

        if (type === "company") {
            translationKey = "companyPlaceholder";
        }

        if (type === "message") {
            translationKey = "messagePlaceholder";
        }

        if (translationKey) {

            element.placeholder =
                selectedLanguage[translationKey];

        }

    });


    document.getElementById(
        "currentLanguage"
    ).textContent =
        language === "no" ? "NO" : "EN";


    localStorage.setItem(
        "trinity-language",
        language
    );

}


/* ================= LANGUAGE MENU ================= */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");


languageButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        languageMenu.classList.toggle("active");

        languageButton.setAttribute(
            "aria-expanded",
            languageMenu.classList.contains("active")
        );

    }
);


document.querySelectorAll(
    ".language-menu button"
).forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            applyLanguage(
                this.dataset.language
            );

            languageMenu.classList.remove(
                "active"
            );

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* ================= CLOSE MENUS ================= */

document.addEventListener(
    "click",
    function (event) {

        if (!event.target.closest(".location")) {

            locationMenu.classList.remove(
                "active"
            );

            locationButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (!event.target.closest(".language")) {

            languageMenu.classList.remove(
                "active"
            );

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* ================= THEME ================= */

const themeToggle =
    document.getElementById("themeToggle");


function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.remove(
            "dark-mode"
        );

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent = "☾";

    } else {

        document.body.classList.remove(
            "light-mode"
        );

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.textContent = "☀";

    }

    localStorage.setItem(
        "trinity-theme",
        theme
    );

}


/*
    DARK MODE IS THE DEFAULT.
    If the user has never selected a theme,
    dark mode is used.
*/

const savedTheme =
    localStorage.getItem("trinity-theme");


if (savedTheme === "light") {

    applyTheme("light");

} else {

    applyTheme("dark");

}


themeToggle.addEventListener(
    "click",
    function () {

        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );

        applyTheme(
            isDark ? "light" : "dark"
        );

    }
);


/* ================= RESTORE LOCATION ================= */

const savedLocation =
    localStorage.getItem("trinity-location");

const savedFlag =
    localStorage.getItem("trinity-flag");


if (savedLocation && savedFlag) {

    currentLocation.textContent =
        savedLocation;

    currentFlag.textContent =
        savedFlag;

}


/* ================= RESTORE LANGUAGE ================= */

const savedLanguage =
    localStorage.getItem("trinity-language");


if (savedLanguage) {

    applyLanguage(savedLanguage);

} else {

    applyLanguage("en");

}


/* ================= YEAR ================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* ================= CONTACT FORM ================= */

document.getElementById(
    "contactForm"
).addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;

        const email =
            document.getElementById(
                "email"
            ).value;

        const company =
            document.getElementById(
                "company"
            ).value;

        const message =
            document.getElementById(
                "message"
            ).value;


        const subject =
            encodeURIComponent(
                "Trinity Services project enquiry"
            );


        const body =
            encodeURIComponent(
`Name: ${name}

Email: ${email}

Company: ${company}

Project:

${message}`
            );


        window.location.href =
            `mailto:hello@trinityservices.com?subject=${subject}&body=${body}`;

    }
);


/* ================= MOBILE MENU ================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileNav =
    document.getElementById(
        "mobileNav"
    );


mobileMenuButton.addEventListener(
    "click",
    function () {

        mobileNav.classList.toggle(
            "active"
        );

    }
);


/* Close mobile menu after clicking a link */

document.querySelectorAll(
    ".mobile-nav a"
).forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            mobileNav.classList.remove(
                "active"
            );

        }
    );

});