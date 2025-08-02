import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  //Limpa a lista de horários
  hours.innerHTML = "";

  //Armazena os horários que não estão disponíveis.
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  // Passamos como parâmetro (com desestruturação de Objeto) a date (assim não precisamos nos preocupar com a ordem que passamos os param)
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora.
    const [scheduleHour] = hour.split(":"); // Desestrutura o horário pegando somente os valores antes de :
    //Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    //Define se o horário está disponível
    return {
      hour,
      available,
    };
  });

  // Renderiza os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    //Verifica qual o peíordo que precisa ser renderizado em header antes de adicionar o li.
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    }
    if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    }
    if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li); // Adiciona o li no final da lista de horas
  });

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}
