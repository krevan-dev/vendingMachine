import { ProxyState } from "../AppState";

class VendService {
  constructor() {
    console.log("Service loaded.");
  }

  addCredits() {
    let credits = ProxyState.credits;
  }
}

export const vendService = new VendService();
