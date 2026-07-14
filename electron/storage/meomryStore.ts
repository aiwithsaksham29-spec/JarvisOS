import { store } from "./store";

const KEY = "memory";

export function saveMemory(memory: Record<string, string>) {
  store.set(KEY, memory);
}

export function loadMemory() {
  return (store.get(KEY) as Record<string, string>) || {};
}

export function clearMemory() {
  store.delete(KEY);
}