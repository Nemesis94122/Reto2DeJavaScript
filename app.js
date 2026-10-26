const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 },
];

function obtenerEstudiantePorId(id) {
    return new Promise((resolve, reject) => {
        
        const estudiante = estudiantes.find(e => e.id === id);

        if (estudiante) {
            
            resolve(estudiante);
        } else {
           
            reject(`Error: No existe un estudiante con el ID ${id}.`);
        }
    });
}


const inputId = document.getElementById('inputId');
const btnSearch = document.getElementById('btnSearch');
const consoleOutput = document.getElementById('consoleOutput');


btnSearch.addEventListener('click', () => {
    const parsedId = parseInt(inputId.value, 10);

    
    if (isNaN(parsedId)) {
        consoleOutput.className = 'error-text';
        consoleOutput.textContent = 'Error: Por favor ingresa un número de ID válido en el campo.';
        return;
    }

    
    let bufferLog = `Búsqueda del estudiante con ID ${parsedId}\n\n`;

   
    obtenerEstudiantePorId(parsedId)
        .then((estudiante) => {
            consoleOutput.className = 'success-text';
            bufferLog += `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`;
            consoleOutput.textContent = bufferLog;
        })
        .catch((errorEncontrado) => {
            consoleOutput.className = 'error-text';
            bufferLog += errorEncontrado;
            consoleOutput.textContent = bufferLog;
        });
});
