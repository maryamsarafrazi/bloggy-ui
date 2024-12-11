"use client";

export default function SeriesArticleParts() {
  return (
    <div className="h-fit max-h-[600px] p-4 rounded-lg border border-neutral-500">
      <h2 className="text-title-sm text-neutral-800">
        <span className="italic">Design strategies</span> (10 parts)
      </h2>
      <div className="divider" />
      <div className="flex flex-col text-body-md text-neutral-800 gap-1">
        <a className="py-2 pl-1 hover:bg-neutral-100 rounded-lg" href="">
          Part 1: Low-Fidelity Wireframes
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 2: Interactive Prototypes with Figma
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 3: Creating Design Systems
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 4: Testing with Clickable Prototypes
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 5: Creating Design Systems
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 6: Creating Design Systems
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 7: Creating Design Systems
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 8: Creating Design Systems
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 9: Creating Design Systems
        </a>
        <a className="py-2 pl-1  hover:bg-neutral-100 rounded-lg" href="">
          Part 10: Creating Design Systems
        </a>
      </div>
      <div className="flex justify-end">
        <button
          className="btn btn-ghost w-auto text-label-lg"
          data-theme="light"
        >
          More tags
        </button>
      </div>
    </div>
  );
}
