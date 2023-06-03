interface Props {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className="min-h-screen h-full bg-gray-100 flex flex-col">
      <main className="flex-1 bg-slate-800 flex flex-col justify-center text-white">
        {children}
      </main>
    </div>
  )
}
