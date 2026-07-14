import { ChatMessage } from "../types/chat";

export class Conversation {
  private messages: ChatMessage[] = [];

  add(message: ChatMessage) {
    this.messages.push(message);
  }

  getAll() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}