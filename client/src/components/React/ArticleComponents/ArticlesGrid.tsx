import Article  from "./Article"
import { Articles } from '../../../env'

export default function ArticlesGrid ({ articles, selectedForSummary, setSelectedForSummary, summaries }) {

    
   
    return (
    <div className={`px-8 py-24 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl ${summaries.length > 0 ? "hidden" : ""}`}>
        <div className="space-y-24">
        <div className="mx-atuo text-lg lg:col-span-2 mt-12 lg:mt-0">
            <ol className="grid lg:grid-cols-2 gap-24 mx-auto mt-24">
                {articles.map((article: Articles) => 
                <Article
                key = {article.url}
                article = {article}
                selectedForSummary = {selectedForSummary}
                setSelectedForSummary = {setSelectedForSummary}
                />
                )}
            </ol>
        </div>
        </div>
    </div>
    )
}


