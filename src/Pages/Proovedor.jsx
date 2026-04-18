import React from 'react'
import './tabla.css'

const ciudadBadge = {
  'Bogotá':   'badge badge-bogota',
  'Medellín': 'badge badge-medellin',
  'Cali':     'badge badge-cali',
}

const Proveedor = () => {
  const proveedores = [
    { id: 1, nombre: 'Distribuidora López',  contacto: 'Carlos López',  telefono: '3214567890', ciudad: 'Bogotá'   },
    { id: 2, nombre: 'Tech Supplies S.A.S.', contacto: 'Laura Méndez',  telefono: '3107894561', ciudad: 'Medellín' },
    { id: 3, nombre: 'ElectroCom Ltda.',     contacto: 'Andrés Torres', telefono: '3001234567', ciudad: 'Cali'     },
  ]

  return (
    <div className="tabla-page">
      <div className="page-header">
        <h1>Lista de <span>Proveedores</span></h1>
        <p className="page-count">{proveedores.length} registros</p>
      </div>

      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Contacto</th><th>Teléfono</th><th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((prov) => (
              <tr key={prov.id}>
                <td className="td-id">#{prov.id}</td>
                <td className="td-nombre">{prov.nombre}</td>
                <td>{prov.contacto}</td>
                <td>{prov.telefono}</td>
                <td><span className={ciudadBadge[prov.ciudad]}>{prov.ciudad}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Proveedor