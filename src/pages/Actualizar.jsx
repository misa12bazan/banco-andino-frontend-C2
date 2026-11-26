import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { obtenerMia, actualizarMia } from '../api/solicitudes.js';
import SolicitudForm from '../components/SolicitudForm.jsx';
import Mensaje, { textoError } from '../components/Mensaje.jsx';

export default function Actualizar() {
  const { id } = useParams();
  const [solicitud, setSolicitud] = useState(null);
  const [msg, setMsg] = useState(null);
  const [noExiste, setNoExiste] = useState(false);

  useEffect(() => {
    obtenerMia(id)
      .then(s => {
        setSolicitud(s);
        if (s.estado !== 'registrado') setMsg({ tipo: 'error', texto: 'Esta solicitud ya fue ' + s.estado + ' y no se puede editar (solo lectura).' });
      })
      .catch(err => {
        setNoExiste(true);
        setMsg({ tipo: 'error', texto: err.status === 404 ? 'No encontramos esa solicitud en tu cuenta.' : textoError(err) });
      });
  }, [id]);

  async function guardar(datos) {
    setMsg(null);
    try {
      await actualizarMia(id, datos);
      setMsg({ tipo: 'ok', texto: 'Cambios guardados.' });
    } catch (err) {
      setMsg({ tipo: 'error', texto: 'No se pudieron guardar los cambios. ' + textoError(err) });
    }
  }

  return (
    <main>
      <section className="tarjeta">
        <h1>Editar solicitud {solicitud && <span className="codigo">{solicitud.codigo_seguimiento}</span>}</h1>
        {solicitud && !noExiste && (
          <SolicitudForm inicial={solicitud} deshabilitado={solicitud.estado !== 'registrado'} textoBoton="Guardar cambios" alEnviar={guardar}>
            <Link className="btn sec" to="/consulta">Volver a mis solicitudes</Link>
          </SolicitudForm>
        )}
        <Mensaje {...msg} />
      </section>
    </main>
  );
}
