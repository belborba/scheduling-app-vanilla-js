import { schedulesDay } from "../schedules/schedules-load";

// Seleciona o input da data.
const selectedDate = document.getElementById("date");

// Recarrega a lista de horários quando o input de data mudar.
selectedDate.onchange = () => schedulesDay();
