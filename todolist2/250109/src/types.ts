export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
  categoryId: number;
};

export type currentFilterType = 'all' | 'incompleted' | 'completed';

export type categoryType = {
  id: number;
  title: string;
};
