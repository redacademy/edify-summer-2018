import moment from 'moment';

export const formatUpdatesData = updates => {
  return updates
    .reduce((acc, curr) => {
      const dateExists = acc.find(
        update => update.title === moment(curr.created).format('MMMM YYYY'),
      );
      dateExists
        ? dateExists.data.push(curr)
        : acc.push({
            title: moment(curr.created).format('MMMM YYYY'),
            data: [curr],
          });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};
