export const numberOperators: Record<string, (f: any, v: any) => boolean> = {
  equals: (f, v) => f != null && v != null && Number(f) === Number(v),
  greaterThan: (f, v) => f != null && v != null && Number(f) > Number(v),
  lessThan: (f, v) => f != null && v != null && Number(f) < Number(v),
  gte: (f, v) => f != null && v != null && Number(f) >= Number(v),
  lte: (f, v) => f != null && v != null && Number(f) <= Number(v),
  between: (f, v) => {
    if (f == null || !Array.isArray(v) || v.length < 2) return true;
    return Number(f) >= Number(v[0]) && Number(f) <= Number(v[1]);
  },
};