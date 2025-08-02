import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    //Faz a Requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para Json
    const data = await response.json();

    // Filtra os agendamentos pelo dia selecionado.
    // Algumas Api's de verdade já enviam os dados filtrados.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    //Retona o valor de dailySchedules
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
    return []; // Retorna array vazio em caso de erro //IA
  }
}

//Aqui a gente vai puxar os dados registrados no banco de dados.
