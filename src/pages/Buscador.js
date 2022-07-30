import React, { useEffect, useRef, useState } from "react";
import ListaNoticias from "../components/collections/ListaNoticias";
import Layout from "../components/Layout";

function Buscador() {
  const [disabled, setDisabled] = useState(true);
  const inputName = useRef("");

  const [inputValue, setInputValue] = useState(null);
  const [buscar, setBuscar] = useState(false);

  useEffect(() => {
    console.log("es mayor a 3");

    setBuscar(false);
  }, [inputValue, buscar]);

  const handlerClick = (e) => {
    e.preventDefault();

    console.log("hola");

    setInputValue(inputName.current?.value);
    setBuscar(true);
  };

  const handlerChangeInput = (e) => {
    e.preventDefault();

    if (inputName.current.value.length >= 3) {
      setDisabled(false);
      setInputValue(inputName.current?.value);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="form-group mt-5 col-12 col-lg-4 buscador">
            <input
              type="text"
              className="form-control"
              id="inputName"
              ref={inputName}
              onChange={handlerChangeInput}
            />
          </div>

          <button
            className="btn btn-primary mt-4 text-center"
            onClick={handlerClick}
            disabled={disabled}
          >
            Buscar
          </button>
        </div>

        <ListaNoticias></ListaNoticias>
      </Layout>
    </>
  );
}

export default Buscador;
