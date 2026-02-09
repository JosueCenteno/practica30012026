export default function ClienteList({ clientes, onEdit, onDelete }) {
  return (
    <div>
      {clientes.map((c) => (
        <div key={c.id}>
          <p>{c.nombre} {c.apellido}</p>
          <p>{c.telefono}</p>
          <p>{c.email}</p>

          <button onClick={() => onEdit(c)}>Editar</button>
          <button onClick={() => onDelete(c.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
