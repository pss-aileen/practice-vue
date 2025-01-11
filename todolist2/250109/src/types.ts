export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
  categoryId: number;
};

export type currentFilterType = string | number;

export type categoryType = {
  id: number;
  title: string;
};
