// Abrir http (método, url)

// CRUD (Create [método POST], Read [método GET], Update [métodos PUT/PATCH], Delete [método DELETE])

// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open('GET', 'http://localhost:3000/perfil');

//     http.send();

//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if (http.status >= 400) {
//         reject(response);
//       } else {
//         resolve(response);
//       }
//     };
//   });
//   return promise;
// };

const listaClientes = () => fetch('http://localhost:3000/perfil').then((response) => response.json());

const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE',
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((response) => response.json());
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((response) => response)
    .catch((error) => console.log(error));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
