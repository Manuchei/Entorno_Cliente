var productos = [];
var carrito = [];

// Función para cargar los productos en la tabla
document.addEventListener('DOMContentLoaded', function (event) {

    function cargarTabla(productos) {
        const tablaProducts = document.getElementById("cuerpoTabla");

        // Limpiar la tabla antes de llenarla
        tablaProducts.innerHTML = '';

        productos.forEach(producto => {
            const tr = document.createElement('tr');

            // Columna Producto
            const tdProducto = document.createElement('td');
            tdProducto.innerText = producto.title || producto.SKU;

            // Columna Cantidad (se inicializa en 1)
            const tdCantidad = document.createElement('td');
            tdCantidad.innerText = 1;

            // Columna Precio por Unidad
            const tdPrecioUnidad = document.createElement('td');
            tdPrecioUnidad.innerText = producto.price + ' €';

            // Columna Total (inicialmente igual al precio por unidad)
            const tdTotal = document.createElement('td');
            tdTotal.innerText = producto.price + ' €';

            // Columna de botones (+ y -)
            const tdAcciones = document.createElement('td');
            const btnAgregar = document.createElement('button');
            btnAgregar.textContent = "+";
            const btnQuitar = document.createElement('button');
            btnQuitar.textContent = "-";
            tdAcciones.appendChild(btnQuitar);
            tdAcciones.appendChild(btnAgregar);

            // Eventos de los botones
            btnAgregar.addEventListener('click', function () {
                agregarAlCarrito(producto.SKU, producto.title || producto.name, producto.price);
            });

            btnQuitar.addEventListener('click', function () {
                quitarDelCarrito(producto.SKU);
            });

            // Agregar celdas a la fila
            tr.appendChild(tdProducto);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdPrecioUnidad);
            tr.appendChild(tdTotal);
            tr.appendChild(tdAcciones);

            // Añadir la fila a la tabla
            tablaProducts.appendChild(tr);
        });
    }

    //Función para agregar productos al carrito
    window.agregarAlCarrito = (sku, title, price) => {
        const producto = { sku, title, price };
        carrito.push(producto);
        alert(`Producto añadido: ${title} (${sku}), Precio: ${price} €`);
        actualizarCarrito();
    };

    // Función para quitar productos del carrito
    window.quitarDelCarrito = (sku) => {
        carrito = carrito.filter(producto => producto.sku !== sku);
        alert(`Producto con SKU ${sku} eliminado del carrito`);
        actualizarCarrito();
    };

    // Función para actualizar la vista del carrito
    function actualizarCarrito() {
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = ''; // Limpiar carrito antes de actualizar

        carrito.forEach(producto => {
            const productoHTML = `
                <div class="producto-carrito">
                    <h4>${producto.title}</h4>
                    <p>Precio: ${producto.price} €</p>
                </div>
            `;
            carritoContainer.innerHTML += productoHTML;
        });

        if (carrito.length === 0) {
            carritoContainer.innerHTML = '<p>El carrito está vacío</p>';
        }
    }

    // Fetch unificado para cargar datos en tabla y productos
    fetch('https://jsonblob.com/api/1298679055254413312')
        .then(response => response.json())
        .then(data => {
            productos = data.products || data; // Asignar los productos
            cargarTabla(productos);  // Cargar productos en la tabla
        })
        .catch(error => {
            console.error("Error al obtener los productos: ", error);
        });
});