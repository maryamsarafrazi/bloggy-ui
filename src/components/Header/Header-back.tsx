//export default function Header() {
//  return (
//    <header>
//      <div className="h-[72px] bg-neutral-100 flex flex-row w-full justify-between items-center px-24 py-3">
//        <div className="flex flex-row items-center">
//          <div className="mr-2">
//            <img
//              alt="Profile Picture"
//              src="https://i.pravatar.cc/300?img=47"
//              className="w-12 h-12 rounded-full object-cover"
//            />
//          </div>
//          <div className="flex flex-col gap-1">
//            <p className="text-title-md text-neutral-950">Maria Style</p>
//            <p className="text-label-md text-neutral-500">UI/UX Designer</p>
//          </div>
//        </div>
//        <div className="flex flex-row gap-2">
//          <label className="w-72 input input-bordered rounded border-neutral-500 flex items-center gap-2">
//            <svg
//              xmlns="http://www.w3.org/2000/svg"
//              viewBox="0 0 16 16"
//              fill="currentColor"
//              className="h-4 w-4 opacity-70"
//            >
//              <path
//                fillRule="evenodd"
//                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                clipRule="evenodd"
//              />
//            </svg>
//            <input
//              type="text"
//              className="grow"
//              placeholder="Search for a keyword ..."
//            />
//          </label>
//          <div className="flex w-72 gap-4 items-center bg-white text-body-md text-neutral-400 px-4 py-1 border border-neutral-500 rounded">
//            <input
//              type="text"
//              placeholder="Search for a keyword ..."
//              className="order-2 bg-white text-body-md text-neutral-400 w-full py-1"
//            />

//            {/* Icon from Icon8, as an SVG */}
//            <svg
//              xmlns="http://www.w3.org/2000/svg"
//              x="0px"
//              y="0px"
//              width="20"
//              height="20"
//              viewBox="0,0,256,256"
//            >
//              <g
//                fill="#737373"
//                fill-rule="nonzero"
//                stroke="none"
//                stroke-width="1"
//                stroke-linecap="butt"
//                stroke-linejoin="miter"
//                stroke-miterlimit="10"
//                stroke-dasharray=""
//                stroke-dashoffset="0"
//                font-family="none"
//                font-weight="none"
//                font-size="none"
//                text-anchor="none"
//              >
//                <g transform="scale(5.33333,5.33333)">
//                  <path d="M20.5,6c-7.98444,0 -14.5,6.51556 -14.5,14.5c0,7.98444 6.51556,14.5 14.5,14.5c3.27316,0 6.28892,-1.10698 8.7207,-2.94922l9.36523,9.36328c0.50163,0.52248 1.24653,0.73295 1.94742,0.55024c0.70088,-0.18271 1.24823,-0.73006 1.43094,-1.43094c0.18271,-0.70088 -0.02776,-1.44578 -0.55024,-1.94742l-9.36328,-9.36523c1.84224,-2.43179 2.94922,-5.44755 2.94922,-8.7207c0,-7.98444 -6.51556,-14.5 -14.5,-14.5zM20.5,10c5.82269,0 10.5,4.67732 10.5,10.5c0,2.79571 -1.08593,5.3206 -2.85156,7.19727c-0.17187,0.12442 -0.32284,0.2754 -0.44727,0.44727c-1.87707,1.76787 -4.40346,2.85547 -7.20117,2.85547c-5.82268,0 -10.5,-4.67732 -10.5,-10.5c0,-5.82268 4.67732,-10.5 10.5,-10.5z"></path>
//                </g>
//              </g>
//            </svg>
//          </div>
//          <button className="w-auto bg-neutral-950 hover:bg-neutral-700 text-neutral-50 text-label-lg rounded px-4">
//            Join newsletter
//          </button>
//          <button className="btn" data-theme="dark">
//            Join newsletter
//          </button>
//        </div>
//      </div>
//    </header>
//  );
//}
