export default function Street({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex divide-x-2 divide-zinc-100 divide-dashed">
      {children}
    </div>
  )
}
