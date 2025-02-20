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
  { name: "이용약관", href: "/terms" },
  { name: "개인정보처리방침", href: "/privacy" },
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
    href: "https://blog.naver.com/your-blog",
    name: "네이버 블로그" 
  },
  { 
    icon: Facebook, 
    href: "https://facebook.com/your-page",
    name: "페이스북" 
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/your-account",
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
2. 회사는 회원가입 신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다.
    `
  },
  {
    title: "개인정보 처리방침",
    content: `
제1조 (개인정보의 처리 목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다.
1. 서비스 제공
2. 회원 관리
3. 마케팅 및 광고 활용

제2조 (개인정보의 처리 및 보유기간)
1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
   - 회원 가입 및 관리: 회원 탈퇴 시까지
   - 마케팅 및 광고에의 활용: 동의 철회 시까지

제3조 (정보주체의 권리·의무 및 행사방법)
1. 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
   - 개인정보 열람요구
   - 오류 등이 있을 경우 정정 요구
   - 삭제요구
   - 처리정지 요구
    `
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
                {footerLinks.map((link, index) => (
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
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
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
            <DialogTitle>{selectedTerms?.title}</DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-line text-sm text-gray-600">
            {selectedTerms?.content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 