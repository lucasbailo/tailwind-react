const Article = ({ title, text, tags, image, alt}) => {

    return <div className="alura-card">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full hidden sm:flex justify-end gap-2 pr-5">
            {
                tags.map((tag) => <span key={tag} className="alura-tag">{tag}</span>)
            }
        </div>
        <div className="grid gap-5">
            {
                text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-200 line-clamp-2 sm:line-clamp-none">{content}</p>)
            }
            <span className="flex sm:hidden justify-end text-xs text-alura-100 dark:text-gray-50">Ler Mais...</span>
        </div>
        {image && <img className="sm:p-4" src={image} />}
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>

    
}

export default Article