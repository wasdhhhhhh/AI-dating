export interface Question {
  id: string;
  type: 'single' | 'multiple' | 'scale';
  title: string;
  description?: string;
  options: Array<{
    id: string;
    text: string;
    value: number;
  }>;
  required: boolean;
}

export const questions: Question[] = [
  {
    id: '1',
    type: 'single',
    title: '你更倾向于哪种社交方式？',
    options: [
      { id: '1a', text: '大型社交场合', value: 1 },
      { id: '1b', text: '小群体聚会', value: 2 },
      { id: '1c', text: '一对一交流', value: 3 },
    ],
    required: true,
  },
  {
    id: '2',
    type: 'single',
    title: '在做决定时，你通常会？',
    options: [
      { id: '2a', text: '依靠直觉和感受', value: 1 },
      { id: '2b', text: '分析利弊后决定', value: 2 },
      { id: '2c', text: '参考他人意见', value: 3 },
    ],
    required: true,
  },
  {
    id: '3',
    type: 'scale',
    title: '你认为自己是一个善于表达感情的人吗？',
    description: '1表示非常不善于，5表示非常善于',
    options: [
      { id: '3a', text: '1', value: 1 },
      { id: '3b', text: '2', value: 2 },
      { id: '3c', text: '3', value: 3 },
      { id: '3d', text: '4', value: 4 },
      { id: '3e', text: '5', value: 5 },
    ],
    required: true,
  },
]; 