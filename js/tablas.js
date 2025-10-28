
// Aquí irá tu código JavaScript
console.log('Interfaz de Tablas de Multiplicar lista para programar! ✖️');

// Elementos principales disponibles:

// Header
// - backBtn: Botón volver
// - timerDisplay: Display del cronómetro
// - scoreDisplay: Display de puntuación

// Table Selector
// - Table buttons: data-table (1-12)
// - Difficulty buttons: data-difficulty (easy, medium, hard)

// Game Area
// - currentQuestion: Número de pregunta actual
// - totalQuestions: Total de preguntas
// - progressFill: Barra de progreso
// - streakCount: Contador de racha
// - firstNumber: Primer número de la multiplicación
// - secondNumber: Segundo número de la multiplicación

// Answer Modes
// - inputMode: Contenedor del modo input (medium)
// - answerInput: Input para escribir respuesta
// - optionsMode: Contenedor del modo opciones (easy)
// - Option buttons: data-answer

// Action Buttons
// - skipBtn: Saltar pregunta
// - checkBtn: Verificar respuesta
// - nextBtn: Siguiente pregunta

// Stats
// - correctCount: Contador de respuestas correctas
// - incorrectCount: Contador de respuestas incorrectas
// - accuracyPercent: Porcentaje de precisión
// - bestTime: Mejor tiempo
// - tipText: Texto del consejo

// Ejemplo: Cambiar entre modos de dificultad
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const inputMode = document.getElementById('inputMode');
const optionsMode = document.getElementById('optionsMode');

difficultyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        difficultyBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const difficulty = this.dataset.difficulty;
        
        if (difficulty === 'easy') {
            inputMode.style.display = 'none';
            optionsMode.style.display = 'grid';
        } else if (difficulty === 'medium' || difficulty === 'hard') {
            inputMode.style.display = 'flex';
            optionsMode.style.display = 'none';
        }
        
        console.log('Modo de dificultad:', difficulty);
    });
});

// Ejemplo: Seleccionar tabla
const tableBtns = document.querySelectorAll('.table-btn');

tableBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tableBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        
        const table = this.dataset.table;
        console.log('Tabla seleccionada:', table);
        
        // Aquí cargarías las preguntas de la tabla seleccionada
    });
});

// Ejemplo: Timer básico
let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('timerDisplay').textContent = 
            `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}

// startTimer(); // Descomentar para iniciar el timer automáticamente
