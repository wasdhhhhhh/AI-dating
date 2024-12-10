const features = [
  {
    name: 'AI智能分析',
    description: '运用先进的AI算法，深入分析你的性格特征和情感需求',
  },
  {
    name: '科学测评体系',
    description: '基于心理学理论构建的专业测评体系，确保结果的科学性',
  },
  {
    name: '即时获得结果',
    description: '完成测评后立即生成个性化报告，帮助你更好地了解自己',
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">为什么选择我们</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            科学的情感测评系统
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            我们致力于通过科技创新，帮助每个人找到真正适合自己的另一半
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-foreground/80">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 