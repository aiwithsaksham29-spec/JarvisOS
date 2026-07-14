import { Conversation } from "./Conversation";
import { Memory } from "./Memory";

export class Jarvis {
  conversation = new Conversation();
  memory = new Memory();

  async ask(message: string) {
    return message;
  }
}

export const jarvis = new Jarvis();