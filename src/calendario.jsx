import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

 function CalendarDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold mb-4">📅 Calendario</h2>

      <div className="rounded-2xl shadow-lg border bg-white p-4">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="text-gray-800"
        />
      </div>

      {selected && (
        <p className="mt-4 text-lg font-medium">
          Fecha seleccionada:{" "}
          <span className="text-blue-600">{selected.toDateString()}</span>
        </p>
      )}
    </div>
  );
}
 
export default CalendarDemo;