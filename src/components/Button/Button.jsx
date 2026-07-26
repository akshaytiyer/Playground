const variants = {
  Primary: {
    Default: 'bg-black text-white border-2 border-transparent',
    Hover: 'bg-[#333] text-white border-2 border-transparent',
    Pressed: 'bg-[#1a1a1a] text-[#ccc] border-2 border-transparent',
    Focused: 'bg-black text-white border-2 border-[#3d85e0]',
    interactive:
      'bg-black text-white border-2 border-transparent hover:bg-[#333] active:bg-[#1a1a1a] active:text-[#ccc] focus-visible:border-[#3d85e0] focus-visible:outline-none',
  },
  Secondary: {
    Default: 'bg-[#e8e8e8] text-black border-2 border-transparent',
    Hover: 'bg-[#d6d6d6] text-black border-2 border-transparent',
    Pressed: 'bg-[#c7c7c7] text-[#262626] border-2 border-transparent',
    Focused: 'bg-[#e8e8e8] text-black border-2 border-[#3d85e0]',
    interactive:
      'bg-[#e8e8e8] text-black border-2 border-transparent hover:bg-[#d6d6d6] active:bg-[#c7c7c7] active:text-[#262626] focus-visible:border-[#3d85e0] focus-visible:outline-none',
  },
  Tertiary: {
    Default: 'bg-white text-black border border-[#d1d1d1]',
    Hover: 'bg-[#f5f5f5] text-black border border-[#d1d1d1]',
    Pressed: 'bg-[#e8e8e8] text-[#262626] border border-[#d1d1d1]',
    Focused: 'bg-white text-black border-2 border-[#3d85e0]',
    interactive:
      'bg-white text-black border border-[#d1d1d1] hover:bg-[#f5f5f5] active:bg-[#e8e8e8] active:text-[#262626] focus-visible:border-2 focus-visible:border-[#3d85e0] focus-visible:outline-none',
  },
};

const sizes = {
  Small: 'h-9 px-4 py-2 text-sm',
  Medium: 'h-12 px-6 py-3 text-base',
  Large: 'h-14 px-8 py-4 text-lg',
};

/**
 * Button from Figma design system.
 * Use `state` to force a visual state in Storybook (Hover/Pressed/Focused).
 * Default uses live hover/focus/active interaction.
 */
export function Button({
  variant = 'Primary',
  size = 'Medium',
  state = 'Default',
  label = 'Button',
  className = '',
  type = 'button',
  ...props
}) {
  const styles = variants[variant] ?? variants.Primary;
  const sizeStyles = sizes[size] ?? sizes.Medium;
  const appearance =
    state && state !== 'Default' ? styles[state] : styles.interactive;

  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center rounded-lg font-['Inter',system-ui,sans-serif] font-semibold whitespace-nowrap transition-colors",
        sizeStyles,
        appearance,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {label}
    </button>
  );
}
