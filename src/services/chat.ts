export async function askJarvis(message: string) {
  return window.jarvis.chat(message);
}