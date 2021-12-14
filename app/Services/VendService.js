import { Credits } from "../Models/Credits.js";
import { ProxyState } from "../AppState.js";

class VendService {
  constructor() {
    console.log("Service loaded.");
  }

  addCredits() {
    let credits = ProxyState.credits;
    ProxyState.credits += 0.25;
  }
}

export const vendService = new VendService();
