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

      </section>
    </>
  )
}
