import { vendService } from "../Services/VendService.js";

export class VendController {
  constructor() {
    console.log("VendController loaded.");
  }

  addCredits() {
    vendService.addCredits();
  }
}
