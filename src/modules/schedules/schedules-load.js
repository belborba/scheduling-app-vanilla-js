import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show-schedules.js";

// Seleciona o input da data.
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  //Obtem a data do input
  const date = selectedDate.value;

  //Pga os agendamento retornados da API
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentos -> estamos repassando os valores de dailySchedules dentro da função que vai renderizar esses valores na tela.
  schedulesShow({ dailySchedules });

  //Renderiza as horas disponíveis e passamos os agendamentos para extrair os horários agendados.
  hoursLoad({ date, dailySchedules });
}
// Buscar na API os agendamentos para carregar do lado direito da tela.
// Os horários disponíveis do lado direito. (form)
// Temos que levar em consideração que não pode usar horários passado e horário que já está agendado.
