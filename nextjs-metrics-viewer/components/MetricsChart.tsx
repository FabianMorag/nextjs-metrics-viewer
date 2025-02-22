export default function MetricsChart() {
  return (
    <div>
      <h2 className="mb-2 text-left text-xl text-white">Chart</h2>

      <div className="w-full rounded-lg  border border-gray-700 p-4 shadow md:p-6">
        <div className="mb-4 flex justify-between border-b  border-gray-700 pb-4">
          <div className="flex items-center">
            <div className="me-3 flex size-12 items-center justify-center rounded-lg bg-gray-700">
              <svg
                className="size-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 19"
              >
                <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
              </svg>
            </div>
            <div>
              <h5 className="pb-1 text-base font-bold leading-none text-white">
                Obtained values per day
              </h5>
            </div>
          </div>
        </div>

        <div id="column-chart" className="w-full">
          <span className="text-white">NO DATA</span>
        </div>
      </div>
    </div>
  );
}
