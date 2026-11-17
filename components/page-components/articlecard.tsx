import { ArticleCardProps } from '@/interfaces/articles';

export default function ArticleCard({ title, description, tags, url }: ArticleCardProps) {
    const content = (
        <div className="relative border border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group flex flex-col justify-between h-full">
            <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">{title}</h3>
                <p className="text-sm mb-6 opacity-80">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono border border-current px-2 py-1 uppercase">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    return url ? (
        <a href={url} target="_blank" rel="noreferrer" className="block h-full outline-none">
            {content}
        </a>
    ) : (
        content
    );
}
