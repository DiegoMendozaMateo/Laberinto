/**
0 = pared
1 = slime o personaje
2 = pasillo
3 = salida falsa
4 = salida verdadera
5 = trampa
6 = trampa falsa
 */
const MAPA = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 5, 2, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 5, 0, 0, 0, 0, 0, 6, 0, 2, 0, 0, 6, 0, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 6, 0, 0, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2, 2, 2, 0, 6, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
    [3, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 2, 6, 5, 0, 2, 0, 2, 2, 6, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2, 0],
    [0, 2, 0, 2, 0, 6, 5, 2, 2, 0, 2, 0, 6, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 0, 0, 2, 0],
    [0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 6, 0, 2, 0],
    [0, 5, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 2, 2, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0, 6, 0, 0, 6, 0, 0, 2, 0, 2, 0, 2, 2, 6, 0],
    [0, 2, 2, 2, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 6, 0, 2, 2, 2, 2, 0, 5, 5, 0, 2, 0, 0, 0, 5, 0],
    [0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 2, 6, 6, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 2, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 2, 0, 6, 2, 2, 2, 0, 2, 2, 6, 0, 0, 0, 0, 6, 2, 2, 4],
    [0, 2, 0, 6, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 6, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 0, 6, 0, 0, 2, 0, 0, 5, 2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 0],
    [0, 2, 2, 2, 2, 2, 5, 0, 6, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


const ROWS = MAPA.length;
const COLS = MAPA[0].length;

// Canvas y contexto
const canvas = document.getElementById('lienzojuego')
const ctx = canvas.getContext('2d')

const canvasfondo = document.getElementById('lienzofondo')
const ctxfondo = canvasfondo.getContext('2d')

const canvasoscuridad = document.getElementById('lienzooscuridad')
const ctxoscuridad = canvasoscuridad.getContext('2d')


//audio

const musicaFondo = document.getElementById('musicaFondo');
        musicaFondo.volume = 0.1;

        document.addEventListener('DOMContentLoaded', () => {
            musicaFondo.play().catch(() => {
                const reproducirAlInteractuar = () => {
                    musicaFondo.play();
                    document.removeEventListener('keydown', reproducirAlInteractuar);
                    document.removeEventListener('mousedown', reproducirAlInteractuar);
                };
                document.addEventListener('keydown', reproducirAlInteractuar);
                document.addEventListener('mousedown', reproducirAlInteractuar);
            });
        });


const efectoSonido = document.getElementById('audiogolpe');

function reproducirUnaVez() {
    efectoSonido.play();
    efectoSonido.removeEventListener('ended', reproducirUnaVez); // opcional si lo usas con eventos
}

// calculamos el tamaño del cuadro/tile según el canvas
const TILE_SIZE = canvas.width / COLS;
console.log(TILE_SIZE);

// fondo para los pasillos
const fondo = new Image();
fondo.src = 'img/piso5.png'; 

fondo.onload = () => {
    ctxfondo.drawImage(fondo, 0, 0, canvasfondo.width, canvasfondo.height);
    // capa de transparencia para el piso
    ctxfondo.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctxfondo.fillRect(0, 0, canvasfondo.width, canvasfondo.height);
};


function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
}

function dibujarPared(
    ctx,
    c,
    r,
    size,
    relleno = '#000000ff',
    colorPared = '#301a2cff'
) {
    const x = c * size
    const y = r * size
    const pad = Math.max(2, size * 0.12)

    ctx.save()
    ctx.fillStyle = relleno
    // pared con "borde" brillante
    ctx.fillRect(x + pad, y + pad, size - pad * 2, size - pad * 2)

    // highlight
    ctx.strokeStyle = colorPared
    ctx.lineWidth = Math.max(1, size * 0.1)
    roundRect(ctx, x + pad, y + pad, size - pad * 2, size - pad * 2, 4)
    ctx.stroke()

    ctx.restore()
}

function marca(ctx, c, r, size, colorBorde = '#310479ff', colorX = '#633685ff') {
    const x = c * size + size / 2;
    const y = r * size + size / 2;
    const radio = size * 0.4;

    ctx.save();

    // Dibujar circunferencia sin relleno
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = Math.max(2, size * 0.1);
    ctx.stroke();

    // Dibujar la 'X' en el centro
    const offset = radio * 0.6;
    ctx.beginPath();
    ctx.moveTo(x - offset, y - offset);
    ctx.lineTo(x + offset, y + offset);
    ctx.moveTo(x + offset, y - offset);
    ctx.lineTo(x - offset, y + offset);
    ctx.strokeStyle = colorX;
    ctx.lineWidth = Math.max(2, size * 0.1);
    ctx.stroke();

    ctx.restore();
}

function dibujarPuerta(
    ctx,
    c,
    r,
    size,
    relleno = '#1768ffff',
    colorPuerta = '#6c0081ff'
) {
    const x = c * size
    const y = r * size
    const pad = Math.max(2, size * 0.05)

    ctx.save()
    ctx.fillStyle = relleno
    // pared con "borde" brillante
    ctx.fillRect(x + pad, y + pad, size - pad * 2, size - pad * 2)

    // highlight
    ctx.strokeStyle = colorPuerta
    ctx.lineWidth = Math.max(1, size * 0.1)
    roundRect(ctx, x + pad, y + pad, size - pad * 2, size - pad * 2, 4)
    ctx.stroke()

    ctx.restore()
}


function dibujarPersonaje(ctx, c, r, size, bounce = 0) {
    const cx = c * size + size / 2
    const cy = r * size + size / 2
    const radius = Math.max(6, size * 0.42)

    // Efecto de rebote/squash & stretch
    const squash = 1 - bounce * 0.15 // compresión vertical
    const stretch = 1 + bounce * 0.1 // expansión horizontal
    
    ctx.save()
    ctx.translate(cx, cy)
    
    // Aplicar transformación de squash & stretch
    ctx.scale(stretch, squash)
    
    // Cuerpo del slime (forma de gota)
    ctx.beginPath()
    ctx.fillStyle = '#7fff7f' // verde slime
    
    // Dibuja forma de gota con curvas bezier
    ctx.moveTo(0, radius * 0.3)
    ctx.bezierCurveTo(
        -radius, radius * 0.3,
        -radius, -radius * 0.5,
        0, -radius * 0.8
    )
    ctx.bezierCurveTo(
        radius, -radius * 0.5,
        radius, radius * 0.3,
        0, radius * 0.3
    )
    ctx.closePath()
    ctx.fill()
    
    // Brillo/reflejo en el slime
    ctx.beginPath()
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    ctx.ellipse(-radius * 0.25, -radius * 0.4, radius * 0.3, radius * 0.25, -0.3, 0, Math.PI * 2)
    ctx.fill()
    
    // Base del slime 
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
    ctx.ellipse(0, radius * 0.35, radius * 0.9 * stretch, radius * 0.15, 0, 0, Math.PI * 2)
    ctx.fill()
    
    // Ojos del slime
    const eyeOffset = radius * 0.25
    const eyeY = -radius * 0.2
    const eyeSize = Math.max(2, size * 0.08)
    
    // Ojo izquierdo
    ctx.beginPath()
    ctx.fillStyle = '#000'
    ctx.arc(-eyeOffset, eyeY, eyeSize, 0, Math.PI * 2)
    ctx.fill()
    
    // Ojo derecho
    ctx.beginPath()
    ctx.arc(eyeOffset, eyeY, eyeSize, 0, Math.PI * 2)
    ctx.fill()
    
    // Brillo en los ojos
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.arc(-eyeOffset + eyeSize * 0.3, eyeY - eyeSize * 0.3, eyeSize * 0.4, 0, Math.PI * 2)
    ctx.fill()
    ctx.arc(eyeOffset + eyeSize * 0.3, eyeY - eyeSize * 0.3, eyeSize * 0.4, 0, Math.PI * 2)
    ctx.fill()
    
    ctx.restore()
}

// Función para dibujar las vidas en pantalla
function dibujarVidas() {
    const vidaSize = 25;
    const padding = 10;
    const startX = padding;
    const startY = padding;

    ctxoscuridad.save();
    
    // Fondo semi-transparente para las vidas
    ctxoscuridad.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctxoscuridad.fillRect(startX - 5, startY - 5, (vidaSize + 5) * slime.vidas + 5, vidaSize + 10);
    
    // Dibujar corazones 
    for (let i = 0; i < slime.vidas; i++) {
        const x = startX + i * (vidaSize + 5);
        const y = startY;
        
        // Dibujar un corazón simple
        ctxoscuridad.fillStyle = '#ff0066b9';
        ctxoscuridad.beginPath();
        ctxoscuridad.moveTo(x + vidaSize / 2, y + vidaSize * 0.3);
        ctxoscuridad.bezierCurveTo(x + vidaSize / 2, y + vidaSize * 0.2, x + vidaSize * 0.3, y, x, y + vidaSize * 0.3);
        ctxoscuridad.bezierCurveTo(x - vidaSize * 0.3, y + vidaSize * 0.6, x + vidaSize / 2, y + vidaSize, x + vidaSize / 2, y + vidaSize);
        ctxoscuridad.bezierCurveTo(x + vidaSize / 2, y + vidaSize, x + vidaSize * 1.3, y + vidaSize * 0.6, x + vidaSize, y + vidaSize * 0.3);
        ctxoscuridad.bezierCurveTo(x + vidaSize * 0.7, y, x + vidaSize / 2, y + vidaSize * 0.2, x + vidaSize / 2, y + vidaSize * 0.3);
        ctxoscuridad.fill();
    }
    
    ctxoscuridad.restore();
}

// Función para aplicar la niebla de guerra usando el canvas de oscuridad
function aplicarNiebla() {
    const RADIO_VISION = 2.5; // Radio de visión en tiles
    
    // Limpiar el canvas de oscuridad
    ctxoscuridad.clearRect(0, 0, canvasoscuridad.width, canvasoscuridad.height);
    
    // Llenar todo de negro
    ctxoscuridad.fillStyle = 'rgba(0, 0, 0, 0.91)';
    ctxoscuridad.fillRect(0, 0, canvasoscuridad.width, canvasoscuridad.height);
    
    // Centro del slime
    const slimeCenterX = slime.c * TILE_SIZE + TILE_SIZE / 2;
    const slimeCenterY = slime.r * TILE_SIZE + TILE_SIZE / 2;
    
    // Usar globalCompositeOperation para "recortar" un círculo de la oscuridad
    ctxoscuridad.globalCompositeOperation = 'destination-out';
    
    // Crear gradiente radial para un efecto de luz suave
    const gradient = ctxoscuridad.createRadialGradient(
        slimeCenterX, slimeCenterY, 0,
        slimeCenterX, slimeCenterY, RADIO_VISION * TILE_SIZE
    );
    
    // Gradiente que va de totalmente transparente en el centro a opaco en los bordes
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');      // Centro completamente visible
    gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.7)');  // Transición media
    gradient.addColorStop(0.85, 'rgba(0, 0, 0, 0.3)'); // Casi en el borde
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');      // Borde con transición suave
    
    ctxoscuridad.fillStyle = gradient;
    ctxoscuridad.beginPath();
    ctxoscuridad.arc(slimeCenterX, slimeCenterY, RADIO_VISION * TILE_SIZE, 0, Math.PI * 2);
    ctxoscuridad.fill();
    
    // Restaurar el modo de composición normal
    ctxoscuridad.globalCompositeOperation = 'source-over';
}

function dibujarCelda(ctx, val, c, r, size, bounceValue = 0) {
    // Primero limpiamos el fondo del tile (pasillo)
    const x = c * size;
    const y = r * size;
    ctx.clearRect(x, y, size, size);

    switch (val) {
        case 0: // pared
            dibujarPared(ctx, c, r, size);
            break;
        case 1: // personaje
            dibujarPersonaje(ctx, c, r, size, bounceValue);
            break;
        case 2: // empty
            break;
        case 3: // salida falsa
            dibujarPuerta(ctx, c, r, size);
            break;
        case 4: // salida verdadera
            dibujarPuerta(ctx, c, r, size);
            break;
        case 5: // trampa verdadera
            marca(ctx, c, r, size);
            break;
        case 6: // trampa falsa
            marca(ctx, c, r, size);
            break;
    }
}



let lastMoment = performance.now();
let animationTime = 0; // Tiempo para la animación continua del slime
let juegoTerminado = false; // Flag para controlar si el juego terminó

function dibujarFrame(now) {
    // Si el juego terminó, no seguir dibujando
    if (juegoTerminado) return;

    // cuántos segundos transcurridos desde el frame anterior
    const dseg = (now - lastMoment) / 1000.0;
    lastMoment = now;
    
    // Actualizar tiempo de animación (continuo)
    animationTime += dseg;
    
    // Calcular valor de rebote para animación suave
    const bounceValue = Math.abs(Math.sin(animationTime * 4)); // 4 es la velocidad de rebote

    // limpiar todo el canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Recorrer la matriz y dibujar cada celda
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const val = MAPA[r][c];
            // Pasar el bounceValue solo si es el slime
            const bounce = (val === 1) ? bounceValue : 0;
            dibujarCelda(ctx, val, c, r, TILE_SIZE, bounce);
        }
    }

    // Aplicar la niebla de guerra en su propio canvas
    aplicarNiebla();

    // Dibujar las vidas después de todo (se ven por encima de la niebla)
    dibujarVidas();

    // Verificar si el slime se quedó sin vidas
    if (slime.vidas <= 0) {
        MensajeDerrota();
        juegoTerminado = true;
        return; // Detener el loop
    }

    requestAnimationFrame(dibujarFrame);
}

function mostrarMensajeVictoria() {
    juegoTerminado = true;
    
    // Pequeño delay para asegurar que se dibuje todo
    setTimeout(() => {
        // Limpiar el canvas de oscuridad para que se vea el mensaje
        ctxoscuridad.clearRect(0, 0, canvasoscuridad.width, canvasoscuridad.height);
        
        // Limpiar canvas principal
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // capa transparente
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#179217ff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('¡ESCAPASTE!', canvas.width / 2, canvas.height / 2);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '24px Arial';
        ctx.fillText('¡Encontraste la salida!', canvas.width / 2, canvas.height / 2 + 50);
        ctx.fillText('Recarga pagina (F5) para jugar de nuevo', canvas.width / 2, canvas.height / 2 + 90);
    }, 100);
}

function MensajeDerrota() {
    juegoTerminado = true;
    
    // Pequeño delay para asegurar que se dibuje todo
    setTimeout(() => {
        // Limpiar el canvas de oscuridad para que se vea el mensaje
        ctxoscuridad.clearRect(0, 0, canvasoscuridad.width, canvasoscuridad.height);
        
        // Limpiar canvas principal
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // capa transparente
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#a31616ff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Moriste', canvas.width / 2, canvas.height / 2);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '24px Arial';
        ctx.fillText('Te quedaste sin vidas', canvas.width / 2, canvas.height / 2 + 50);
        ctx.fillText('Recarga pagina (F5) para jugar de nuevo', canvas.width / 2, canvas.height / 2 + 90);
    }, 100);
}


// posición inicial del slime y datos de posición y dirección
let slime = {
    r: 18, 
    c: 14,
    dir: null, // No hay dirección inicial
    movePending: false, // Flag para controlar si hay un movimiento pendiente
    vidas: 3 // Sistema de vidas
};

// Punto de inicio 
const INICIO_R = 18;
const INICIO_C = 14;

// posición donde se dibujará el slime
MAPA[slime.r][slime.c] = 1;

/// Controles de dirección del slime 
window.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // No permitir movimiento si el juego terminó
    if (juegoTerminado) return;
    
    // Solo registrar movimiento si no hay uno pendiente
    if (!slime.movePending) {
        if (key === 'ArrowLeft') {
            slime.dir = 'left';
            slime.movePending = true;
        }
        if (key === 'ArrowRight') {
            slime.dir = 'right';
            slime.movePending = true;
        }
        if (key === 'ArrowUp') {
            slime.dir = 'up';
            slime.movePending = true;
        }
        if (key === 'ArrowDown') {
            slime.dir = 'down';
            slime.movePending = true;
        }
        
        // Si hay movimiento pendiente, intentar moverlo inmediatamente
        if (slime.movePending) {
            moverSlime();
        }
    }
});

function moverSlime() {
    if (!slime.dir) return;
    
    const res = nexPosIsAvailable(slime);
    
    if (res.isAvailable) {
        // Guardar el tipo de celda de destino antes de mover
        const destinoCelda = MAPA[res.r][res.c];
        
        // borrar slime de la posición actual
        MAPA[slime.r][slime.c] = 2; // pasillo    
        
        // actualizar posición
        slime.c = res.c;
        slime.r = res.r;
        
        // Verificar si llegó a la salida verdadera (4) - PRIMERO
        if (destinoCelda === 4) {
            MAPA[slime.r][slime.c] = 1; // Colocar slime
            mostrarMensajeVictoria();
            return; // Salir de la función
        }
        
        // Verificar si llegó a una salida falsa (3)
        if (destinoCelda === 3) {
            // Limpiar la posición actual
            MAPA[slime.r][slime.c] = 3; // Restaurar la puerta falsa
            // Teletransportar al inicio
            slime.r = INICIO_R;
            slime.c = INICIO_C;
        }
        
        // Verificar si pisó una trampa verdadera (5)
        if (destinoCelda === 5) {
            slime.vidas--;
            reproducirUnaVez();
        }
        
        // Colocar el slime en su nueva posición
        MAPA[slime.r][slime.c] = 1; // slime
    }
    
    // Resetear el flag de movimiento pendiente
    slime.movePending = false;
    slime.dir = null; // Limpiar dirección después del movimiento
}

function nexPosIsAvailable(item) {
    // el objeto item está disponible 
    const dir = item.dir;
    let nextC = item.c;
    let nextR = item.r;

    // dependiendo de la dirección se calcula la siguiente posible posición
    switch (dir) {
        case 'left':
            nextC -= 1;
            break;
        case 'right':
            nextC += 1;
            break;
        case 'up':
            nextR -= 1;
            break;
        case 'down':
            nextR += 1;
            break;
    }

    // validación de que no pueda salir del área 
    if (nextR < 0 || nextC < 0 || nextR >= ROWS || nextC >= COLS)
        return {
            'isAvailable': false, // fuera del mapa
            'r': item.r, // no se debe mover
            'c': item.c,
            'block': false,
            'inMargin': !(nextR < 0 || nextC < 0 || nextR >= ROWS || nextC >= COLS)
        };
    return {
        'isAvailable': MAPA[nextR][nextC] !== 0, // fuera del mapa
        'r': nextR, // siguiente posición
        'c': nextC,
        'block': MAPA[nextR][nextC] == 0,
        'inMargin': !(nextR < 0 || nextC < 0 || nextR >= ROWS || nextC >= COLS)
    }; // 0 es pared
}

requestAnimationFrame(dibujarFrame);