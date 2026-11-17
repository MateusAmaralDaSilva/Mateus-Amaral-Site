export interface Article {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface ArticleCardProps extends Article {}
