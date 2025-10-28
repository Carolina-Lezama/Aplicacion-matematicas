// Funcionalidad principal del menú
function openActivity(activityName) {
    // Aquí puedes agregar la lógica para abrir cada actividad
    switch(activityName) {
        case 'fracciones':
            window.location.href = 'fracciones.html';
            break;
        case 'geometria':
            window.location.href = 'geometria.html';
            break;
        case 'calculadora':
            window.location.href = 'calculadora.html';
            break;
        case 'tablas':
            window.location.href = 'tablas.html';
            break;
        case 'operaciones':
            window.location.href = 'operaciones.html';
            break;
        default:
            console.log('Actividad no encontrada');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.menu-card');
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '20';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '10';
        });
    });
});

// Efecto de partículas al hacer hover
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        createSparkle(e.pageX, e.pageY);
    });
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    sparkle.style.zIndex = '1000';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Agregar animación de sparkle
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
