type Rating = {
    count: number;
    rate: number;
}
type Producto = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
}
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((productos: Producto[]) => {
        // iteramos productos para generar el resultado
        let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead> <tbody>';

        // loopeamos los prodcutos para generar las rows de la tabla
        productos.forEach((p:Producto) => {
            tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
        });

        // cerrar el body de la tabla
        tableHTML += '</tbody>'

        // obtenemos elemento de la tabla para setear inner HTML
        document.querySelector('#tableElement')!.innerHTML = tableHTML;

        // esconder el spinner cuando encuentre los productos
        const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
        spinnerElement.style.display = 'none';
    });