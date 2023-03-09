interface IObject {
  date: Date;
}

export function sortByDate(a: IObject, b: IObject) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return dateA > dateB ? 1 : -1;
}
