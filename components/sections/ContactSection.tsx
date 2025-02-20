'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { IContactForm } from '@/types';

interface IFormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<IContactForm>({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = (): boolean => {
    const newErrors: IFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요.';
    } else if (!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(formData.phone)) {
      newErrors.phone = '올바른 연락처 형식이 아닙니다. (예: 010-1234-5678)';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '문의 내용을 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 임시로 성공 메시지 표시 (추후 API 연동)
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: '문의가 접수되었습니다. 빠른시일안에 연락 드리겠습니다.',
      });
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 에러 메시지 초기화
    if (errors[name as keyof IFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div id="contact" className="w-full">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          당신이 바라던 비전을 제공합니다.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Vision AI의 시각을 경험해보세요!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              이름
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="홍길동"
              className={`w-full ${
                errors.name ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              연락처
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="010-0000-0000"
              className={`w-full ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              문의 내용
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="문의하실 내용을 입력해주세요."
              className={`min-h-[150px] ${
                errors.message ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {submitStatus.type && (
            <div
              className={`p-4 rounded-md ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F05523] hover:bg-[#D64A1E] text-lg py-6 disabled:opacity-50"
          >
            {isSubmitting ? '처리 중...' : '문의하기'}
          </Button>
        </form>
      </div>
    </div>
  );
} 