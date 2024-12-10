"use client";

import ArticleList from "@/components/Article/ArticleList";
import Hero from "@/components/Hero/Hero";
import SeriesArticles from "@/components/Sidebar/SeriesArticles";
import Tags from "@/components/Sidebar/Tags";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="max-w-[1440px] mx-auto px-24">
        <div className="flex gap-6">
          <div className="flex-[2]">
            <ArticleList />
          </div>

          <div className="flex-[1]">
            <Tags />
            <div className="mt-6" />
            <SeriesArticles />
          </div>
        </div>
      </section>
    </>
  );
}
