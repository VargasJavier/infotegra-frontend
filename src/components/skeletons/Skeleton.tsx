const Skeleton = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-52 h-72 mx-auto">
      <div className="animate-pulse flex flex-col">
        <div className="rounded bg-slate-700 h-40 w-full"></div>
        <div className="flex-1 space-y-4 py-1 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton