# 测试分析页开发文档

## 核心目标详解

### 1. 测评体验

#### 内容展示
- 问题描述
  ```typescript
  interface Question {
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
  ```

- 选项设计
  - 单选题：圆形选择器
  - 量表题：滑动条
  - 选项布局：垂直排列
  - 选项间距：16px
  - 选项悬浮效果
  - 选中状态明显

- 页面布局
  ```css
  .question-container {
    @apply flex flex-col min-h-[60vh] justify-center items-center;
    @apply max-w-2xl mx-auto px-4 py-8;
    @apply animate-fadeIn;
  }
  ```

#### 交互设计
- 切换动效
  ```typescript
  const transitions = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };
  ```

- 手势操作
  ```typescript
  const swipeHandlers = useSwipe({
    onSwipeLeft: () => handleNext(),
    onSwipeRight: () => handlePrev(),
    threshold: 50,
  });
  ```

### 2. 进��控制

#### 进度展示组件
```typescript
interface ProgressBarProps {
  current: number;
  total: number;
  phase: {
    name: string;
    color: string;
  };
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  phase,
}) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="progress-container">
      <div 
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: phase.color,
        }}
      />
      <div className="progress-text">
        {phase.name} - {current}/{total}
      </div>
    </div>
  );
};
```

#### 导航控制
- 按钮设计
  ```css
  .nav-button {
    @apply px-6 py-3 rounded-full;
    @apply bg-primary text-white;
    @apply hover:bg-primary/90 transition-colors;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
  ```

- 键盘快捷键
  ```typescript
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentQuestion]);
  ```

### 3. 数据管理

#### 本地存储实现
```typescript
interface StorageManager {
  save: (key: string, data: any) => void;
  load: (key: string) => any;
  clear: (key: string) => void;
  
  // 自动保存配置
  autoSave: {
    interval: number;  // 保存间隔
    maxRetries: number;  // 最大重试次数
  };
}

const useStorage = () => {
  const storage = useMemo(() => {
    return {
      save: (key: string, data: any) => {
        try {
          localStorage.setItem(key, JSON.stringify({
            data,
            timestamp: Date.now(),
            version: '1.0',
          }));
        } catch (error) {
          console.error('Storage save failed:', error);
        }
      },
      // ... 其他方法实现
    };
  }, []);
  
  return storage;
};
```

#### 状态管理
```typescript
interface QuizState {
  currentQuestion: number;
  answers: Record<string, Answer>;
  progress: {
    phase: string;
    current: number;
    total: number;
  };
  metadata: {
    startTime: number;
    lastSaved: number;
    version: string;
  };
}

const useQuizState = () => {
  const [state, setState] = useState<QuizState>(initialState);
  const storage = useStorage();
  
  // 自动保存
  useEffect(() => {
    const saveInterval = setInterval(() => {
      storage.save('quiz-state', state);
    }, 30000); // 每30秒保存一次
    
    return () => clearInterval(saveInterval);
  }, [state]);
  
  // ... 其他状态管理逻辑
};
```

## 组件实现示例

### 1. 问题展示组件
```typescript:app/quiz/components/Question/index.tsx
interface QuestionProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  current: number;
  total: number;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  current,
  total,
}) => {
  return (
    <motion.div
      className="question-container"
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="question-title">
        {current}. {question.title}
      </h2>
      <div className="options-container">
        {question.options.map((option) => (
          <Option
            key={option.id}
            option={option}
            onSelect={() => onAnswer({ questionId: question.id, value: option.value })}
          />
        ))}
      </div>
    </motion.div>
  );
};
```

### 2. 进度条组件
```typescript:app/quiz/components/Progress/index.tsx
export const Progress: React.FC<ProgressProps> = ({
  current,
  total,
  phase,
}) => {
  const progress = useMemo(() => (current / total) * 100, [current, total]);
  
  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200">
      <div
        className="h-full bg-primary transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-4 left-4 text-sm text-gray-600">
        {phase} - {current}/{total}
      </div>
    </div>
  );
};
```

## 性能优化策略

### 1. 渲染优化
```typescript
// 使用React.memo避免不必要的重渲染
const Option = React.memo<OptionProps>(({ option, onSelect }) => {
  return (
    <button
      className="option-button"
      onClick={onSelect}
    >
      {option.text}
    </button>
  );
});

// 使用useMemo缓存计算结果
const progressPercentage = useMemo(() => {
  return calculateProgress(current, total);
}, [current, total]);
```

### 2. 数据加载优化
```typescript
// 预加载下一题数据
useEffect(() => {
  const nextQuestion = questions[currentIndex + 1];
  if (nextQuestion) {
    prefetchQuestion(nextQuestion.id);
  }
}, [currentIndex]);
```

## 测试用例示例

### 1. 组件测试
```typescript:app/quiz/components/__tests__/Question.test.tsx
describe('Question Component', () => {
  it('renders question correctly', () => {
    const question = {
      id: '1',
      title: '测试问题',
      options: [
        { id: '1', text: '选项1', value: 1 },
        { id: '2', text: '选项2', value: 2 },
      ],
    };
    
    const { getByText } = render(
      <Question
        question={question}
        onAnswer={jest.fn()}
        current={1}
        total={10}
      />
    );
    
    expect(getByText('测试问题')).toBeInTheDocument();
  });
});
```

### 2. 性能测试
```typescript:app/quiz/utils/__tests__/performance.test.ts
describe('Performance Tests', () => {
  it('renders questions within performance budget', async () => {
    const start = performance.now();
    
    render(<QuizContainer questions={mockQuestions} />);
    
    const end = performance.now();
    expect(end - start).toBeLessThan(100); // 100ms预算
  });
});
``` y'h'x