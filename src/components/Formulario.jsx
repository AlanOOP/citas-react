import React, {useState, useEffect} from 'react'
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente , setPaciente}) => {
  
  //Funcion para cambiar el nombre
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);
  
  //Use effect
  useEffect(() =>{
    if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
    }
    }, [paciente]); // Dependencias  


  //Generad Id unico para cada empleado

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  //Funcion submit del formulario 
  const handleSubmit = (e) => {

    e.preventDefault();
    
    //Validación del formulario

    if([nombre, propietario, email, fecha, sintomas].includes('')){
      // console.log('Campos Vacios...');
      setError(true);
      return;
      // console.log(error);
    }else{
      setError(false);
    }


    // Objeto de paciente

    const objetoPaciente ={
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      
    }
    if(paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacienteActualizado =  pacientes.map(pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente: pacienteState);
        setPacientes(pacienteActualizado);
        setPaciente({});

    }else{
      //Nuevo Registro
      //Funcion para agregar un nuevo elemento al arreglo y no sobreescribir
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }  

    // console.log(objetoPaciente);

    // Reinicia el Formulario
    setNombre('');
    setEmail('');
    setFecha('');
    setPropietario('');
    setSintomas('');
    
  }
  
  return (

    <div className='md:w-1/2 lg:w-2/5 mx-5'>

        <div className='border-4 mb-2 rounded-lg border-gray-200 shadow-xl pb-0 pt-2'>
          <h2 className='font-black text-3xl text-center '>Seguimiento de pacientes</h2>

          <p className='text-xl mt-5 text-center mb-10'>
              Añade Pacientes y {''}
              <span className='text-indigo-600 font-bold'>Administralos</span>
          </p>

        </div>

        <form
          onSubmit={handleSubmit} 
          className='bg-white shadow-lg rounded-lg py-10 px-5 mb-10'>

          {/* mostrar error en desde componente Error */}
          {error && <Error> <p>Todos los campos son Obligatorios</p> </Error>}
            
            <div className='mb-5'>
              
              <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                Nombre Mascota :</label>

              <input id='mascota' 
                type="text" 
                placeholder='Nombre de la Mascota'
                className='border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='Propietario' className='block text-gray-700 uppercase font-bold'>
                Nombre Propietario :</label>

              <input id='Propietario' 
                type="text" 
                placeholder='Nombre del Propietario'
                className='border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                Nombre email :</label>

              <input id='email' 
                type="email" 
                placeholder='Email Contacto Propietario'
                className='border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                Fecha Alta :</label>

              <input id='alta' 
                type="date" 
                placeholder='alta Contacto Propietario'
                className='border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={fecha}
                onChange={(e)=> setFecha(e.target.value)}
              />
            </div>
            
            <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                Síntomas :</label>

              <textarea 
                id="sintomas" 
                placeholder='Describe los Sintomas'
                className='border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md'  
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)}
              >
              </textarea>
            </div>

            <input 
              type="submit" 
              className='bg-green-600 w-full p-3 text-white uppercase font-bold 
              hover:bg-green-700 cursor-pointer transition-colors rounded-md'
              value={paciente.id ? 'Editar Paciente'  : 'Agregar paciente'}
              
            />

        </form>
    </div>
  )
}

export default Formulario