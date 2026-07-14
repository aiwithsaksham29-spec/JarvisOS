export class Memory {
  private facts = new Map<string, string>();

  remember(key: string, value: string) {
    this.facts.set(key, value);
  }

  recall(key: string) {
    return this.facts.get(key);
  }

  clear() {
    this.facts.clear();
  }
}