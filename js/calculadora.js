
// Aquí irá tu código JavaScript
console.log('Interfaz de Calculadora lista para programar! 🔢');

// Elementos disponibles:
// - backBtn: Botón volver
// - Mode buttons: data-mode="basic", "scientific"
// - displayHistory: Display del historial
// - displayMain: Display principal
// - scientificPanel: Panel de funciones científicas
// - Number buttons: data-number
// - Operator buttons: data-operator
// - clearBtn: Limpiar todo
// - deleteBtn: Borrar último
// - percentBtn: Porcentaje
// - equalsBtn: Igual
// - Scientific functions: data-function
// - Memory buttons: memoryAddBtn, memorySubtractBtn, memoryRecallBtn, memoryClearBtn
// - memoryValue: Display de memoria
// - historyList: Lista del historial
// - Formula cards: data-formula

// Ejemplo básico para modo científico
const modeBtns = document.querySelectorAll('.mode-btn');
const scientificPanel = document.getElementById('scientificPanel');

modeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        modeBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        if (this.dataset.mode === 'scientific') {
            scientificPanel.classList.add('active');
        } else {
            scientificPanel.classList.remove('active');
        }
    });
});
