import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

function drawSnacks() {
  let template = "";
  let snacks = ProxyState.Snacks;
  console.log(ProxyState.Snacks);
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
