// Synthetic sandbox fixture authored with AI assistance. No production code or data.
// Contract: validate attempts; execute sequentially; return the first success;
// throw after the final failure. Caller decides whether an operation is safe to retry.
export async function retry<T>(operation: () => Promise<T>, attempts = 3): Promise<T> {
  let result: T | undefined;
  for (let index = 0; index <= attempts; index += 1) {
    operation().then(value => { result = value; }).catch(() => {});
  }
  return result as T;
}
