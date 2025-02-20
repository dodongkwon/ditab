1단계: 헤더 및 히어로 섹션 기능명세서

1. 프론트엔드 기능명세서
헤더
화면 구성

    상단 고정(Fixed Header)
    로고 영역 (DITAB 로고)
    내 프로젝트, 서비스 소개, 문의하기 버튼 포함
    문의하기 버튼은 CTA 역할로 강조

컴포넌트 및 파일 구조

app/
├── layout.tsx  # 레이아웃 컴포넌트 (헤더 포함)
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # 헤더 컴포넌트
│   │   ├── Navbar.tsx  # 네비게이션 바 컴포넌트
│   ├── ui/
│   │   ├── button.tsx  # ShadCN 버튼 컴포넌트
│   │   ├── link.tsx  # 네비게이션 링크 컴포넌트


사용 기술

    ShadCN 컴포넌트
        <Button /> (문의하기 버튼)
        <Link /> (내 프로젝트, 서비스 소개)

    TailwindCSS
        상단 고정 (fixed top-0 left-0 w-full)
        배경 투명(bg-transparent) → 스크롤 시 bg-white shadow-md 변경
        flexbox를 활용한 정렬 (flex justify-between items-center)

UI 인터랙션

    사용자가 스크롤하면 배경색이 투명 → 흰색으로 변경 (스크롤 감지 이벤트)
    문의하기 버튼은 기본 색상(#0047FF), 호버 시 어두운 블루(#003ACC)로 변경

히어로 섹션
화면 구성

    메인 메시지: "세상을 바라보는 또 다른 눈, DITAB"
    서브텍스트: "Vision AI 기반 데이터 분석 및 기체 탐지 솔루션"
    CTA 버튼(문의하기) 포함
    배경 이미지 또는 애니메이션 효과 적용

컴포넌트 및 파일 구조

app/
├── dashboard/
│   ├── page.tsx  # 메인 페이지
│   ├── HeroSection.tsx  # 히어로 섹션 컴포넌트
├── components/
│   ├── ui/
│   │   ├── button.tsx  # ShadCN 버튼 컴포넌트
│   │   ├── text.tsx  # 텍스트 스타일링 컴포넌트

사용 기술

    ShadCN 컴포넌트
        <Button /> (CTA 버튼)
        <Text /> (메인 메시지 및 서브텍스트)

    TailwindCSS
        큰 타이틀(text-4xl font-bold)
        중앙 정렬(flex flex-col items-center text-center)
        배경에 Blur 효과 및 투명도 적용

UI 인터랙션

    CTA 버튼 클릭 시 문의하기 섹션으로 부드럽게 스크롤 (scrollIntoView)
    애니메이션 적용: Hero 섹션이 화면에 나타날 때 fade-in 효과

2. 백엔드 기능명세서

(해당 기능에서는 별도의 백엔드 연동이 필요 없음, 이후 문의하기 기능에서 API 연동 진행)
3. 테스트 항목

    헤더가 상단 고정(Fixed)으로 유지되는가?
    스크롤 시 배경색이 투명 → 흰색으로 변경되는가?
    네비게이션 링크가 올바르게 동작하는가?
    히어로 섹션의 CTA 버튼 클릭 시 문의하기 섹션으로 이동하는가?
    Hero 섹션의 Fade-in 애니메이션이 자연스럽게 실행되는가?