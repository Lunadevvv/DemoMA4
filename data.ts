
import { Speaker, News, Event } from './types';

export const speakers: Speaker[] = [
  { id: 'sp1', name: 'Trần Hưng Đạo', title: 'Nhà Sử Học', bio: 'Chuyên gia về lịch sử quân sự Việt Nam thời Trần.', imageUrl: 'https://picsum.photos/seed/speaker1/400/400' },
  { id: 'sp2', name: 'Lê Quý Đôn', title: 'Nhà Bác Học', bio: 'Nghiên cứu sâu rộng về văn hóa, kinh tế và xã hội Việt Nam thế kỷ 18.', imageUrl: 'https://picsum.photos/seed/speaker2/400/400' },
  { id: 'sp3', name: 'Nguyễn Trãi', title: 'Chiến Lược Gia', bio: 'Bậc thầy về tư tưởng nhân nghĩa và chiến lược quân sự trong khởi nghĩa Lam Sơn.', imageUrl: 'https://picsum.photos/seed/speaker3/400/400' },
  { id: 'sp4', name: 'Hồ Xuân Hương', title: 'Nhà Thơ', bio: 'Nhà thơ Nôm nổi tiếng với những tác phẩm đầy cá tính và thách thức xã hội phong kiến.', imageUrl: 'https://picsum.photos/seed/speaker4/400/400' },
];

export const news: News[] = [
  {
    id: 'n1',
    title: 'Phát hiện di chỉ khảo cổ mới tại Hoàng thành Thăng Long',
    description: 'Một cuộc khai quật gần đây đã hé lộ những hiện vật quý giá từ thời Lý - Trần, cung cấp cái nhìn sâu sắc hơn về kinh thành xưa.',
    date: '2024-07-15',
    author: 'Viện Khảo Cổ Học',
    imageUrl: 'https://picsum.photos/seed/news1/800/600',
    content: 'Chi tiết về các hiện vật được tìm thấy, bao gồm đồ gốm, sứ và các công cụ lao động. Các nhà khoa học đang phân tích để xác định niên đại chính xác và ý nghĩa lịch sử của chúng. Phát hiện này được coi là một bước đột phá trong việc nghiên cứu lịch sử Thăng Long - Hà Nội.'
  },
  {
    id: 'n2',
    title: 'Triển lãm thư pháp "Nét bút Rồng Thiêng"',
    description: 'Triển lãm quy tụ những tác phẩm thư pháp đặc sắc nhất lấy cảm hứng từ hình tượng con rồng trong văn hóa Việt.',
    date: '2024-07-10',
    author: 'Bảo tàng Mỹ thuật Việt Nam',
    imageUrl: 'https://picsum.photos/seed/news2/800/600',
    content: 'Triển lãm kéo dài trong 2 tuần, trưng bày hơn 100 tác phẩm của các nhà thư pháp hàng đầu cả nước. Mỗi tác phẩm là một sự diễn giải độc đáo về sức mạnh, uy quyền và tinh thần của con rồng trong tâm thức người Việt.'
  },
  {
    id: 'n3',
    title: 'Hội thảo khoa học về "Bình Ngô Đại Cáo"',
    description: 'Các học giả trong và ngoài nước cùng nhau thảo luận về giá trị văn học và lịch sử của bản tuyên ngôn độc lập thứ hai của dân tộc.',
    date: '2024-07-05',
    author: 'Đại học Khoa học Xã hội và Nhân văn',
    imageUrl: 'https://picsum.photos/seed/news3/800/600',
    content: 'Hội thảo tập trung vào các chủ đề như tư tưởng nhân nghĩa của Nguyễn Trãi, nghệ thuật lập luận và giá trị trường tồn của tác phẩm. Nhiều bài tham luận mới đã được trình bày, mở ra những hướng nghiên cứu mới.'
  },
  {
    id: 'n4',
    title: 'Số hóa tư liệu Hán Nôm: Thách thức và cơ hội',
    description: 'Dự án bảo tồn di sản chữ viết của dân tộc đang được đẩy mạnh với công nghệ hiện đại, nhằm lưu giữ và phổ biến kho tàng tri thức quý báu này.',
    date: '2024-06-28',
    author: 'Viện Nghiên cứu Hán Nôm',
    imageUrl: 'https://picsum.photos/seed/news4/800/600',
    content: 'Dự án đối mặt với nhiều thách thức như nguồn nhân lực, kinh phí và công nghệ. Tuy nhiên, đây là cơ hội lớn để thế hệ trẻ có thể tiếp cận di sản của cha ông một cách dễ dàng hơn bao giờ hết.'
  }
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Đêm hội "Tiếng vọng Ngàn năm"',
    description: 'Tái hiện những trang sử hào hùng của dân tộc qua các tiết mục nghệ thuật đặc sắc, từ trống đồng Đông Sơn đến khúc khải hoàn ngày thống nhất.',
    date: '2024-08-20',
    location: 'Sân vận động Mỹ Đình, Hà Nội',
    imageUrl: 'https://picsum.photos/seed/event1/1200/800',
    content: 'Chương trình được dàn dựng công phu với sự tham gia của hàng ngàn diễn viên, kết hợp công nghệ ánh sáng và âm thanh hiện đại. Đây là sự kiện văn hóa lớn nhất trong năm, hứa hẹn mang lại những cảm xúc khó quên cho khán giả.',
    speakers: [speakers[0], speakers[2]],
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Hội thảo "Gốm sứ Việt Nam qua các triều đại"',
    description: 'Khám phá vẻ đẹp và kỹ thuật chế tác gốm sứ từ thời Lý, Trần, Lê, Nguyễn qua sự dẫn dắt của các chuyên gia hàng đầu.',
    date: '2024-09-10',
    location: 'Bảo tàng Lịch sử Quốc gia, Hà Nội',
    imageUrl: 'https://picsum.photos/seed/event2/1200/800',
    content: 'Hội thảo sẽ trưng bày các hiện vật gốm sứ quý hiếm và tổ chức các buổi nói chuyện chuyên đề về từng dòng gốm đặc trưng. Người tham dự cũng có cơ hội trải nghiệm tự tay làm gốm.',
    speakers: [speakers[1]],
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Tọa đàm "Áo dài - Hồn dân tộc"',
    description: 'Cùng nhau thảo luận về lịch sử hình thành, phát triển và giá trị biểu tượng của tà áo dài Việt Nam trong đời sống đương đại.',
    date: '2024-09-25',
    location: 'Nhà hát lớn, TP. Hồ Chí Minh',
    imageUrl: 'https://picsum.photos/seed/event3/1200/800',
    content: 'Sự kiện bao gồm phần tọa đàm với các nhà thiết kế, nhà nghiên cứu văn hóa và phần trình diễn bộ sưu tập áo dài qua các thời kỳ. Đây là dịp để tôn vinh vẻ đẹp và giá trị văn hóa của trang phục truyền thống.',
    speakers: [speakers[3]],
    isFeatured: true,
  },
   {
    id: 'e4',
    title: 'Workshop "Nghệ thuật Múa rối nước"',
    description: 'Trải nghiệm thực tế và tìm hiểu về bộ môn nghệ thuật sân khấu dân gian độc đáo của Việt Nam.',
    date: '2024-10-05',
    location: 'Nhà hát Múa rối Thăng Long, Hà Nội',
    imageUrl: 'https://picsum.photos/seed/event4/1200/800',
    content: 'Người tham gia sẽ được các nghệ nhân hướng dẫn cách điều khiển con rối, tìm hiểu về quy trình tạo ra một vở diễn và thưởng thức các tiết mục đặc sắc. Workshop dành cho mọi lứa tuổi yêu thích văn hóa truyền thống.',
    speakers: [],
    isFeatured: false,
  }
];
