import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

function drawSnacks() {
  let template = "";
  let snacks = ProxyState.Snack;
  console.log(ProxyState.Snack);
}

export class VendController {
  constructor() {
    console.log("VendController loaded.");
    drawSnacks();
  }

  addCredits() {
    vendService.addCredits();
    document.getElementById("cashMoney").innerText =
      ProxyState.credits.toFixed(2);
  }
}
