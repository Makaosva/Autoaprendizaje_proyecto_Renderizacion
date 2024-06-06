import React from "react";

function Formulario() {
  let arrayColaboradores = BaseColaboradores;
  const [idColaborador, setIdColaborador] = useState(
    BaseColaboradores[BaseColaboradores.length - 1].id
  );
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");
  const [edadColaborador, setEdadColaborador] = useState("");
  const [cargoColaborador, setCargoColaborador] = useState("");
  const [telefonoColaborador, settelefonoColaborador] = useState("");
  const [listaColaborador, setListaColaborador] = useState(BaseColaboradores);

  /* -----------Funcion para enviar el Formulario-----------*/
  function handleSubmit(e) {
    e.preventDefault();

    /*Generar un nuevo ID unico*/
    const nuevoID = idTarea + 1;

    /*----------Agregar Tarea-----*/
    setListaTarea([
      ...listaTarea,
      { id: nuevoID, nombre: nombreTarea, completada: false },
    ]);

    /* Actualizar el ID */
    setIdTarea(nuevoID);

    /* vaciamos el formulario*/
    setNombreTarea("");
  }

  /* -----------Funcion para renderizar el Formulario-----------*/
  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={mostrarInput}
          value={nombreColaborador}
        />
        <input
          type="mail"
          name="correo"
          onChange={mostrarInput}
          value={correoColaborador}
        />
        <input
          type="number"
          name="edad"
          onChange={mostrarInput}
          value={edadColaborador}
        />
        <input
          type="text"
          name="cargo"
          onChange={mostrarInput}
          value={cargoColaborador}
        />
        <input
          type="number"
          name="telefono"
          onChange={mostrarInput}
          value={telefonoColaborador}
        />
        <button>Agregar colaborador</button>
      </form>
    </div>
  );
}

export default Formulario;
