// script.js
(function () {
    'use strict';

    // ==================================================================
    // TRADUZIONI
    // ==================================================================
    const translations = {
        it: {
            'lang.current': 'IT',
            'title': '☕ Chi offre il caffè? · La tazza magica',
            'h1': 'Chi offre il caffè?',
            'subtitle.prefix': 'Aggiungi i nomi, agita la',
            'subtitle.highlight': 'tazza magica',
            'subtitle.suffix': 'e scopri il malcapitato di turno',
            'input.placeholder': 'Scrivi un nome... (es. Mario, Luisa, Carlo)',
            'btn.add': '➕ Aggiungi',
            'list.title': '📌 Partecipanti',
            'list.empty': 'Nessun partecipante... aggiungi almeno 2 nomi per iniziare! 👇',
            'counter.zero': '0 persone',
            'counter.one': '1 persona',
            'counter.many': '{n} persone',
            'btn.sorteggia': '🎲 Agita la tazza e sorteggia',
            'btn.mixing': '☕ Mescolo...',
            'btn.reset': '🔄 Reset',
            'result.label': '☕ OFFRE IL CAFFÈ',
            'result.toOne': '☕ Offre il caffè a {name}! 🎉',
            'result.toMany': '☕ Offre il caffè a: {names} 🎉',
            'rules.summary': 'Regole sensate (da rispettare)',
            'rules.1': '<strong>Minimo 2 partecipanti</strong> per poter sorteggiare: non si offre il caffè da soli (a meno che non siate masochisti 😅).',
            'rules.2': '<strong>Nomi unici</strong>: niente doppioni, altrimenti il sorteggio diventa truccato.',
            'rules.3': '<strong>Nomi non vuoti</strong> e massimo 30 caratteri: evita simboli strani o emoji giganti.',
            'rules.4': '<strong>Un solo sorteggio per turno</strong>: dopo aver estratto, i partecipanti restano gli stessi. Puoi resettare o aggiungere nuovi nomi.',
            'rules.5': '<strong>Il sorteggio è casuale</strong> e avviene con <code>crypto.getRandomValues</code> per una casualità più equa (dove supportato).',
            'rules.6': '<strong>Chi esce paga il caffè a tutti gli altri</strong>. Nessuna scusa! (Se siete in 2, il perdente offre all\'altro).',
            'rules.7': '<strong>Reset</strong> pulisce tutta la lista e ricomincia da zero — usalo con parsimonia.',
            'footer.text': '💡 Regola d\'oro: chi vince il sorteggio non paga... mai.',
            'alert.emptyName': '⚠️ Dai, scrivi un nome!',
            'alert.duplicate': '⚠️ "{name}" c\'è già!',
            'alert.tooLong': 'Il nome non può superare i 30 caratteri.',
            'alert.needTwo': 'Servono almeno 2 partecipanti per sorteggiare chi offre il caffè! ☕',
            'confirm.reset': 'Vuoi davvero resettare tutto? La lista verrà svuotata. 🧹',
            'lang.menuLabel': 'Seleziona lingua'
        },
        en: {
            'lang.current': 'EN',
            'title': '☕ Who buys the coffee? · The magic cup',
            'h1': 'Who buys the coffee?',
            'subtitle.prefix': 'Add the names, shake the',
            'subtitle.highlight': 'magic cup',
            'subtitle.suffix': 'and find out the unlucky one',
            'input.placeholder': 'Type a name... (e.g. Mario, Luisa, Carlo)',
            'btn.add': '➕ Add',
            'list.title': '📌 Participants',
            'list.empty': 'No participants yet... add at least 2 names to start! 👇',
            'counter.zero': '0 people',
            'counter.one': '1 person',
            'counter.many': '{n} people',
            'btn.sorteggia': '🎲 Shake the cup and draw',
            'btn.mixing': '☕ Mixing...',
            'btn.reset': '🔄 Reset',
            'result.label': '☕ BUYS THE COFFEE',
            'result.toOne': '☕ Buys coffee for {name}! 🎉',
            'result.toMany': '☕ Buys coffee for: {names} 🎉',
            'rules.summary': 'Sensible rules (to be respected)',
            'rules.1': '<strong>At least 2 participants</strong> to draw: you can\'t buy coffee for yourself (unless you\'re a masochist 😅).',
            'rules.2': '<strong>Unique names</strong>: no duplicates, or the draw becomes rigged.',
            'rules.3': '<strong>Non-empty names</strong> and max 30 characters: avoid weird symbols or giant emoji.',
            'rules.4': '<strong>One draw per round</strong>: after drawing, participants stay the same. You can reset or add new names.',
            'rules.5': '<strong>The draw is random</strong> using <code>crypto.getRandomValues</code> for fairer randomness (where supported).',
            'rules.6': '<strong>Whoever is picked buys coffee for everyone else</strong>. No excuses! (If there are 2 of you, the loser buys for the other).',
            'rules.7': '<strong>Reset</strong> clears the whole list and starts from scratch — use sparingly.',
            'footer.text': '💡 Golden rule: whoever wins the draw never pays... ever.',
            'alert.emptyName': '⚠️ Come on, type a name!',
            'alert.duplicate': '⚠️ "{name}" is already in the list!',
            'alert.tooLong': 'The name cannot exceed 30 characters.',
            'alert.needTwo': 'You need at least 2 participants to draw who buys the coffee! ☕',
            'confirm.reset': 'Do you really want to reset everything? The list will be cleared. 🧹',
            'lang.menuLabel': 'Select language'
        },
        es: {
            'lang.current': 'ES',
            'title': '☕ ¿Quién invita al café? · La taza mágica',
            'h1': '¿Quién invita al café?',
            'subtitle.prefix': 'Añade los nombres, agita la',
            'subtitle.highlight': 'taza mágica',
            'subtitle.suffix': 'y descubre al desafortunado de turno',
            'input.placeholder': 'Escribe un nombre... (ej. Mario, Luisa, Carlo)',
            'btn.add': '➕ Añadir',
            'list.title': '📌 Participantes',
            'list.empty': 'Ningún participante... ¡añade al menos 2 nombres para empezar! 👇',
            'counter.zero': '0 personas',
            'counter.one': '1 persona',
            'counter.many': '{n} personas',
            'btn.sorteggia': '🎲 Agita la taza y sortea',
            'btn.mixing': '☕ Mezclando...',
            'btn.reset': '🔄 Reiniciar',
            'result.label': '☕ INVITA AL CAFÉ',
            'result.toOne': '☕ ¡Invita al café a {name}! 🎉',
            'result.toMany': '☕ Invita al café a: {names} 🎉',
            'rules.summary': 'Reglas sensatas (a respetar)',
            'rules.1': '<strong>Mínimo 2 participantes</strong> para sortear: no se invita al café uno mismo (a menos que seas masoquista 😅).',
            'rules.2': '<strong>Nombres únicos</strong>: sin duplicados, o el sorteo queda amañado.',
            'rules.3': '<strong>Nombres no vacíos</strong> y máximo 30 caracteres: evita símbolos raros o emojis gigantes.',
            'rules.4': '<strong>Un solo sorteo por turno</strong>: tras el sorteo, los participantes siguen siendo los mismos. Puedes reiniciar o añadir nuevos nombres.',
            'rules.5': '<strong>El sorteo es aleatorio</strong> y usa <code>crypto.getRandomValues</code> para una aleatoriedad más justa (donde esté disponible).',
            'rules.6': '<strong>Quien sale paga el café a todos los demás</strong>. ¡Sin excusas! (Si sois 2, el perdedor invita al otro).',
            'rules.7': '<strong>Reiniciar</strong> limpia toda la lista y empieza de cero — úsalo con moderación.',
            'footer.text': '💡 Regla de oro: quien gana el sorteo no paga... nunca.',
            'alert.emptyName': '⚠️ ¡Vamos, escribe un nombre!',
            'alert.duplicate': '⚠️ ¡"{name}" ya está en la lista!',
            'alert.tooLong': 'El nombre no puede superar los 30 caracteres.',
            'alert.needTwo': '¡Necesitas al menos 2 participantes para sortear quién invita al café! ☕',
            'confirm.reset': '¿Seguro que quieres reiniciar todo? La lista se vaciará. 🧹',
            'lang.menuLabel': 'Seleccionar idioma'
        },
        fr: {
            'lang.current': 'FR',
            'title': '☕ Qui offre le café ? · La tasse magique',
            'h1': 'Qui offre le café ?',
            'subtitle.prefix': 'Ajoute les noms, secoue la',
            'subtitle.highlight': 'tasse magique',
            'subtitle.suffix': 'et découvre le malheureux du tour',
            'input.placeholder': 'Écris un nom... (ex. Mario, Luisa, Carlo)',
            'btn.add': '➕ Ajouter',
            'list.title': '📌 Participants',
            'list.empty': 'Aucun participant... ajoute au moins 2 noms pour commencer ! 👇',
            'counter.zero': '0 personne',
            'counter.one': '1 personne',
            'counter.many': '{n} personnes',
            'btn.sorteggia': '🎲 Secoue la tasse et tire au sort',
            'btn.mixing': '☕ Je mélange...',
            'btn.reset': '🔄 Réinitialiser',
            'result.label': '☕ OFFRE LE CAFÉ',
            'result.toOne': '☕ Offre le café à {name} ! 🎉',
            'result.toMany': '☕ Offre le café à : {names} 🎉',
            'rules.summary': 'Règles sensées (à respecter)',
            'rules.1': '<strong>Au moins 2 participants</strong> pour tirer au sort : on n\'offre pas le café à soi-même (sauf si vous êtes masochiste 😅).',
            'rules.2': '<strong>Noms uniques</strong> : pas de doublons, sinon le tirage est truqué.',
            'rules.3': '<strong>Noms non vides</strong> et max 30 caractères : évite les symboles bizarres ou les emojis géants.',
            'rules.4': '<strong>Un seul tirage par tour</strong> : après le tirage, les participants restent les mêmes. Tu peux réinitialiser ou ajouter de nouveaux noms.',
            'rules.5': '<strong>Le tirage est aléatoire</strong> et utilise <code>crypto.getRandomValues</code> pour plus d\'équité (si disponible).',
            'rules.6': '<strong>Celui qui sort paie le café à tous les autres</strong>. Aucune excuse ! (Si vous êtes 2, le perdant offre à l\'autre).',
            'rules.7': '<strong>Réinitialiser</strong> vide toute la liste et recommence de zéro — à utiliser avec parcimonie.',
            'footer.text': '💡 Règle d\'or : celui qui gagne le tirage ne paie... jamais.',
            'alert.emptyName': '⚠️ Allez, écris un nom !',
            'alert.duplicate': '⚠️ "{name}" est déjà dans la liste !',
            'alert.tooLong': 'Le nom ne peut pas dépasser 30 caractères.',
            'alert.needTwo': 'Il faut au moins 2 participants pour tirer au sort qui offre le café ! ☕',
            'confirm.reset': 'Veux-tu vraiment tout réinitialiser ? La liste sera vidée. 🧹',
            'lang.menuLabel': 'Choisir la langue'
        },
        de: {
            'lang.current': 'DE',
            'title': '☕ Wer gibt den Kaffee aus? · Die magische Tasse',
            'h1': 'Wer gibt den Kaffee aus?',
            'subtitle.prefix': 'Füge die Namen hinzu, schüttle die',
            'subtitle.highlight': 'magische Tasse',
            'subtitle.suffix': 'und finde den Pechvogel des Tages',
            'input.placeholder': 'Namen eingeben... (z.B. Mario, Luisa, Carlo)',
            'btn.add': '➕ Hinzufügen',
            'list.title': '📌 Teilnehmer',
            'list.empty': 'Noch keine Teilnehmer... füge mindestens 2 Namen hinzu! 👇',
            'counter.zero': '0 Personen',
            'counter.one': '1 Person',
            'counter.many': '{n} Personen',
            'btn.sorteggia': '🎲 Tasse schütteln und auslosen',
            'btn.mixing': '☕ Ich mische...',
            'btn.reset': '🔄 Zurücksetzen',
            'result.label': '☕ GIBT DEN KAFFEE AUS',
            'result.toOne': '☕ Gibt den Kaffee für {name} aus! 🎉',
            'result.toMany': '☕ Gibt den Kaffee aus für: {names} 🎉',
            'rules.summary': 'Vernünftige Regeln (bitte beachten)',
            'rules.1': '<strong>Mindestens 2 Teilnehmer</strong> zum Auslosen: man gibt den Kaffee nicht sich selbst aus (es sei denn, man ist Masochist 😅).',
            'rules.2': '<strong>Eindeutige Namen</strong>: keine Doppelungen, sonst ist die Auslosung manipuliert.',
            'rules.3': '<strong>Namen nicht leer</strong> und maximal 30 Zeichen: vermeide seltsame Symbole oder riesige Emojis.',
            'rules.4': '<strong>Eine Auslosung pro Runde</strong>: nach der Ziehung bleiben die Teilnehmer gleich. Du kannst zurücksetzen oder neue Namen hinzufügen.',
            'rules.5': '<strong>Die Auslosung ist zufällig</strong> und nutzt <code>crypto.getRandomValues</code> für fairere Zufälligkeit (wo verfügbar).',
            'rules.6': '<strong>Wer gezogen wird, gibt allen anderen einen Kaffee aus</strong>. Keine Ausreden! (Bei 2 Personen gibt der Verlierer dem anderen einen aus).',
            'rules.7': '<strong>Zurücksetzen</strong> leert die gesamte Liste und startet von vorne — sparsam verwenden.',
            'footer.text': '💡 Goldene Regel: Wer die Auslosung gewinnt, zahlt... niemals.',
            'alert.emptyName': '⚠️ Komm schon, gib einen Namen ein!',
            'alert.duplicate': '⚠️ "{name}" ist bereits in der Liste!',
            'alert.tooLong': 'Der Name darf höchstens 30 Zeichen lang sein.',
            'alert.needTwo': 'Du brauchst mindestens 2 Teilnehmer, um auszulosen, wer den Kaffee ausgibt! ☕',
            'confirm.reset': 'Willst du wirklich alles zurücksetzen? Die Liste wird geleert. 🧹',
            'lang.menuLabel': 'Sprache auswählen'
        },
        pt: {
            'lang.current': 'PT',
            'title': '☕ Quem paga o café? · A caneca mágica',
            'h1': 'Quem paga o café?',
            'subtitle.prefix': 'Adiciona os nomes, agita a',
            'subtitle.highlight': 'caneca mágica',
            'subtitle.suffix': 'e descobre o azarado da vez',
            'input.placeholder': 'Escreve um nome... (ex. Mario, Luisa, Carlo)',
            'btn.add': '➕ Adicionar',
            'list.title': '📌 Participantes',
            'list.empty': 'Nenhum participante... adiciona pelo menos 2 nomes para começar! 👇',
            'counter.zero': '0 pessoas',
            'counter.one': '1 pessoa',
            'counter.many': '{n} pessoas',
            'btn.sorteggia': '🎲 Agita a caneca e sorteia',
            'btn.mixing': '☕ A misturar...',
            'btn.reset': '🔄 Reiniciar',
            'result.label': '☕ PAGA O CAFÉ',
            'result.toOne': '☕ Paga o café a {name}! 🎉',
            'result.toMany': '☕ Paga o café a: {names} 🎉',
            'rules.summary': 'Regras sensatas (a respeitar)',
            'rules.1': '<strong>Mínimo 2 participantes</strong> para sortear: não se paga o café a si mesmo (a não ser que sejas masoquista 😅).',
            'rules.2': '<strong>Nomes únicos</strong>: sem duplicados, senão o sorteio fica viciado.',
            'rules.3': '<strong>Nomes não vazios</strong> e máximo 30 caracteres: evita símbolos estranhos ou emojis gigantes.',
            'rules.4': '<strong>Um sorteio por ronda</strong>: após o sorteio, os participantes mantêm-se os mesmos. Podes reiniciar ou adicionar novos nomes.',
            'rules.5': '<strong>O sorteio é aleatório</strong> e usa <code>crypto.getRandomValues</code> para uma aleatoriedade mais justa (onde disponível).',
            'rules.6': '<strong>Quem sai paga o café a todos os outros</strong>. Sem desculpas! (Se forem 2, o perdedor paga ao outro).',
            'rules.7': '<strong>Reiniciar</strong> limpa toda a lista e recomeça do zero — usa com moderação.',
            'footer.text': '💡 Regra de ouro: quem ganha o sorteio não paga... nunca.',
            'alert.emptyName': '⚠️ Vá lá, escreve um nome!',
            'alert.duplicate': '⚠️ "{name}" já está na lista!',
            'alert.tooLong': 'O nome não pode exceder 30 caracteres.',
            'alert.needTwo': 'Precisas de pelo menos 2 participantes para sortear quem paga o café! ☕',
            'confirm.reset': 'Queres mesmo reiniciar tudo? A lista será limpa. 🧹',
            'lang.menuLabel': 'Selecionar idioma'
        }
    };

    const RTL_LANGS = [];
    const SUPPORTED_LANGS = Object.keys(translations);
    const LANG_FLAGS = { it: '🇮🇹', en: '🇬🇧', es: '🇪🇸', fr: '🇫🇷', de: '🇩🇪', pt: '🇵🇹' };

    // ==================================================================
    // STATO
    // ==================================================================
    let partecipanti = [];
    let currentLang = 'it';
    let lastResult = null;

    // ==================================================================
    // RIFERIMENTI DOM
    // ==================================================================
    const html = document.documentElement;
    const nomeInput = document.getElementById('nomeInput');
    const addBtn = document.getElementById('addBtn');
    const listaPartecipanti = document.getElementById('listaPartecipanti');
    const contatore = document.getElementById('contatore');
    const emptyMessage = document.getElementById('emptyMessage');
    const sorteggiaBtn = document.getElementById('sorteggiaBtn');
    const resetBtn = document.getElementById('resetBtn');
    const risultatoBox = document.getElementById('risultatoBox');
    const risultatoNome = document.getElementById('risultatoNome');
    const risultatoDettaglio = document.getElementById('risultatoDettaglio');
    const tazza = document.getElementById('tazza');
    const tazzaScena = tazza.parentElement;
    const container = document.querySelector('.container');
    const regoleList = document.getElementById('regoleList');

    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');
    const langCurrentFlag = langToggle.querySelector('.flag');
    const langCurrentCode = langToggle.querySelector('.lang-code');
    const langOptions = document.querySelectorAll('.lang-option');

    // ==================================================================
    // TEMA / DARK MODE (automatico via CSS, aggiorniamo solo il meta)
    // ==================================================================
    function updateThemeColor() {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const color = isDark ? '#1a120b' : '#f5d6b3';
        let meta = document.querySelector('meta[name="theme-color"]:not([media])');
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'theme-color');
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', color);
        document.querySelectorAll('meta[name="theme-color"][media]').forEach(function (m) {
            m.remove();
        });
    }

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeQuery.addEventListener) {
        darkModeQuery.addEventListener('change', updateThemeColor);
    } else if (darkModeQuery.addListener) {
        darkModeQuery.addListener(updateThemeColor);
    }
    updateThemeColor();

    // ==================================================================
    // i18n
    // ==================================================================
    function t(key, vars) {
        const dict = translations[currentLang] || translations.it;
        let str = dict[key] !== undefined ? dict[key] : (translations.it[key] || key);
        if (vars) {
            Object.keys(vars).forEach(function (k) {
                str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
            });
        }
        return str;
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        document.title = t('title');

        if (regoleList) {
            regoleList.innerHTML = '';
            for (let i = 1; i <= 7; i++) {
                const li = document.createElement('li');
                li.innerHTML = t('rules.' + i);
                regoleList.appendChild(li);
            }
        }

        aggiornaContatore();

        if (lastResult) {
            renderRisultato();
        }

        langCurrentFlag.textContent = LANG_FLAGS[currentLang] || '🌐';
        langCurrentCode.textContent = t('lang.current');
        langToggle.setAttribute('aria-label', t('lang.menuLabel'));
        langMenu.setAttribute('aria-label', t('lang.menuLabel'));

        langOptions.forEach(function (btn) {
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        html.setAttribute('lang', currentLang);
        html.setAttribute('dir', RTL_LANGS.indexOf(currentLang) !== -1 ? 'rtl' : 'ltr');
    }

    function aggiornaContatore() {
        const count = partecipanti.length;
        let txt;
        if (count === 0) txt = t('counter.zero');
        else if (count === 1) txt = t('counter.one');
        else txt = t('counter.many', { n: count });
        contatore.textContent = txt;
    }

    function renderRisultato() {
        if (!lastResult) return;
        risultatoNome.textContent = lastResult.estratto;
        if (lastResult.altri.length === 1) {
            risultatoDettaglio.textContent = t('result.toOne', { name: lastResult.altri[0] });
        } else {
            risultatoDettaglio.textContent = t('result.toMany', { names: lastResult.altri.join(', ') });
        }
    }

    // ==================================================================
    // RILEVAMENTO LINGUA
    // ==================================================================
    function detectLanguage() {
        const candidates = [];
        if (navigator.languages && navigator.languages.length) {
            candidates.push.apply(candidates, navigator.languages);
        }
        if (navigator.language) candidates.push(navigator.language);
        if (navigator.userLanguage) candidates.push(navigator.userLanguage);

        for (let i = 0; i < candidates.length; i++) {
            const code = String(candidates[i]).toLowerCase();
            const base = code.split('-')[0];
            if (SUPPORTED_LANGS.indexOf(base) !== -1) return base;
        }
        return 'it';
    }

    function setLanguage(lang, save) {
        if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = 'it';
        currentLang = lang;
        if (save !== false) {
            try { localStorage.setItem('coffeeLang', lang); } catch (e) {}
        }
        applyTranslations();
    }

    function getSavedLanguage() {
        try {
            const saved = localStorage.getItem('coffeeLang');
            if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
        } catch (e) {}
        return null;
    }

    // ==================================================================
    // UI LISTA PARTECIPANTI
    // ==================================================================
    function aggiornaInterfaccia() {
        listaPartecipanti.innerHTML = '';

        if (partecipanti.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
            partecipanti.forEach(function (nome, index) {
                const li = document.createElement('li');
                li.className = 'partecipante';
                li.setAttribute('data-index', index);

                const spanNome = document.createElement('span');
                spanNome.textContent = nome;

                const btnRimuovi = document.createElement('button');
                btnRimuovi.className = 'rimuovi';
                btnRimuovi.type = 'button';
                btnRimuovi.innerHTML = '✕';
                btnRimuovi.setAttribute('aria-label', 'Rimuovi ' + nome);
                btnRimuovi.addEventListener('click', function (e) {
                    e.stopPropagation();
                    rimuoviPartecipante(index);
                });

                li.appendChild(spanNome);
                li.appendChild(btnRimuovi);
                listaPartecipanti.appendChild(li);
            });
        }

        aggiornaContatore();
        sorteggiaBtn.disabled = partecipanti.length < 2;

        if (partecipanti.length === 0) {
            risultatoBox.style.display = 'none';
            lastResult = null;
        }
    }

    // ==================================================================
    // AZIONI
    // ==================================================================
    function aggiungiPartecipante() {
        const nome = nomeInput.value.trim();

        if (nome === '') {
            nomeInput.focus();
            nomeInput.placeholder = t('alert.emptyName');
            setTimeout(function () {
                nomeInput.placeholder = t('input.placeholder');
            }, 1500);
            return;
        }

        if (nome.length > 30) {
            alert(t('alert.tooLong'));
            return;
        }

        const esiste = partecipanti.some(function (p) {
            return p.toLowerCase() === nome.toLowerCase();
        });

        if (esiste) {
            nomeInput.value = '';
            nomeInput.placeholder = t('alert.duplicate', { name: nome });
            nomeInput.focus();
            setTimeout(function () {
                nomeInput.placeholder = t('input.placeholder');
            }, 1800);
            return;
        }

        partecipanti.push(nome);
        nomeInput.value = '';
        nomeInput.focus();

        aggiornaInterfaccia();
        risultatoBox.style.display = 'none';
        lastResult = null;
    }

    function rimuoviPartecipante(index) {
        if (index >= 0 && index < partecipanti.length) {
            partecipanti.splice(index, 1);
            aggiornaInterfaccia();
            risultatoBox.style.display = 'none';
            lastResult = null;
        }
    }

    function resetTutto() {
        if (partecipanti.length > 0 && !confirm(t('confirm.reset'))) {
            return;
        }
        partecipanti = [];
        nomeInput.value = '';
        aggiornaInterfaccia();
        risultatoBox.style.display = 'none';
        lastResult = null;
        nomeInput.focus();
    }

    // ==================================================================
    // EFFETTI
    // ==================================================================
    function creaParticelle(emoji, count) {
        const emojis = ['☕', '✨', '🎉', '💫', '⭐', '🍩', '🧁', '🍪', '❤️', '💛'];
        const scenaRect = tazzaScena.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();

        for (let i = 0; i < count; i++) {
            const p = document.createElement('span');
            p.className = 'particella';
            p.textContent = emoji || emojis[Math.floor(Math.random() * emojis.length)];

            p.style.left = (scenaRect.left - contRect.left + scenaRect.width / 2 - 20) + 'px';
            p.style.top = (scenaRect.top - contRect.top + scenaRect.height / 2 - 20) + 'px';

            const angle = Math.random() * Math.PI * 2;
            const dist = 80 + Math.random() * 120;

            p.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
            p.style.setProperty('--ty', (Math.sin(angle) * dist - 40) + 'px');
            p.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
            p.style.fontSize = (1 + Math.random() * 1.2) + 'rem';

            container.appendChild(p);
            setTimeout(function () { p.remove(); }, 1300);
        }
    }

    function creaConfetti() {
        const colors = ['#ff8c42', '#ffd166', '#06d6a0', '#ef476f', '#118ab2', '#b48c63', '#ff9d5c'];
        const contRect = container.getBoundingClientRect();
        const scenaRect = tazzaScena.getBoundingClientRect();

        const centerX = scenaRect.left - contRect.left + scenaRect.width / 2;
        const centerY = scenaRect.top - contRect.top + scenaRect.height / 2;

        for (let i = 0; i < 28; i++) {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.style.background = colors[Math.floor(Math.random() * colors.length)];
            c.style.left = centerX + 'px';
            c.style.top = centerY + 'px';
            c.style.width = (5 + Math.random() * 8) + 'px';
            c.style.height = (8 + Math.random() * 10) + 'px';
            c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';

            const angle = Math.random() * Math.PI * 2;
            const dist = 100 + Math.random() * 220;

            c.style.setProperty('--cx', (Math.cos(angle) * dist) + 'px');
            c.style.setProperty('--cy', (Math.sin(angle) * dist + 100) + 'px');
            c.style.setProperty('--cr', (Math.random() * 900 - 450) + 'deg');
            c.style.animationDuration = (1.4 + Math.random() * 1) + 's';

            container.appendChild(c);
            setTimeout(function () { c.remove(); }, 2400);
        }
    }

    // ==================================================================
    // SORTEGGIO
    // ==================================================================
    function estraiIndiceCasuale() {
        if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
            const array = new Uint32Array(1);
            const max = Math.floor(0xFFFFFFFF / partecipanti.length) * partecipanti.length;
            let randomValue;
            do {
                window.crypto.getRandomValues(array);
                randomValue = array[0];
            } while (randomValue >= max);
            return randomValue % partecipanti.length;
        }
        return Math.floor(Math.random() * partecipanti.length);
    }

    function sorteggia() {
        if (partecipanti.length < 2) {
            alert(t('alert.needTwo'));
            return;
        }

        sorteggiaBtn.disabled = true;
        sorteggiaBtn.textContent = t('btn.mixing');
        risultatoBox.style.display = 'none';

        tazza.classList.add('shaking');
        tazza.classList.remove('celebrando');

        const particleInterval = setInterval(function () {
            creaParticelle('✨', 2);
        }, 180);

        setTimeout(function () {
            clearInterval(particleInterval);
            tazza.classList.remove('shaking');
            tazza.classList.add('celebrando');

            const indiceEstratto = estraiIndiceCasuale();
            const estratto = partecipanti[indiceEstratto];
            const altri = partecipanti.filter(function (_, i) { return i !== indiceEstratto; });

            lastResult = { estratto: estratto, altri: altri };
            renderRisultato();
            risultatoBox.style.display = 'block';

            creaParticelle('☕', 8);
            creaParticelle('🎉', 8);
            creaConfetti();

            sorteggiaBtn.disabled = false;
            sorteggiaBtn.textContent = t('btn.sorteggia');

            setTimeout(function () {
                tazza.classList.remove('celebrando');
            }, 1000);
        }, 1800);
    }

    // ==================================================================
    // SELETTORE LINGUA UI
    // ==================================================================
    function openLangMenu() {
        langMenu.classList.add('open');
        langToggle.setAttribute('aria-expanded', 'true');
    }

    function closeLangMenu() {
        langMenu.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
    }

    function toggleLangMenu() {
        if (langMenu.classList.contains('open')) closeLangMenu();
        else openLangMenu();
    }

    langToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleLangMenu();
    });

    document.addEventListener('click', function (e) {
        if (!langMenu.contains(e.target) && !langToggle.contains(e.target)) {
            closeLangMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLangMenu();
    });

    langOptions.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang, true);
            closeLangMenu();
        });
    });

    // ==================================================================
    // EVENT LISTENER AZIONI
    // ==================================================================
    addBtn.addEventListener('click', aggiungiPartecipante);

    nomeInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            aggiungiPartecipante();
        }
    });

    sorteggiaBtn.addEventListener('click', sorteggia);
    resetBtn.addEventListener('click', resetTutto);

    // ==================================================================
    // AVVIO
    // ==================================================================
    const savedLang = getSavedLanguage();
    const initialLang = savedLang || detectLanguage();
    setLanguage(initialLang, !!savedLang);

    aggiornaInterfaccia();
})();