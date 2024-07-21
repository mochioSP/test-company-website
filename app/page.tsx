import style from "./page.module.css"
import Image from "next/image"

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: {
  contents: News[]
} = {
  contents: [
    {
      id: "1",
      title:
        "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/7/21",
      createdAt: "2024/7/21",
    },
    {
      id: "2",
      title:
        "当社CEOが元気出ました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/7/21",
      createdAt: "2024/7/21",
    },
    {
      id: "1",
      title:
        "これはテスト記事",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/7/21",
      createdAt: "2024/7/21",
    },
  ],
};

const name = '久々のjsx'

export default function Home() {
  const sliceData = data.contents.slice(0, 2)
  return (
    <>
      <section className={style.top}>
        <div>
          <h1 className={style.title}>試しに文章を変えている。{name}</h1>
          <p className={style.description}>pタグで文章追加</p>
        </div>
        <Image
          className={style.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={style.news}>
        <h2 className={style.newsTitle}>News</h2>
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={style.list}>
              <div className={style.link}>
                <Image
                  className={style.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={style.contents}>
                  <dt className={style.newsItemTitle}>
                    {article.title}
                  </dt>
                  <dd className={style.meta}>
                    <span className={style.tag}>
                      {article.category.name}
                    </span>
                    <span className={style.data}>
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
