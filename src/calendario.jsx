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
    <div style={{ display: 'flex', background: '#f3f1ea', minHeight: '100vh', alignItems: 'flex-start', justifyContent: 'center', gap: 40, padding: 40 }}>
      {/* Calendario */}
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 24, minWidth: 370 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 16 }}>SEPTIEMBRE 2025</h2>
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
      {/* Añadir Recordatorio al lado */}
      <aside style={{ width: 260, background: '#f5e9e6', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 24, marginTop: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: 20 }}>Añadir Recordatorio</h3>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block', fontSize: 15, marginBottom: 4 }}>Fecha seleccionada:</label>
          <input
            type="text"
            value={value.toDateString()}
            readOnly
            style={{ width: '100%', border: '1px solid #bbb', padding: '6px 8px', borderRadius: 6, background: '#222', color: '#fff', fontSize: 15 }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block', fontSize: 15, marginBottom: 4 }}>Hora:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ width: '100%', border: '1px solid #bbb', padding: '6px 8px', borderRadius: 6, fontSize: 15 }}
          />
        </div>
        <button
          onClick={handleAddReminder}
          style={{ background: '#8b5c5c', color: '#fff', width: '100%', padding: '10px 0', borderRadius: 20, fontWeight: 600, fontSize: 17, border: 'none', marginTop: 8, cursor: 'pointer' }}
        >
          Guardar
        </button>
      </aside>
    </div>
  );
}
