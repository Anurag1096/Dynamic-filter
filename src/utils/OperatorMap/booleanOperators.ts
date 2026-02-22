export const booleanOperators: Record<string, (f: any, v: any) => boolean> = {
  is: (f, v) => f === v,
};