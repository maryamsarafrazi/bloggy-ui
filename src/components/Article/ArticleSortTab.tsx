export default function ArticleSortTab() {
  return (
    <div className="h-12 -mx-4 -mt-4 border-b">
      <div role="tablist" className="tabs w-80">
        <a role="tab" className="tab h-12 text-body-md" onClick={() => {}}>
          Latest
        </a>
        <a role="tab" className="tab h-12 tab-active border-b-2 text-body-md">
          Popular
        </a>
        <a role="tab" className="tab h-12 text-body-md">
          Oldest
        </a>
      </div>
    </div>
  );
}
