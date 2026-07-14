import { store } from "./store";

const KEY = "chat-history";

export function saveChat(messages: any[]) {
  store.set(KEY, messages);
}

export function loadChat() {
  return (store.get(KEY) as any[]) || [];
}

export function clearChat() {
  store.delete(KEY);
}