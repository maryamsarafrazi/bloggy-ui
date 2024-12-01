"use client";

import ArticleListItem from "@/components/Article/ArticleListItem";
import ArticleSortTab from "@/components/Article/ArticleSortTab";
import Hero from "@/components/Hero/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="max-w-[1440px] mx-auto px-24">
        <div className="flex gap-6">
          <div className="flex-[2] p-4 rounded-lg border border-neutral-500">
            <ArticleSortTab />
            <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem />
          </div>

          <div className="flex-[1] p-4 rounded-lg border border-neutral-500">
            <h2>Sidebar</h2>
            <p>Your sidebar content goes here.</p>
          </div>
        </div>
      </section>
    </>
  );
}
