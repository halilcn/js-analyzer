import Table from 'cli-table';

export const renderTables = (allTables: Table[]): void => {
  allTables.forEach((table) => {
    console.log(table.toString());
  });
};
