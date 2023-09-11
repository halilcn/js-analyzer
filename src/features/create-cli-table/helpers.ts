export const normalizeRows = (data: object): object[] => Object.entries(data)
  .reduce((acc: object[], [key, value]) => ([...acc, { [key]: value }]), []);
