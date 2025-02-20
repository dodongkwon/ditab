문의하기 섹션 기능명세서
1. 프론트엔드 기능명세서
문의하기 섹션
화면 구성

    "DITAB이 필요한 이유? 지금 문의하세요!" 문구 포함
    이름, 연락처, 문의 내용 입력 필드
    문의하기 버튼(CTA)
    최소한의 입력 필드로 간결한 UX 제공
    버튼 클릭 시 입력값 검증 후 백엔드 API 요청

컴포넌트 및 파일 구조

app/
├── dashboard/
│   ├── page.tsx  # 메인 페이지
│   ├── ContactSection.tsx  # 문의하기 섹션 컴포넌트
├── components/
│   ├── ui/
│   │   ├── input.tsx  # ShadCN 입력 필드 컴포넌트
│   │   ├── button.tsx  # ShadCN 버튼 컴포넌트
│   │   ├── textarea.tsx  # ShadCN 텍스트 입력 컴포넌트


사용 기술

    ShadCN 컴포넌트
        <Input /> (이름, 연락처)
        <Textarea /> (문의 내용)
        <Button /> (문의하기 버튼)

    TailwindCSS
        폼 스타일링 (flex flex-col gap-4 w-full max-w-lg mx-auto)
        입력 필드 스타일 (border border-gray-300 rounded-md p-3 w-full)
        폼 제출 버튼 스타일 (bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700)

UI 인터랙션

    문의하기 버튼 클릭 시 입력값 검증 (필수 필드 체크)
    유효하지 않은 값 입력 시 경고 메시지 표시 (붉은 테두리 및 에러 텍스트)
    성공적으로 제출되면 "문의가 접수되었습니다" 메시지 표시

2. 백엔드 기능명세서
API 정의

    API 엔드포인트: POST /api/contact
    파일 경로: app/api/contact/route.ts
    HTTP 메서드: POST
    요청(Request)


    {
  "name": "홍길동",
  "contact": "010-1234-5678",
  "message": "DITAB에 대해 문의하고 싶습니다."
}
응답(Response)

{
  "status": "success",
  "message": "문의가 접수되었습니다."
}

에러 응답

{
  "status": "error",
  "message": "모든 필드를 입력해주세요."
}


데이터베이스 연동

    문의 내용을 데이터베이스에 저장하거나, 관리자 이메일로 전송
    Drizzle ORM 사용 시 테이블 구조 (contact_messages 테이블 예시)


    export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});


3. 테스트 항목

    모든 입력 필드를 정상적으로 입력했을 때 문의가 성공적으로 제출되는가?
    필수 입력 필드를 누락했을 때 에러 메시지가 표시되는가?
    문의 요청이 API로 정상적으로 전송되는가?
    API 응답이 올바르게 처리되는가?
    성공 메시지가 올바르게 표시되는가?

