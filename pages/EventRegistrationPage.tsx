import React, { useState, FormEvent } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { events } from '../data';

export const EventRegistrationPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = events.find(e => e.id === eventId);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { name: '', email: '', phone: '' };
    let isValid = true;
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Địa chỉ email không hợp lệ.';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Submitted data:', formData);
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-brand-brown-50 px-4">
        <div className="text-center bg-white p-8 sm:p-12 rounded-lg shadow-xl max-w-lg w-full">
          <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-serif font-bold text-brand-brown-900 mb-4">Đăng Ký Thành Công!</h1>
          <p className="text-brand-brown-800 mb-2">Cảm ơn bạn đã đăng ký tham gia sự kiện:</p>
          <p className="text-brand-brown-800 font-semibold text-lg mb-6">"{event.title}"</p>
          <p className="text-sm text-brand-brown-600">Chúng tôi đã gửi thông tin xác nhận đến email <span className="font-medium text-brand-brown-800">{formData.email}</span> của bạn.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="w-full sm:w-auto bg-brand-brown-800 text-white font-bold py-3 px-6 rounded-md hover:bg-brand-brown-900 transition-colors duration-300">
              Quay về trang chủ
            </Link>
            <Link to="/events" className="w-full sm:w-auto bg-transparent border-2 border-brand-brown-700 text-brand-brown-700 font-bold py-3 px-6 rounded-md hover:bg-brand-brown-700 hover:text-white transition-all duration-300">
              Xem sự kiện khác
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-brown-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2">
          {/* Event Info Column */}
          <div className="hidden md:block relative">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h1 className="text-3xl font-serif font-bold text-white mb-2">{event.title}</h1>
              <div className="text-brand-brown-200 space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>{event.date}</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{event.location}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-brand-brown-900 mb-2">Đăng Ký Tham Gia</h2>
            <p className="text-brand-brown-700 text-md mb-8 md:hidden">{event.title}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-brown-800 mb-1">Họ và Tên</label>
                <div className="relative">
                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-brown-400">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                   </span>
                   <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 ${errors.name ? 'border-red-500 ring-red-300' : 'border-brand-brown-300 focus:ring-brand-brown-700 focus:border-brand-brown-700'}`} />
                </div>
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-brown-800 mb-1">Email</label>
                 <div className="relative">
                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-brown-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </span>
                   <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 ${errors.email ? 'border-red-500 ring-red-300' : 'border-brand-brown-300 focus:ring-brand-brown-700 focus:border-brand-brown-700'}`} />
                </div>
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-brown-800 mb-1">Số Điện Thoại</label>
                 <div className="relative">
                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-brown-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </span>
                   <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 ${errors.phone ? 'border-red-500 ring-red-300' : 'border-brand-brown-300 focus:ring-brand-brown-700 focus:border-brand-brown-700'}`} />
                </div>
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="pt-4">
                <button type="submit" disabled={isLoading} className="w-full bg-brand-brown-800 text-white font-bold py-3 px-4 rounded-md hover:bg-brand-brown-900 transition-colors duration-300 flex items-center justify-center disabled:bg-brand-brown-600 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang xử lý...
                    </>
                  ) : (
                    'Gửi Đăng Ký'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
