fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (productos) {
    // iteramos productos para generar el resultado
    var tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead> <tbody>';
    // loopeamos los prodcutos para generar las rows de la tabla
    productos.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    // cerrar el body de la tabla
    tableHTML += '</tbody>';
    // obtenemos elemento de la tabla para setear inner HTML
    document.querySelector('#tableElement').innerHTML = tableHTML;
    // esconder el spinner cuando encuentre los productos
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});
