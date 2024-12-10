import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <div className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          AI智能情感测评
          <span className="block text-primary">找到最适合你的另一半</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          基于先进AI技术，深入分析你的性格特征和情感需求，
          帮助你更好地了解自己，找到真正契合的伴侣。
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <CTAButton />
        </div>
      </div>
    </div>
  );
} 