// Synthetic sandbox fixture authored with AI assistance. No production code or data.
// Contract: validate attempts; execute sequentially; return the first success;
// throw after the final failure. Caller decides whether an operation is safe to retry.
export async function retry<T>(operation: () => Promise<T>, attempts = 3): Promise<T> {
  if (!Number.isInteger(attempts) || attempts < 1) throw new RangeError("attempts must be a positive integer");
  for (let index = 0; index < attempts; index += 1) {
    try { return await operation(); }
    catch (error) { if (index === attempts - 1) throw error; }
  }
  throw new Error("Unreachable");
}
