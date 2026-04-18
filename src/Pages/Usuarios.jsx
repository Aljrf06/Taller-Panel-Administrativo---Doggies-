import React from 'react'
import './tabla.css'

const rolBadge = {
  'Administrador': 'badge badge-admin',
  'Editor':        'badge badge-editor',
  'Lector':        'badge badge-lector',
}

const estadoBadge = {
  'Activo':   'badge badge-activo',
  'Inactivo': 'badge badge-inactivo',
}

const Usuarios = () => {
  const usuarios = [
    { id: 1, nombre: 'admin',   rol: 'Administrador', estado: 'Activo'   },
    { id: 2, nombre: 'jose123', rol: 'Editor',         estado: 'Activo'   },
    { id: 3, nombre: 'lauram',  rol: 'Lector',         estado: 'Inactivo' },
  ]

  return (
    <div className="tabla-page">
      <div className="page-header">
        <h1>Lista de <span>Usuarios</span></h1>
        <p className="page-count">{usuarios.length} registros</p>
      </div>
      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              <th>ID</th><th>Usuario</th><th>Rol</th><th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td className="td-id">#{u.id}</td>
                <td className="td-nombre">{u.nombre}</td>
                <td><span className={rolBadge[u.rol]}>{u.rol}</span></td>
                <td><span className={estadoBadge[u.estado]}>{u.estado}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios