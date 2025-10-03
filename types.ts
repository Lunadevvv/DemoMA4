
export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface News {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  imageUrl: string;
  content: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  content: string;
  speakers: Speaker[];
  isFeatured?: boolean;
}
