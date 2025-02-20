'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { IServiceFeature } from '@/types';

const features: IServiceFeature[] = [
  {
    icon: '🏭',
    title: '산업환경',
    description: '제조 산업에서 발생할 수 있는 사고에 대해 Vision AI 기반의 조기탐지를 통한 사고 예측 및 분석을 지원합니다.',
  },
  {
    icon: '🏢',
    title: '건물',
    description: '기존 CCTV를 활용하여 데이터를 실시간 분석, 사용자가 원하는 이벤트 분류를 통해 빠른 확인이 가능합니다.',
  },
  {
    icon: '🏪',
    title: '매장',
    description: '행동기반 AI 기술로 매장의 상품 진열, 매출, 마케팅 전략 등 방법을 제시합니다.',
  },
  {
    icon: '⚡',
    title: '에너지',
    description: '다양한 산업에서 소비되는 에너지와 탄소배출량을 측정하고 감축방안 제시, LLM을 통한 사용자 분석 도구를 지원합니다.',
  },
  {
    icon: '🧪',
    title: '기체 탐지',
    description: 'DITAB만의 핵심 기술로 화학산업 특화 설비 누출 실시간 형상화 탐지 및 추적기술을 통해 작업자의 안전을 보장합니다.',
  },
  {
    icon: '🏷️',
    title: '데이터 라벨링',
    description: '해외 협업하고 있는 라벨링 전문인력을 통해 동일 시장대비 획기적인 단가와 납품기한, 품질을 제공합니다.',
  },
];

export function ServiceFeatures() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          DITAB의 주요 서비스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 