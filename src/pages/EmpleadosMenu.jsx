import React from 'react'

import { Link, useLoaderData, useNavigate, Form , redirect} from "react-router-dom";
import { obtenerEmpleados } from "../data/empleados";
import Empleado from "../components/Empleado";
import {obtenerCargos} from "../data/cargo_empleado"
import { actualizarMovimiento } from "../data/movimiento_empleado";
import { useState } from "react";
import { actualizarCostosGastos } from "../data/cuentas.js";



function EmpleadosMenu() {
    const navigate = useNavigate()
  return (

      <>
          <h1 className="font-black text-4xl">Empleados</h1>
          <p >Administración de empleados</p>
          
          <div className="ml-40 mt-5 d-flex" style={{ flexDirection: "row" }}>
                <div className="mt-6" style={{ width: "180px" }}>
                    <img width="150" className="bg-orangebg" src="https://thumbs.dreamstime.com/b/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg"></img>
                    <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm" onClick={() => navigate(`/empleados`)}>Empleado</button>
                </div>

              <div style={{ width: "180px" }}>
                  <img width="150" className="bg-orangebg" src="https://pbs.twimg.com/profile_images/1439613333930483712/0pMHDGdR_400x400.jpg"></img>
                  <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm" onClick={() => navigate(`/empleados/iess`)}>Parámetros del IESS</button>
              </div>
              <div className="mt-6" style={{ width: "180px" }}>
                  <img width="150" className="bg-orangebg" src="https://png.pngtree.com/element_our/sm/20180413/sm_5ad0c05d03e6b.jpg"></img>
                  <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm" onClick={() => navigate(`/empleados/departamentos`)}>Departamentos</button>
              </div>
              <div className="mt-6" style={{ width: "180px" }}>
                  <img width="150" className="bg-orangebg" src="https://www.clipartmax.com/png/middle/309-3096179_transparent-employees-logo.png"></img>
                  <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm" onClick={() => navigate(`/empleados/cargos`)}>Cargos</button>
              </div>
              
          </div>

      </>
    
    
    
  )
}

export default EmpleadosMenu