import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

function _drawSnacks() {
  const snacks = ProxyState.Snack;
  let template = "";
  snacks.forEach((s) => (template += s.Template));
  document.getElementById("selections").innerHTML = template;
}

export class VendController {
  constructor() {
    console.log("VendController loaded.");
    _drawSnacks();
  }

  addCredits() {
    vendService.addCredits();
    document.getElementById("cashMoney").innerText =
      ProxyState.credits.toFixed(2);
  }
}
