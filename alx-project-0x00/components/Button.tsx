const Button = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md', 
  className = '', 
  onClick = () => {},
  disabled = false,
  type = 'button',
  variant = 'primary'
}) => {
  // Base button classes
  const baseClasses = 'font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }
  
  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  }
}