export class Memory {
  private facts = new Map<string, string>();

  remember(key: string, value: string) {
    this.facts.set(key.toLowerCase(), value);
  }

  recall(key: string) {
    return this.facts.get(key.toLowerCase());
  }

  has(key: string) {
    return this.facts.has(key.toLowerCase());
  }

  getAll() {
    return Object.fromEntries(this.facts);
  }

  clear() {
    this.facts.clear();
  }
}