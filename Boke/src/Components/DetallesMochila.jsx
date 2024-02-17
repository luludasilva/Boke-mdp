// DetalleProducto.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetallesMochila = () => {
  const { categoria, id } = useParams();
  const [producto, setProducto] = useState(null);

  const fetchProductoDetalle = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      setProducto(response.data);
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
    }
  };

  useEffect(() => {
    fetchProductoDetalle();
  }, [id, categoria]); // Vuelve a cargar los detalles cuando cambia el ID o la categoría

  if (!producto) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div>
      <h2>Detalles de {producto.name}</h2>
      <p>Categoría: {producto.category}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default DetallesMochila;
