import { Dashboard, SideBar } from "@/features/log-monitoring"

export default function Home() {
  return (
    <div className="flex h-full min-h-0 overflow-hidden">
      <div className="h-full w-[26%] min-w-[260px]">
        <SideBar />
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        <Dashboard />
      </div>
    </div>
  )
}
