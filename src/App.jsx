import NewRequestForm from "./components/NewRequestForm";
import RequestList from "./components/RequestList";
import RequestCounter from "./components/RequestCounter";
import { useRequests } from "./hooks/useRequests";

export default function App() {
  const { requests, addRequest, toggleRequest } = useRequests();

  return (
    <>
      <header>
        <h1>Solicitudes de Talento Humano</h1>
        <p className="subtitle">Todo lo que llega al área</p>
      </header>

      <main>
        <NewRequestForm onAdd={addRequest} />

        {/* controles de la lista */}

        <RequestList requests={requests} onToggle={toggleRequest} />
        <RequestCounter requests={requests} />
      </main>

      <footer>
        <p id="credits">Hecho por Nicolas Castaño</p>
        <p className="version">Versión 1.0.1</p>
      </footer>
    </>
  );
}
