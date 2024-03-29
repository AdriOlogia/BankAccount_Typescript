// Generated by CodiumAI

import axios from "axios";
import get_users from "./get_users";

describe('get_users', () => {

});

    // Pruebe que la función get_users devuelve un objeto con las propiedades 'data', 'cuentas' y 'cuestas' cuando la API sea exitosa.
    it('debería devolver un objeto con propiedades de datos, cuentas y cuestas cuando la llamada API sea exitosa', () => {
      // Mock the axios.get method
      axios.get = jest.fn().mockResolvedValue({ data: { cuentas: [], cuestas: [] } });

      // llamamos la funcion getusers
      const result = get_users();

      // confimar que el resultado tiene las con propiedades 'datos', 'cuentas' y 'cuestas'
      expect(result).toEqual(expect.objectContaining({
        data: expect.any(Object),
        cuentas: expect.any(Array),
        cuestas: expect.any(Array)
      }));
    });


    // Pruebe que la función arroje un error cuando la URL de la API no sea válida o no esté disponible.
    it('Pruebe que la función arroje un error cuando la URL de la API no sea válida o no esté disponible.', () => {
      // se simula el error de la api
      jest.spyOn(axios, 'get').mockRejectedValue(new Error('API URL no es valida'));
      const result = get_users();

      // expectativa que de ocurrio el error
      expect(result).rejects.toThrowError('no se pudo consumir la api correctamente');
    });


    //Pruebe que la función get_users recupere exitosamente datos de la API y devuelva un objeto con todos los datos, incluidas cuentas y cuestas.
    it('debe recuperar datos de la API y devolver el objeto con todos los datos', async () => {
      axios.get = jest.fn().mockResolvedValue({ data: { cuentas: [], cuestas: [] } });
      const result = await get_users();

      //se verifica la url al llamarla con axios
      expect(axios.get).toHaveBeenCalledWith(import.meta.env.VITE_URL_API);

      // Compruebe si el resultado es un objeto con las propiedades correctas.
      expect(result).toEqual({ data: { cuentas: [], cuestas: [] }, cuentas: [], cuestas: [] });
    });

    // Pruebe que la función 'get_users' arroje un error cuando los tipos de datos de respuesta no es la esperada.
    it('debería arrojar un error cuando los tipos de datos de respuesta no es la esperada', () => {
      axios.get = jest.fn().mockResolvedValue({
        data: {
          cuentas: "unexpected",
          cuestas: "unexpected"
        }
      });
    // Llama a la función get_users y espera que arroje un error
      expect(get_users()).rejects.toThrowError("no se pudo consumir la api correctamente");
    });


    it('debe devolver un objeto sin cuentas ni cuestas cuando los datos de respuesta no contienen esas propiedades', () => {
     
      axios.get = jest.fn().mockResolvedValue({ data: {} });
      const result = get_users();

      // Afirma que el resultado es un objeto sin cuentas ni cuestas
      expect(result).toEqual({ data: {}, cuentas: undefined, cuestas: undefined });
    });


    it('debería registrar un error cuando falla la llamada API', () => {
      // Simula la función axios.get para generar un error
      jest.spyOn(axios, 'get').mockRejectedValue(new Error('API call failed'));

      const consoleSpy = jest.spyOn(console, 'log');
      get_users();
      // Espera que se llame a console.log con el mensaje de error
      expect(consoleSpy).toHaveBeenCalledWith(new Error('API call failed'));
    });

