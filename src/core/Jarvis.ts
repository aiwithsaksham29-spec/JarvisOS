import { Conversation } from "./Conversation";
import { Memory } from "./Memory";
import { ChatMessage } from "../types/chat";

export class Jarvis {
  private conversation = new Conversation();
  private memory = new Memory();

  addMessage(message: ChatMessage) {
    this.conversation.add(message);
  }

  getConversation() {
    return this.conversation.getAll();
  }

  clearConversation() {
    this.conversation.clear();
  }

  remember(key: string, value: string) {
    this.memory.remember(key, value);
  }

  recall(key: string) {
    return this.memory.recall(key);
  }

  getMemory() {
    return this.memory.getAll();
  }
}

export const jarvis = new Jarvis();