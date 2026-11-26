import { useState } from 'react';
import { crearMia } from '../api/solicitudes.js';
import SolicitudForm from '../components/SolicitudForm.jsx';
import Mensaje, { textoError } from '../components/Mensaje.jsx';

export default function Registro() {
  const [msg, setMsg] = useState(null);
  const [version, setVersion] = useState(0); // al cambiar, el formulario se vacía

  async function enviar(datos) {
    setMsg(null);
    try {
      const s = await crearMia(datos);
      setMsg({ tipo: 'ok', texto: 'Solicitud registrada. Tu código de seguimiento es ' + s.codigo_seguimiento + '.' });
      setVersion(v => v + 1);
    } catch (err) {
      setMsg({ tipo: 'error', texto: 'No se pudo registrar la solicitud. ' + textoError(err) });
    }
  }

  return (
    <main>
      <section className="tarjeta">
        <h1>Solicitud de apertura de cuenta</h1>
        <SolicitudForm key={version} textoBoton="Enviar solicitud" alEnviar={enviar} />
        <Mensaje {...msg} />
      </section>
    </main>
  );
}
