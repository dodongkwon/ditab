'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { INavItem } from '@/types';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Menu } from 'lucide-react';
import Link from 'next/link';

const navItems: INavItem[] = [
  { label: '서비스 소개', href: '#', isModal: true },
  { label: '문의하기', href: '#contact', isButton: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 300;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md h-14' : 'bg-transparent h-20'
      }`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link
            href="/"
            className={`relative transition-all duration-300 ${
              isScrolled ? 'h-6 w-24' : 'h-8 w-32'
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="DITAB"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isButton ? (
                <Button
                  key={item.label}
                  variant="default"
                  className="bg-gradient-to-r from-[#F05523] to-[#D64A1E] hover:from-[#D64A1E] hover:to-[#B33F19] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </Button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => item.isModal && setIsServiceModalOpen(true)}
                  className={`transition-all duration-300 relative group ${
                    isScrolled ? 'text-gray-700 hover:text-[#F05523]' : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F05523] transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10"
          >
            <Menu className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`} />
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`md:hidden fixed inset-x-0 top-14 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              item.isButton ? (
                <Button
                  key={item.label}
                  variant="default"
                  className="w-full bg-gradient-to-r from-[#F05523] to-[#D64A1E] hover:from-[#D64A1E] hover:to-[#B33F19]"
                  asChild
                >
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </Button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.isModal) {
                      setIsServiceModalOpen(true);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-gray-700 hover:text-[#F05523] transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
        </div>
      </header>

      <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-2xl border-none bg-gradient-to-br from-white to-orange-50 shadow-[0_0_30px_10px_rgba(0,0,0,0.1)] animate-in fade-in-0 zoom-in-95 duration-300">
          <DialogHeader className="space-y-4 pb-2">
            <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-[#F05523] to-[#D64A1E] bg-clip-text text-transparent animate-in slide-in-from-top duration-300">
              서비스 리뉴얼 안내
            </DialogTitle>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#F05523] to-[#D64A1E] rounded-full animate-in slide-in-from-left duration-500" />
          </DialogHeader>
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 animate-in zoom-in duration-300">
              <svg 
                className="w-8 h-8 text-[#F05523]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div className="space-y-4 animate-in fade-in-50 duration-500 delay-200">
              <p className="text-gray-600 text-lg leading-relaxed">
                더 나은 서비스 제공을 위해
                <br />
                현재 리뉴얼 작업을 진행하고 있습니다.
              </p>
              <p className="text-[#F05523] font-medium animate-pulse">
                곧 새로운 모습으로 찾아뵙겠습니다.
              </p>
            </div>
            <Button 
              onClick={() => setIsServiceModalOpen(false)}
              className="mt-6 bg-gradient-to-r from-[#F05523] to-[#D64A1E] hover:from-[#D64A1E] hover:to-[#B33F19] text-white px-8 py-2 rounded-full transition-all duration-200 hover:shadow-lg animate-in slide-in-from-bottom duration-300"
            >
              확인
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 