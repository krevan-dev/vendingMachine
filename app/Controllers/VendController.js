import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

export class VendController {
  constructor() {
    console.log("VendController loaded.");
  }

  addCredits() {
    vendService.addCredits();
    document.getElementById("cashMoney").innerText =
      ProxyState.credits.toFixed(2);
  }
}
