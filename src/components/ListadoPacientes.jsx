import React, {useEffect, useState} from 'react'
import Paciente from './Paciente.jsx'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll pr-2'>

      {pacientes && pacientes.length ? (
        <>    
            <div className='border-4 ml-4 rounded-lg border-gray-200 shadow-xl pb-0 pt-2'>
    
              <h2 className='font-black text-3xl text-center '>Listado de Pacientes</h2>
              
              <p className='text-xl mt-5 mb-10 text-center '>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
              </p>
    
            </div>
    
            { pacientes.map( (paciente) => {
                return(
                  <Paciente
                    key = { paciente.id }
                    paciente = { paciente }
                    setPaciente = {setPaciente}
                    eliminarPaciente = { eliminarPaciente }
                  />              
                )
            })}
        </>  
          
          ) : (
            <div className='border-4 ml-4 rounded-lg border-gray-200 shadow-xl pb-0 pt-2'>
    
              <h2 className='font-black text-3xl text-center '>No hay Pacientes</h2>
              
              <p className='text-xl mt-5 mb-10 text-center '>
                Comienza agregando pacientes  {''}
                <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
              </p>
    
            </div>
          )

      }
      
    </div>
  )
}

export default ListadoPacientes