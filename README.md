# ☕ Chi offre il caffè? · La tazza magica ✨

> **Il modo più democratico (e divertente) per decidere chi paga il caffè.**
> Niente discussioni, niente "l'ho offerto l'altra volta", niente scuse: agiti la tazza e il destino decide. 🎲

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vanilla-No%20Framework-ffd166?style=for-the-badge" alt="Vanilla">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/lingue-6-ff8c42?style=flat-square" alt="Lingue supportate">
  <img src="https://img.shields.io/badge/dark%20mode-automatica-3e2417?style=flat-square" alt="Dark mode">
  <img src="https://img.shields.io/badge/dipendenze-0-06d6a0?style=flat-square" alt="Zero dipendenze">
  <img src="https://img.shields.io/badge/licenza-MIT-ef476f?style=flat-square" alt="MIT">
</p>

---

## 🎯 A cosa serve?

Hai presente quei momenti in ufficio, in università o con gli amici in cui serve **decidere chi offre il caffè** e nessuno si offre volontario?

Bene, questo è lo strumento che fa per te. **Una tazza virtuale animata** agita i nomi, fa uscire vapore, lancia coriandoli e alla fine ti dice — con una certa eleganza — chi dovrà mettere mano al portafoglio. ☕💸

Nessun server, nessun account, nessun tracciamento. Solo una pagina HTML che fa il suo lavoro.

---

## ✨ Features (scritte da chi le ha fatte, quindi di parte)

### 🎨 Estetica curata
- **Tazza virtuale animata** che galleggia, fuma e si agita come una vera shaker
- **Onde del caffè** animate in CSS puro
- **Vapore** che sale in modo ipnotico
- **Coriandoli e particelle** che esplodono al momento del sorteggio
- **Bolle decorative** che fluttuano in sottofondo

### 🌍 Internazionale
- **6 lingue supportate**: 🇮🇹 Italiano, 🇬🇧 English, 🇪🇸 Español, 🇫🇷 Français, 🇩🇪 Deutsch, 🇵🇹 Português
- **Rilevamento automatico** della lingua del dispositivo
- **Salvataggio della preferenza** in `localStorage`
- Selettore lingua con bandierine nel menu a tendina

### 🌙 Dark mode automatico
- Segue le impostazioni di sistema (`prefers-color-scheme`)
- Si aggiorna in tempo reale se cambi tema al volo
- Palette ricalibrata a mano per il dark (niente colori "slavati")
- Meta `theme-color` aggiornato dinamicamente per la barra del browser

### ♿ Accessibilità
- Attributi `aria-label`, `aria-expanded`, `role="menu"` sul selettore lingua
- Rispetta `prefers-reduced-motion` (disattiva le animazioni per chi ne ha necessità)
- Contrasti WCAG-friendly in entrambi i temi
- Navigazione da tastiera (Enter per aggiungere, Esc per chiudere menu)

### 🎲 Sorteggio equo (davvero)
- Usa `crypto.getRandomValues()` dove disponibile, non il banale `Math.random()`
- Fallback automatico su browser più vecchi
- **Rejection sampling** per eliminare il bias modulo (`randomValue % length` non è uniforme se `length` non divide `2³²`)

### 🧠 Regole sensate
- Minimo **2 partecipanti** per sorteggiare
- **Nomi unici** (case-insensitive)
- **Nomi non vuoti** e massimo 30 caratteri
- Reset con conferma
- Ogni modifica alla lista **nasconde il risultato precedente**

### 🪶 Leggero
- **Zero dipendenze**: niente React, Vue, npm, webpack, node_modules
- Solo **3 file**: `index.html`, `style.css`, `script.js`
- Funziona aprendo direttamente il file (anche senza server)
- Font da Google Fonts (opzionale, ma stai pur certo che fa la differenza)

---

## 🚀 Come si usa

### Opzione 1 — Il modo più semplice
1. Scarica i 3 file
2. Apri `index.html` nel browser
3. Aggiungi i nomi
4. Clicca **"🎲 Agita la tazza e sorteggia"**
5. Guarda l'anima di qualcuno uscire dal corpo ☕

### Opzione 2 — Con un server locale (per nerd)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve

# Poi apri http://localhost:8000
