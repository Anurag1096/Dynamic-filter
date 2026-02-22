import type { Employee } from "../types/employType";

export const textOperators: Record<string, (f: string, v: Employee) => boolean> = {
  equals: (f, v) => f != null && v != null && String(f).toLowerCase() === String(v).toLowerCase(),
  contains: (f, v) => f != null && v != null && String(f).toLowerCase().includes(String(v).toLowerCase()),
  startsWith: (f, v) => f != null && v != null && String(f).toLowerCase().startsWith(String(v).toLowerCase()),
  endsWith: (f, v) => f != null && v != null && String(f).toLowerCase().endsWith(String(v).toLowerCase()),
  doesNotContain: (f, v) => f != null && v != null && !String(f).toLowerCase().includes(String(v).toLowerCase()),
};