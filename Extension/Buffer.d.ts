declare global {
  interface Buffer {
    createFile(): void;
  }
}
