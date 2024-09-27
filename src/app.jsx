export default function App() {
  return (
    <main className="flex h-screen w-screen items-center justify-center gap-12 bg-slate-100 text-center">
      <div className="relative -top-6 flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow">
          <span className="rounded bg-slate-700 p-1 py-0.5 font-mono text-white">
            gap-4 divide-x divide-black
          </span>
          <div className="mt-4 flex gap-4 divide-x divide-black">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow">
          <span className="rounded bg-slate-700 p-1 py-0.5 font-mono text-white">
            gap-divide-x-4 (custom color)
          </span>
          <div className="gap-divide-x-4 gap-divide-rose-600 mt-4 flex">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow">
          <span className="rounded bg-slate-700 p-1 py-0.5 font-mono text-white">
            gap-4 divide-y divide-black
          </span>
          <div className="mt-4 flex flex-col gap-4 divide-y divide-black">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow">
          <span className="rounded bg-slate-700 p-1 py-0.5 font-mono text-white">
            gap-divide-y-4
          </span>
          <div className="gap-divide-y-4 gap-divide-black mt-4 flex flex-col">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </div>
    </main>
  );
}
