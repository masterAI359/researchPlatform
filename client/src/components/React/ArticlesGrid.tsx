import { useEffect, useState } from "react"
import Article  from "./Article"

interface Image {
    img: string,
    width: number,
    height: number
  }
  
  interface Articles {
    datePublished: string,
    description: string,
    image: Image
    keywords: string[]       
    name: string,
    provider: string,
    url: string,
    logo: string
  }

interface GridProps {
    articles: Articles[],
    logo: object
}

const ArticlesGrid: React.FC<GridProps> = ({ articles }) => {

const [logoMap, setLogoMap] = useState<object>({})

useEffect(() => {

    fetch('/provider/logos')
    .then(response => response.json())
    .then(data => setLogoMap(data))
}, [])

  



    return (
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
        <div className="space-y-24">
        <div className="mx-atuo text-lg lg:col-span-2 mt-12 lg:mt-0">
            <ol className="grid gap-12 mx-auto mt-24">
                {articles.map((article: Articles) => 
                <Article
                key = {article.url}
                article = {article}
                />
                )}
            </ol>
        </div>
        </div>
    </div>
    )
}


export default ArticlesGrid


