import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { Banner } from '../components/Banner';
import { NewsCard } from '../components/NewsCard';
import { EventCard } from '../components/EventCard';
import { SpeakerCard } from '../components/SpeakerCard';
import { SpeakerModal } from '../components/SpeakerModal';
import { news, events, speakers } from '../data';
import { Speaker } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-serif font-bold text-brand-brown-900 text-center mb-12">{children}</h2>
);

const ViewMoreButton: React.FC<{ to: string }> = ({ to }) => (
  <div className="text-center mt-12">
    <Link 
      to={to} 
      className="bg-transparent border-2 border-brand-brown-700 text-brand-brown-700 font-bold py-3 px-8 rounded-lg hover:bg-brand-brown-700 hover:text-white transition-all duration-300"
    >
      Xem Thêm
    </Link>
  </div>
);

interface QuestionState {
  question?: string;
  loading: boolean;
  error?: string | null;
}

export const HomePage: React.FC = () => {
  const featuredEvents = events.filter(e => e.isFeatured);
  const latestNews = news.slice(0, 3);
  const latestEvents = events.slice(0, 3);

  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [interviewQuestions, setInterviewQuestions] = useState<Record<string, QuestionState>>({});

  const handleOpenModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  const generateInterviewQuestion = async (speaker: Speaker) => {
    if (!speaker || interviewQuestions[speaker.id]?.question) return;

    setInterviewQuestions(prev => ({ ...prev, [speaker.id]: { loading: true } }));

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Với vai trò là một nhà báo, hãy đặt một câu hỏi phỏng vấn sâu sắc và gợi mở cho ${speaker.name}, một ${speaker.title}. Tiểu sử của họ là: "${speaker.bio}". Chỉ trả về duy nhất một câu hỏi, không thêm bất kỳ lời dẫn hay ghi chú nào.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const question = response.text;
      setInterviewQuestions(prev => ({ ...prev, [speaker.id]: { question, loading: false } }));
    } catch (error) {
      console.error("Error generating interview question:", error);
      setInterviewQuestions(prev => ({ ...prev, [speaker.id]: { error: "Xin lỗi, không thể tạo câu hỏi lúc này.", loading: false } }));
    }
  };

  return (
    <div>
      <Banner featuredEvents={featuredEvents} />

      <main className="container mx-auto px-6 py-16">
        {/* News Section */}
        <section>
          <SectionTitle>Tin Tức Nổi Bật</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map(newsItem => (
              <NewsCard key={newsItem.id} newsItem={newsItem} />
            ))}
          </div>
          <ViewMoreButton to="/news" />
        </section>

        {/* Events Section */}
        <section className="mt-24">
          <SectionTitle>Sự Kiện Sắp Diễn Ra</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <ViewMoreButton to="/events" />
        </section>

        {/* Speakers Section */}
        <section className="mt-24 bg-brand-brown-100/50 py-16 rounded-lg">
          <SectionTitle>Gặp Gỡ Các Diễn Giả</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {speakers.map(speaker => (
              <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => handleOpenModal(speaker)} />
            ))}
          </div>
        </section>
      </main>

      <SpeakerModal
        isOpen={!!selectedSpeaker}
        onClose={handleCloseModal}
        speaker={selectedSpeaker}
        questionData={selectedSpeaker ? interviewQuestions[selectedSpeaker.id] : undefined}
        onGenerateQuestion={generateInterviewQuestion}
      />
    </div>
  );
};
