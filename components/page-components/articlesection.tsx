import ArticleCard from './articlecard';
import { articles } from '@/data/articles';

export default function ArticlesSection() {
    if (articles.length === 0) {
        return <p className="py-6 text-sm font-mono text-gray-600">Nenhum artigo cadastrado.</p>;
    }

    return (
        <div className="pt-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
                <ArticleCard key={article.title} {...article} />
            ))}
        </div>
    );
}
