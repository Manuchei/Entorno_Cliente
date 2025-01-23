const apiURL = 'http://jsonblob.com/api/1298336634331062272'; // URL de prueba

let productos = [];
const carrito = [];

// Función para obtener productos de la API
async function obtenerProductos() {
    try {
        console.log("Intentando obtener productos..."); // Para depurar
        const respuesta = await fetch(apiURL);

        if (!respuesta.ok) {
            throw new Error('Error al obtener los productos');
        }

        productos = await respuesta.json();
        console.log('Productos obtenidos:', productos); // Ver los productos en la consola

        // Mostrar productos
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        document.getElementById('lista-productos').innerHTML = '<tr><td colspan="4">Error al cargar los productos</td></tr>';
    }
}

// Función para mostrar los productos en la tabla
function mostrarProductos(productos) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiar la tabla

    // Limitar a 3 productos para ajustarse al diseño original
    productos.slice(0, 3).forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <strong>${producto.title}</strong><br>
                REF: ${producto.id}
            </td>
            <td>
                <button onclick="actualizarUnidades(${producto.id}, -1)">-</button>
                <span id="cantidad-${producto.id}">0</span>
                <button onclick="actualizarUnidades(${producto.id}, 1)">+</button>
            </td>
            <td>${producto.price.toFixed(2)}€</td>
            <td id="total-${producto.id}">0.00€</td>
        `;
        listaProductos.appendChild(fila);
    });
}

// Función para actualizar la cantidad de un producto
function actualizarUnidades(id, cantidad) {
    const productoEnCarrito = carrito.find(p => p.id === id);

    if (!productoEnCarrito) {
        const producto = productos.find(p => p.id === id);
        carrito.push({ ...producto, quantity: cantidad > 0 ? cantidad : 0 });
    } else {
        productoEnCarrito.quantity += cantidad;
        if (productoEnCarrito.quantity <= 0) {
            const index = carrito.indexOf(productoEnCarrito);
            carrito.splice(index, 1);
        }
    }

    actualizarVistaCarrito();
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
    let totalCarrito = 0;

    carrito.forEach(producto => {
        const cantidadElement = document.getElementById(`cantidad-${producto.id}`);
        const totalElement = document.getElementById(`total-${producto.id}`);

        cantidadElement.innerText = producto.quantity;
        const totalProducto = (producto.price * producto.quantity).toFixed(2);
        totalElement.innerText = `${totalProducto}€`;

        totalCarrito += producto.price * producto.quantity;
    });

    document.getElementById('total').innerText = `TOTAL: ${totalCarrito.toFixed(2)}€`;
}

// Llamar a la función para obtener productos al cargar la página
obtenerProductos();
