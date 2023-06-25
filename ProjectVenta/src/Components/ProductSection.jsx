import React, { useEffect, useState } from 'react';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    fetch('https://apieventapp.azurewebsites.net/api/Evento')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  const filteredProducts = products.filter(product => {
    if (categoryFilter && product.categoria !== categoryFilter) {
      return false;
    }
    if (locationFilter && product.ubicacion !== locationFilter) {
      return false;
    }
    return true;
  });

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Eventos</h2>
        <div className="flex justify-between mb-4">
          <div>
            <label htmlFor="categoryFilter" className="mr-2">Categoría:</label>
            <select
              id="categoryFilter"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Musica">Musica</option>
              <option value="Deporte">Deporte</option>
              <option value="Teatro">Teatro</option>
            </select>
          </div>
          <div>
            <label htmlFor="locationFilter" className="mr-2">Ubicación:</label>
            <select
              id="locationFilter"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={locationFilter}
              onChange={e => setLocationFilter(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="Lima">Lima</option>
              <option value="Cusco">Cusco</option>
              <option value="Arequipa">Arequipa</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.eventoId} className="bg-gray-200 rounded-md p-4 flex flex-col justify-between">
              <img src={product.imagenUrl} alt={product.nombreEvento} className="w-full h-40 object-cover mb-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">{product.nombreEvento}</h3>
                <p className="text-gray-600 mb-2">{product.descripcion}</p>
                <p className="text-gray-600 mb-2">Fecha: {product.fecha}</p>
              </div>
              <button className="bg-blue-900 hover:bg-blue-900 text-white rounded px-4 py-2 ">
                Comprar Boleta
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
