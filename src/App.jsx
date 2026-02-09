import { useEffect, useState } from "react";
import ClienteForm from "./components/ClienteForm";
import ClienteList from "./components/ClienteList";
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
} from "./services/clienteService";

export default function App() {
  const [clientes, setClientes] = useState([]);
  const [clienteEditando, setClienteEditando] = useState(null);

    const cargarClientes = async () => {
    const res = await getClientes();
    setClientes(res.data);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

   const guardarCliente = async (cliente) => {
    if (clienteEditando) {
      await updateCliente(clienteEditando.id, cliente);
      setClienteEditando(null);
    } else {
      await createCliente(cliente);
    }

    cargarClientes(); 
  };

  const eliminarCliente = async (id) => {
    await deleteCliente(id);
    cargarClientes(); 
  };

  return (
    <div>
      <h1>Clientes</h1>

      <ClienteForm
        onSave={guardarCliente}
        clienteEditando={clienteEditando}
      />

      <ClienteList
        clientes={clientes}
        onEdit={setClienteEditando}
        onDelete={eliminarCliente}
      />
    </div>
  );
}
