"use client";

import ArticleList from "@/components/Article/ArticleList";
import ArticleSortTab from "@/components/Article/ArticleSortTab";
import Hero from "@/components/Hero/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="max-w-[1440px] mx-auto px-24">
        <div className="flex gap-6">
          <div className="flex-[2]">
            <div className="p-4 rounded-lg border border-neutral-500">
              <div className="pb-4">
                <ArticleSortTab />
              </div>
              <ArticleList />
            </div>
          </div>
          <div className="flex-[1]">
            <div className="h-fit p-4 rounded-lg border border-neutral-500">
              <h2>Sidebar</h2>
              <p>Your sidebar content goes here.</p>
            </div>
            <div className="h-fit p-4 rounded-lg border border-neutral-500 mt-6">
              <h2>Series Article</h2>
              <p>Your sidebar content goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
