import { schedulesDay } from "./schedules/schedules-load.js";

document.addEventListener("DOMContentLoaded", function () {
  schedulesDay();
});

// DOMContentLoaded -> Quando todo o HTML foi carregadp e o DOM está pronto.
// window-load -> Quando tudo foi carregado, incluindo imagens, CSS, iframes etc.

//Quando usar?
// Sempre que seu script estiver no <head> ou em outro lugar acima do HTML que ele usa.
// Se não quiser depnder de <script defer> no HTML.
// Se estiver manipulando elementos da página logo no inínio.
