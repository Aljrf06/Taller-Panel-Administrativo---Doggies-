import React from 'react'
import './tabla.css'

const ciudadBadge = {
  'Bogotá':   'badge badge-bogota',
  'Medellín': 'badge badge-medellin',
  'Cali':     'badge badge-cali',
}

const Clientes = () => {
  const clientes = [
    { id: 1, nombre: 'Ana Gómez',    correo: 'ana@gmail.com',   telefono: '3101234567', ciudad: 'Bogotá'   },
    { id: 2, nombre: 'Luis Herrera', correo: 'luis@gmail.com',  telefono: '3112345678', ciudad: 'Medellín' },
    { id: 3, nombre: 'María Torres', correo: 'maria@gmail.com', telefono: '3009876543', ciudad: 'Cali'     },
  ]

  return (
    <div className="tabla-page">
      <div className="page-header">
        <h1>Lista de <span>Clientes</span></h1>
        <p className="page-count">{clientes.length} registros</p>
      </div>
      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td className="td-id">#{c.id}</td>
                <td className="td-nombre">{c.nombre}</td>
                <td className="td-correo">{c.correo}</td>
                <td>{c.telefono}</td>
                <td><span className={ciudadBadge[c.ciudad]}>{c.ciudad}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Clientes