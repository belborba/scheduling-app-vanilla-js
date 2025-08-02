import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./schedules-load.js";
const periods = document.querySelectorAll(".period");

//Gera evento de clique para cada lista (manhã - tarde - noite)
periods.forEach((period) => {
  // Vai percorrer todos os elementos que tiverem a classe .period
  //Capturar o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //Obtem a li pai do elemento clicado.
      const item = event.target.closest("li");

      // Pega o id do agendamento para remover.
      const { id } = item.dataset;

      // Confirma se o usuário quer cancelar
      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay(); //Recarrega os agendamentos.
          console.log("Tá entrando aqui?");
        }
      }
    }
  });
});

//console.log(event.target.classList.contains("cancel-icon"))
