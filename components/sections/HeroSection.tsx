'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 300;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 비디오 배경 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* 다크 오버레이 */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 콘텐츠 */}
      <div className="container relative mx-auto px-4 py-20 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          세상을 바라보는 또 다른 눈
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          산업, 건물, 매장 등 기타 환경에서 우리가 바라보지 못한 것들에 대해 데이터 기반의 원하는 분석을 할 수 있습니다.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-[#F05523] hover:bg-[#D64A1E] text-lg px-8 py-6"
        >
          문의하기
        </Button>
      </div>
    </section>
  );
} 