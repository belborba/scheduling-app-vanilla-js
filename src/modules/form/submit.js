import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/schedules-load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Data atual para formartar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday; // Data mínima que pode ser selecionada

form.onsubmit = async (event) => {
  //Previne o comportamento padrão de carregar a página.
  event.preventDefault();

  try {
    // Recupera o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente");
    }

    const hourSelected = document.querySelector(".hour-selected");

    // Recupera o horário selecionado
    if (!hourSelected) {
      return alert("Selecione um horário");
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Insere um id
    const id = new Date().getTime();

    // Passamos a função schduleNew
    await scheduleNew({ id, name, when }); //Como a função scheduleNew é assíncrona temos que definir que onsubmit seja assícrono também.

    // Recarrega os agendamentos
    await schedulesDay();

    //Limpa o input de nome do cliente.
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
  }
};
