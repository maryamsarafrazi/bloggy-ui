"use client";

export default function SeriesArticles() {
  return (
    <div className="h-fit max-h-[500px] p-4 rounded-lg border border-neutral-500">
      <h2 className="text-title-sm text-neutral-800">Top tags</h2>
      <div className="divider" />
      <div className="flex flex-wrap gap-2 my-4 text-neutral-800">
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>design-patterns</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>user-testing</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>ideation</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>navigation</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>team-management</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>strategy</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>design-patterns</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>design-process</p>
        </div>
        <div className=" bg-neutral-200 text-label-lg py-2 px-4 rounded-full w-fit">
          <p>design</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="btn btn-link w-auto text-label-lg"
          data-theme="light"
        >
          More series
        </button>
      </div>
    </div>
  );
}
