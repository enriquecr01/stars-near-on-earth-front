import { useEffect, useState } from "react";
import Swipe from "../components/Swipe";
import "../styles/home.css";
import RandomLoader  from "../components/RandomLoader";

export default function ScrapStars() {
  const [loading, setLoading] = useState(false);
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Evitar realizar una nueva solicitud si ya está en curso
      if (loading) {
        return;
      }

      if (systems.length > 0) {
        return;
      }


      try {
        // Marcar que la solicitud está en curso
        setLoading(true);

        // Realizar la solicitud con fetch
        const response = await fetch(`https://stars-near-on-earth.fly.dev/getStars`);

        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        // Convertir la respuesta a formato JSON
        const result = await response.json();

        // Actualizar el estado con los datos obtenidos
        setSystems(result);
      } catch (error) {
        // Manejar errores y actualizar el estado de error si es necesario
        console.log(error.message);
      } finally {
        // Marcar que la solicitud ha terminado, ya sea con éxito o con error
        setLoading(false);
      }
    };


    document.title = "Stars Near Earth";
    fetchData();
  }, []);

  return (
    <div>
      <div id="title">
        { loading && ( <RandomLoader /> ) }  
        { !loading && ( <Swipe systems={systems} /> ) }  
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}
