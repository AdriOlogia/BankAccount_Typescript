import axios from "axios";


const get_users= async() =>{

  // usamos variables de entorno para la API ubicada en el .env.local
  const URL = "https://api.npoint.io/97d89162575a9d816661"

  try {

    // importamos axios para consumir la api
    const response = await axios.get(URL);
    const data = response.data
    const cuentas = response.data.cuentas
    const cuestas = response.data.cuestas

    // retornamos todos los datos de la api estructurados en un objeto
    return {
      data,
      cuentas,
      cuestas
    }

  } catch (error) {
    console.log(error);
    throw new Error( "no se pudo consumir la api correctamente" ) 
    
  }
}

export default get_users