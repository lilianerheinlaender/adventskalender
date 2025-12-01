// Definiere die Codes und die entsprechenden Bilder
const calendarData = {
    "Drachenfels": "bilder/Bild4.jpg",
    "Dasselstraße": "bilder/Bild1.jpg",
    "Mastektomie": "bilder/Bild3.jpg",
    "Roller": "bilder/Bild2.jpg",
    "Baby": "bilder/Bild5.jpg",
    "Frankreich": "bilder/tag5.jpg",
    "8": "bilder/tag5.jpg",
    "Fliegen": "bilder/tag5.jpg",
    "Hihi": "bilder/tag5.jpg",
    "Asia Hoang": "bilder/tag5.jpg",
    "2021": "bilder/tag5.jpg",
    "love": "bilder/tag24.jpg"
};

function checkCode() {
    const input = document.getElementById('codeInput');
    const message = document.getElementById('message');
    const imageContainer = document.getElementById('imageContainer');
    const calendarImage = document.getElementById('calendarImage');
    
    const code = input.value.trim();
    
    if (calendarData[code]) {
        // korrekter code
        message.textContent = "Juhuuuu! Hier kommt dein nächstes Türchen 🎉";
        message.style.color = "#2c5e2e";
        
        // Bild anzeigen
        calendarImage.src = calendarData[code];
        imageContainer.classList.remove('hidden');
        
        // Event Listener für Klick auf Bild hinzufügen
        calendarImage.onclick = openFullscreen;
        
        // Code aus der Liste entfernen, damit er nicht nochmal verwendet werden kann
        delete calendarData[code];
        
    } else {
        // Falscher Code
        message.textContent = "Oh wei, der Code ist falsch eingegeben glaube ich 🥺";
        message.style.color = "#e74c3c";
        imageContainer.classList.add('hidden');
    }
    
    // Eingabefeld leeren
    input.value = "";
    input.focus(); // Fokus zurück ins Eingabefeld
}

// Enter-Taste zum Absenden
document.getElementById('codeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

// LIGHTBOX FUNKTIONEN
function openFullscreen() {
    const calendarImage = document.getElementById('calendarImage');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const lightbox = document.getElementById('lightbox');
    
    if (calendarImage.src && calendarImage.src !== '') {
        fullscreenImage.src = calendarImage.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFullscreen() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listener für Klick auf die Lightbox (außerhalb des Bildes)
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('close-btn')) {
        closeFullscreen();
    }
});

// ESC-Taste zum Schließen
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Initialisierung: Focus auf Eingabefeld
window.onload = function() {
    document.getElementById('codeInput').focus();
};