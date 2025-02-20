'use client';

import Link from "next/link"
import { Facebook, Instagram, LucideIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

interface IFooterLink {
  name: string
  href: string
}

interface INaverBlogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

interface ISocialLink {
  icon: LucideIcon | React.FC<INaverBlogProps>
  href: string
  name: string
}

const footerLinks: IFooterLink[] = [
  { name: "이용약관", href: "#" },
  { name: "개인정보처리방침", href: "#" },
  { name: "do@di-tab.com", href: "mailto:do@di-tab.com" },
  { name: "이메일무단수집거부", href: "/email-policy" },
]

// 네이버 블로그 아이콘 컴포넌트
const NaverBlog: React.FC<INaverBlogProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"
      fill="currentColor"
    />
  </svg>
)

const socialLinks: ISocialLink[] = [
  { 
    icon: NaverBlog, 
    href: "https://blog.naver.com/ditab",
    name: "네이버 블로그" 
  },
  { 
    icon: Facebook, 
    href: "https://facebook.com/your-page",
    name: "페이스북" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/ditab_official",
    name: "인스타그램" 
  },
]

interface ITermsContent {
  title: string
  content: string
}

const termsContent: ITermsContent[] = [
  {
    title: "이용약관",
    content: `
제1조 (목적)
본 약관은 주식회사 디탭(이하 "회사")이 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
1. "서비스"란 회사가 제공하는 모든 서비스를 의미합니다.
2. "회원"이란 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 개인 또는 법인을 말합니다.

제3조 (약관의 효력 및 변경)
1. 본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.
2. 회사는 약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.

제4조 (이용계약의 체결)
1. 이용계약은 회원이 되고자 하는 자가 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
2. 회사는 회원가입 신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다.`
  },
  {
    title: "개인정보 처리방침",
    content: `
제1조 (개인정보의 처리 목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다.
1. 서비스 제공 및 계약의 이행
2. 회원 관리 및 서비스 이용 편의 제공
3. 신규 서비스 개발 및 마케팅·광고에의 활용

제2조 (개인정보의 처리 및 보유기간)
회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

제3조 (처리하는 개인정보 항목)
회사는 다음의 개인정보 항목을 처리하고 있습니다.
1. 필수항목: 이름, 이메일 주소, 비밀번호
2. 선택항목: 연락처, 회사명, 직책
3. 자동수집항목: IP주소, 쿠키, 서비스 이용기록

제4조 (개인정보의 제3자 제공)
회사는 정보주체의 별도 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

제5조 (정보주체의 권리·의무 및 행사방법)
정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
1. 개인정보 열람요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제요구
4. 처리정지 요구

제6조 (개인정보의 안전성 확보조치)
회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
1. 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육
2. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
3. 물리적 조치: 전산실, 자료보관실 등의 접근통제

제7조 (개인정보 보호책임자)
회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
- 성명: 도현우
- 직책: 대표이사
- 연락처: do@di-tab.com

제8조 (개인정보 처리방침의 변경)
이 개인정보 처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.`
  }
]

export function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTerms, setSelectedTerms] = useState<ITermsContent | null>(null)

  const handleTermsClick = (title: string) => {
    const terms = termsContent.find(t => t.title === title)
    if (terms) {
      setSelectedTerms(terms)
      setIsDialogOpen(true)
    }
  }

  return (
    <>
      <footer className="bg-[#F8F9FA] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold">DITAB</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="mb-4">(주)디탭</p>
                <p>대표이사: 도현우</p>
                <p>사업자등록번호: 478-81-03214</p>
                <p>법인등록번호: 230111-0408376</p>
                <p>산업디자인전문회사: 제 19278 호</p>
                <p>주소: 울산광역시 남구 테크노산업로55번길 79-10, A동 403호 디탭</p>
              </div>
            </div>

            {/* 링크 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold">바로가기</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name} className={`${
                    link.name === "do@di-tab.com" ? "-mt-1" : ""
                  }`}>
                    {link.name === "이용약관" || link.name === "개인정보처리방침" ? (
                      <button
                        onClick={() => handleTermsClick(link.name)}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 소셜 미디어 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold">소셜 미디어</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label={`${social.name} 바로가기`}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 카피라이트 */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} DITAB Co., Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {selectedTerms?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 whitespace-pre-line text-sm text-gray-600 leading-relaxed">
            {selectedTerms?.content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}