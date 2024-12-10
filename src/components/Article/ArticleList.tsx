import ArticleListItem from "./ArticleListItem";
import ArticleSortTab from "./ArticleSortTab";

export default function ArticleList() {
  return (
    <div className="p-4 rounded-lg border border-neutral-500">
      <div className="pb-4">
        <ArticleSortTab />
      </div>
      <ArticleListItem />
      <div className="divider" />
      <ArticleListItem />
      <div className="divider" />
      <ArticleListItem />
      <div className="divider" />
      <ArticleListItem />
      <div className="divider" />
      <ArticleListItem />
      <div className="divider" />
      <ArticleListItem />
      <div className="divider" />
      <ArticleListItem />
    </div>
  );
}
