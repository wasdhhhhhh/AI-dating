const steps = [
  {
    id: '01',
    name: '开始测评',
    description: '点击按钮开始你的个性化情感测评之旅',
  },
  {
    id: '02',
    name: '回答问题',
    description: '完成精心设计的测评问题，大约需要5-10分钟',
  },
  {
    id: '03',
    name: '获得报告',
    description: '立即获得详细的个性化分析报告和建议',
  },
];

export default function Process() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">简单三步</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            快速开始你的情感测评
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <span className="text-lg font-bold text-white">{step.id}</span>
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-foreground/80">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 