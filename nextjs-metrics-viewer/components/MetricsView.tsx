import { Metrics } from "@/interfaces";

export default function MetricsView({ metrics }: { metrics: Metrics }) {
  return (
    <>
      <h2 className="text-left text-xl text-white">Summary</h2>
      <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-4 ">
        <article className="rounded-lg border border-gray-700 p-2">
          <h3 className="text-white">Max</h3>
          <div className="grid place-items-center py-2">
            <span className="text-white">{metrics.max}</span>
          </div>
        </article>
        <article className="rounded-lg border border-gray-700 p-2">
          <h3 className="text-white">Min</h3>
          <div className="grid place-items-center py-2">
            <span className="text-white">{metrics.min}</span>
          </div>
        </article>
        <article className="rounded-lg border border-gray-700 p-2">
          <h3 className="text-white">Average</h3>
          <div className="grid place-items-center py-2">
            <span className="text-white">{metrics.average}</span>
          </div>
        </article>
        <article className="rounded-lg border border-gray-700 p-2">
          <h3 className="text-white">Total</h3>
          <div className="grid place-items-center py-2">
            <span className="text-white">{metrics.total}</span>
          </div>
        </article>
      </div>
    </>
  );
}
