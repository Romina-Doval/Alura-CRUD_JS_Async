console.log("CLIENTE-SERVICE"); //para chequear que esta enlazado/consumiendo correctamente por consola

const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());



/* -------------------------------------------------------------------------- */
/*                                CREAR CLIENTE                               */
/* -------------------------------------------------------------------------- */
const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST", //POST => crear un nuevo recurso
    headers: {
      "Content-Type": "application/json", //encabezados estandar para definir que tipo de archivos va a recibir el servidor
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }), //la info que queremos que se envie en el cuerpo de la petición  --> pasarla de texto plano a JSON
  });
};


/* -------------------------------------------------------------------------- */
/*                           BORRAR/ELIMINAR CLIENTE                          */
/* -------------------------------------------------------------------------- */
const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};


/* -------------------------------------------------------------------------- */
/*                          ACTUALIZAR/EDITAR CLIENTE                         */
/* -------------------------------------------------------------------------- */
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};


/* -------------------------------------------------------------------------- */
export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};




/* -------------------------------------------------------------------------- */
/*            ESTO LO CORTAMOS Y PEGAMOS EN => CLIENT.CONTROLLER.JS           */
/* -------------------------------------------------------------------------- */
// //generar una estructura donde se van a mostrar los datos de los clientes
// //backticks 
// const crearNuevaLinea = (nombre, email) => {
//   const linea = document.createElement("tr");
//   const contenido = `
//     <td class="td" data-td>${nombre}</td>
//     <td>${email}</td>

//     <td>
//       <ul class="table__button-control">
//         <li>
//           <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
//         </li>
//         <li>
//           <button class="simple-button simple-button--delete" type="button">Eliminar</button>
//         </li>
//       </ul>
//     </td> `;
//   linea.innerHTML = contenido;
//   return linea;
// };


// const table = document.querySelector("[data-table]")


//CRUD     -  Métodos HTTP
//Create   -      POST
//Read     -      GET
//Update   -    PUT/PATCH
//Delete   -     DELETE


//Abrir http (método, url)
//http.open("GET", "http://localhost:3000/perfil"); => para que JS se encargue de obtener la información en vez del navegador
//http.send(); => se encarga de enviar la petición (sale desde nuestro proyecto hasta el servidor que se encuentra en http://localhost:3000/perfil)
// http.response --> obtiene la info de db.js
// JSON.parse --> para pasarlo a un array --> porque la "respuesta" no está en forma de array (solo un texto)

//para obtener la respuesta del servidor - Una vez que se cargue/reciba la respuesta...se va a ejecutar esta fución

/* -------------------------------------------------------------------------- */
/*                         TODO ESTO LO SUPLANTAMOS X                         */
/* -------------------------------------------------------------------------- */
// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfil");

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
//console.log(listaClientes());
/* -------------------------------------------------------------------------- */
/*                                    ESTO                                    */
/* -------------------------------------------------------------------------- */

// const listaClientes = () => {
//   return fetch("http://localhost:3000/perfil").then( respuesta => {
//     return respuesta.json();
//   })
// };


//fetch API  --> abre conección a la URL (localhost:300), genera una promesa
//una vez que se complete esa promesa (then --> la recibimos y hacemos algo) 
//--> la pasamos a formato JSON 



/* -------------------------------------------------------------------------- */
/*            ESTO LO CORTAMOS Y PEGAMOS EN => CLIENT.CONTROLLER.JS           */
/* -------------------------------------------------------------------------- */
// listaClientes()
//   .then((data) => {
//     data.forEach((perfil) => {
//       const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
//       table.appendChild(nuevaLinea);
//     });
//   })
//   .catch((error) => alert("Ocurrió un error"));


/* -------------------------------------------------------------------------- */
//FETCH --> x defecto utiliza GET
// 2 parametros => la URL (a la cual se va a conectar)
// y un objeto (en el que definimos las propiedades de la llamada/call)