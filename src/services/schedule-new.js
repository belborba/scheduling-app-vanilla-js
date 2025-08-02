import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  //Usando objeto como parâmetro para não perder tempo caçando a ordem das propriedade que precisam ser passadas
  try {
    //Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      //Rota da requisição
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    }); //Pegando dinamicamente o endereço da api e adicionando o recurso

    //Exibe mensagem de agendamento realizado.
    alert("Agendamento realizado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}
