import clsx from 'clsx'

const VARIANTS_STYLES = {
  solid: 'bg-primary-500 hover:bg-primary-400',
  outline: 'border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white',
  text: 'bg-primary-500 bg-opacity-10 hover:bg-primary-500 text-primary-500 hover:text-white'
}

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
  variant?: keyof typeof VARIANTS_STYLES
  disabled?: boolean
}

export default function Button({
  children,
  type = 'button',
  fullwidth = false,
  onClick,
  variant = 'solid',
  disabled
}: Props) {
  return (
    <button
      className={clsx(
        VARIANTS_STYLES[variant] || VARIANTS_STYLES.solid,
        'transition text-white rounded px-4 py-2',
        fullwidth && 'w-full block',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
