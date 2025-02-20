'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { IAiFeature } from '@/types';

const aiFeatures: IAiFeature[] = [
  {
    title: 'Vision AI를 통한 실시간 안전 감시체계',
    description: '제조산업, 건물, 매장 등 다양한 환경에서의 특정 카테고리를 설정하여\n 원하는 실시간 감시체계를 구축한다.',
    features: [
      '실시간 설비 누출, 화재, 작업자 안전관리',
      '낙상, 충돌, 사고, 방범 등 행동기반 안전관리',
      '가스, 유해물질 등 기체 기반 형상화 추적관리'
    ],
    imageUrl: '/images/vision1.webp',
    videoUrl: '/videos/vison1.mp4',
    alt: 'Vision AI 실시간 감지 시스템',
  },
  {
    title: '영상처리 기반 분석 지원',
    description: '행동인식 기반 기술로 주차, 쓰레기, 사고 등 환경에 대한 사용자 지정 이벤트 자동 분류와 매장의 상품, 소비자 패턴과 매출을 분석하여 마케팅 전략을 제시합니다.',
    features: [
      '원하는 유형에 대한 이벤트 자동분류',
      '소비자 행동패턴 분석을 통한 마케팅 제시',
      '다양한 환경에서의 영상기반 분석 툴 지원'
    ],
    imageUrl: '/images/safety-management.webp',
    videoUrl: '/videos/vison2.mp4',
    alt: '영상처리 기반 분석을 지원함.',
  },
  {
    title: 'LLM기반의 에너지 및 탄소배출량 관리',
    description: '제조산업, 건물 등 필요한 곳에 에너지 모니터링을 통한 Peak 관리 감시와\n 탄소배출량 관리를 지원하며, LLM을 통한 분석 및 관리 방향을 제시합니다.',
    features: [
      '개별 에너지 소비량 자동분류',
      '탄소배출량 측정 및 감축효과 제시',
      'LLM 기반 사용자가 원하는 리포트 및 관리 방향 분석'
    ],
    imageUrl: '/images/vison3.png',
    alt: 'LLM 기반의 에너지 및 탄소배출량 관리 시스템',
  },
  {
    title: '데이터 라벨링',
    description: '해외 라벨링 전문인력을 통해 기존 시장 대비 차별화된 단가와 납품기한,\n 국내 PM의 이중검수를 통한 품질 보증을 지원합니다.',
    features: [
      '다양한 라벨링 분류 가능',
      '영상, 이미지 등 프레임별 정확한 요구사항 수립',
      '전문 인력을 통한 2차 중복 검수로 품질 보증'
    ],
    imageUrl: '/images/vison4.png',
    alt: '데이터 라벨링 시스템',
  },
];


interface IAiFeatureSectionProps {
  index: number;
}

export function AiFeatureSection({ index }: IAiFeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const feature = aiFeatures[index];
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`w-full flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center justify-center gap-8 lg:gap-16 opacity-0 translate-y-10 transition-all duration-700`}
    >
      <div className="w-full lg:w-1/2 relative aspect-video">
        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          {feature.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={feature.videoUrl} type="video/mp4" />
              <Image
                src={feature.imageUrl}
                alt={feature.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </video>
          ) : (
            <Image
              src={feature.imageUrl}
              alt={feature.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {feature.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
          {feature.description}
        </p>
        <ul className="space-y-3">
          {feature.features.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 