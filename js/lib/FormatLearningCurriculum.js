export const formatLearningCurriculumData = allSubjects => {
  return allSubjects
    .reduce((acc, curr) => {
      const subjectExists = acc.find(subject => subject.title === curr.subject);
      subjectExists
        ? subjectExists.data.push(curr)
        : acc.push({ title: curr.title, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};
