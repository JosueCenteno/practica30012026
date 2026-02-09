import axios from "axios";

const API_URL = "https://69895493c04d974bc69eebe4.mockapi.io/clientes";

export const getClientes = () => axios.get(API_URL);

export const createCliente = (cliente) => axios.post(API_URL, cliente);

export const updateCliente = (id, cliente) =>
    axios.put(`${API_URL}/${id}`, cliente);

export const deleteCliente = (id) =>
    axios.delete(`${API_URL}/${id}`);
