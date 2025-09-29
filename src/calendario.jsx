import { useState } from "react";
import Calendar from "react-calendar";
import "./App.css"; // nuestro css extra

export default function Calendario() {
  const [value, setValue] = useState(new Date(2025, 8, 1)); // septiembre 2025
  const [reminders, setReminders] = useState([]);
  const [time, setTime] = useState("20:00");

  const handleAddReminder = () => {
    setReminders([...reminders, { date: value, time }]);
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Calendario en el centro */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">SEPTIEMBRE 2025</h2>
        <Calendar
          value={value}
          onChange={setValue}
          defaultView="month"
          activeStartDate={new Date(2025, 8, 1)} // septiembre fijo
          tileContent={({ date, view }) => {
            if (view === "month") {
              const dateStr = date.toISOString().split("T")[0];
              return (
                <>
                  {/* Eventos fijos */}
                  {dateStr === "2025-09-02" && (
                    <div className="event">Día del ejército</div>
                  )}
                  {dateStr === "2025-09-14" && (
                    <div className="event">Batalla de San Jacinto</div>
                  )}
                  {dateStr === "2025-09-15" && (
                    <div className="event">Independencia</div>
                  )}
                  {dateStr === "2025-09-16" && (
                    <div className="event">Batalla de San Jacinto</div>
                  )}

                  {/* Recordatorios agregados */}
                  {reminders
                    .filter(
                      (r) => new Date(r.date).toDateString() === date.toDateString()
                    )
                    .map((r, i) => (
                      <div key={i} className="reminder">
                        {r.time}
                      </div>
                    ))}
                </>
              );
            }
          }}
        />
      </div>

      {/* Panel derecho para recordatorios */}
      <aside className="w-64 bg-gray-200 p-4">
        <h3 className="font-bold mb-2">Añadir Recordatorio</h3>
        <div className="mb-2">
          <label className="block text-sm mb-1">Fecha seleccionada:</label>
          <input
            type="text"
            value={value.toDateString()}
            readOnly
            className="w-full border px-2 py-1 rounded bg-gray-100"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm mb-1">Hora:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <button
          onClick={handleAddReminder}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Guardar
        </button>
      </aside>
    </div>
  );
}
