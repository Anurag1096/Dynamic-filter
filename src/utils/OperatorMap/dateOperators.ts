


const dateOperators: Record<string, (f: any, v: any) => boolean> = {
  equals: (f, v) => f != null && v != null && new Date(f).getTime() === new Date(v).getTime(),
  before: (f, v) => f != null && v != null && new Date(f).getTime() < new Date(v).getTime(),
  after: (f, v) => f != null && v != null && new Date(f).getTime() > new Date(v).getTime(),
  between: (f, v) => {
    if (f == null || !Array.isArray(v) || v.length < 2) return true;
    const time = new Date(f).getTime();
    return time >= new Date(v[0]).getTime() && time <= new Date(v[1]).getTime();
  },
};
export default dateOperators