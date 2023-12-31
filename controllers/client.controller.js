import { clientServices } from "../service/client-service.js";

//backticks
//generar una estructura donde se van a mostrar los datos de los clientes
const crearNuevaLinea = (nombre, email, id) => {
  console.log(id);
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;

  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });
  return linea;
};

const table = document.querySelector("[data-table]");

/* -------------------------------------------------------------------------- */
/*                            VERSIÓN DESTRUCURADA                            */
/* -------------------------------------------------------------------------- */
clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));



/* -------------------------------------------------------------------------- */
/*                                    ANTES                                   */
/* -------------------------------------------------------------------------- */
// clientServices.listaClientes()
//   .then((data) => {
//     data.forEach((perfil) => {
//       console.log(perfil)
//       const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
//       table.appendChild(nuevaLinea);
//     });
//   })
//   .catch((error) => alert("Ocurrió un error"));

/* -------------------------------------------------------------------------- */
/*                                OTRA VERSION                                */
/* -------------------------------------------------------------------------- */
// clientServices
//   .listaClientes()
//   .then((data) => {
//     data.forEach((perfil) => {
//       const { nombre, email, id } = perfil;
//       const nuevaLinea = crearNuevaLinea(nombre, email, id);
//       table.appendChild(nuevaLinea);
//     });
//   })
//   .catch((error) => alert("Ocurrió un error"));





