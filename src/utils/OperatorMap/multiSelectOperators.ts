// MultiSelect operators (handles array or single field)

export const multiSelectOperators: Record<string, (f: any, v: any) => boolean> = {
  in: (f, v) => Array.isArray(v) && f != null && (Array.isArray(f) ? f.some((val) => v.includes(val)) : v.includes(f)),
  notIn: (f, v) => Array.isArray(v) && f != null && (Array.isArray(f) ? f.every((val) => !v.includes(val)) : !v.includes(f)),
};