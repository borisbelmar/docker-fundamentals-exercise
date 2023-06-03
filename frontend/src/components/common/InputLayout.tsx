interface Props {
  children: React.ReactNode
  name: string
  label?: string
  errorMessage?: string
}

export default function InputLayout({
  children,
  name,
  label,
  errorMessage
}: Props) {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm">
          {label}
        </label>
      )}
      {children}
      {errorMessage && (
        <p className="text-xs text-red-500 mt-1">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
