export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
  category: categoryType;
};

export type currentFilterType = 'all' | 'incompleted' | 'completed';

export type categoryType = 'work' | 'private';
