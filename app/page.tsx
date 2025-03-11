import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { AiFeatureSection } from '@/components/sections/AiFeatureSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero 섹션 */}
      <section className="min-h-screen">
        <HeroSection />
      </section>
      
      {/* 서비스 소개 섹션 */}
      <section className="min-h-[70vh] bg-secondary/30 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <ServiceFeatures />
        </div>
      </section>
      
      {/* AI 기능 소개 섹션 - Vision AI */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <AiFeatureSection index={0} />
        </div>
      </section>

      {/* AI 기능 소개 섹션 - 행동 기반 안전관리 */}
      <section className="min-h-[70vh] bg-secondary/30 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <AiFeatureSection index={1} />
        </div>
      </section>

      {/* AI 기능 소개 섹션 - 기체 누출 감지 */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <AiFeatureSection index={2} />
        </div>
      </section>

      {/* AI 기능 소개 섹션 - 데이터 라벨링 */}
      <section className="min-h-[70vh] bg-secondary/30 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <AiFeatureSection index={3} />
        </div>
      </section>
      
      {/* AI 기능 소개 섹션 - 산업안전보건 관리 */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <AiFeatureSection index={4} />
        </div>
      </section>
      
      {/* 문의하기 섹션 */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
