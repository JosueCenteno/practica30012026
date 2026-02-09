import { useState, useEffect } from "react";

export default function ClienteForm({ onSave, clienteEditando }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    direccion: "",
    edad: "",
  });

 useEffect(() => {
  if (clienteEditando) {
    setForm({
      nombre: clienteEditando.nombre || "",
      apellido: clienteEditando.apellido || "",
      telefono: clienteEditando.telefono || "",
      email: clienteEditando.email || "",
      direccion: clienteEditando.direccion || "",
      edad: clienteEditando.edad || "",
    });
  }
}, [clienteEditando]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);

    setForm({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      direccion: "",
      edad: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
          required
        />
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
}
