// Función para crear cookie con una caducidad de 1 minuto
function createCookie(name, value) {
    const expirationDate = new Date(Date.now() + 60 * 1000); // 1 minuto
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
}

// Función para obtener valor de una cookie por su nombre
function getCookie(name) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
    const cookie = cookies.find(cookie => cookie[0] === name);
    return cookie ? cookie[1] : null;
}

// Event listener para crear cookie al enviar el formulario
document.getElementById('cookies-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    const formData = new FormData(event.target);
    const name = formData.get('cookies-name');
    const id = formData.get('cookies-id');
    const data = formData.get('cookies-data');
    createCookie('ID', id);
    createCookie('data', data);
    alert('Cookies creadas correctamente');
});

// Event listener para mostrar datos de la cookie
document.getElementById('show-cookie').addEventListener('click', function() {
    const idCookie = getCookie('ID');
    const dataCookie = getCookie('data');
    if (idCookie && dataCookie) {
        alert(`Datos de la cookie: ID=${idCookie}, data=${dataCookie}`);
    } else {
        alert('No se encontraron datos en la cookie');
    }
});

// Event listener para eliminar cookie
document.getElementById('delete-cookie').addEventListener('click', function() {
    document.cookie = 'ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    alert('Cookies eliminadas correctamente');
});




// Función para crear sessionStorage
function createSessionStorage(name, value) {
    sessionStorage.setItem(name, value);
}

// Función para obtener datos del sessionStorage
function getSessionStorage(name) {
    return sessionStorage.getItem(name);
}

// Event listener para crear sessionStorage al enviar el formulario
document.getElementById('session-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    const formData = new FormData(event.target);
    const name = formData.get('session-name');
    const id = formData.get('session-id');
    const data = formData.get('session-data');
    createSessionStorage('ID', id);
    createSessionStorage('data', data);
    alert('Session Storage creado correctamente');
});

// Event listener para mostrar datos del sessionStorage
document.getElementById('show-session').addEventListener('click', function() {
    const id = getSessionStorage('ID');
    const data = getSessionStorage('data');
    if (id && data) {
        alert(`Datos del sessionStorage: ID=${id}, data=${data}`);
    } else {
        alert('No se encontraron datos en el sessionStorage');
    }
});

// Event listener para eliminar datos del sessionStorage
document.getElementById('delete-session').addEventListener('click', function() {
    sessionStorage.removeItem('ID');
    sessionStorage.removeItem('data');
    alert('Datos del Session Storage eliminados correctamente');
});
