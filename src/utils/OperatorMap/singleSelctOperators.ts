export const singleSelectOperators: Record<string, (f: any, v: any) => boolean> = {
  is: (f, v) => f === v,
  isNot: (f, v) => f !== v,
};