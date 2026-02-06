import React from 'react'

export default function MainButton({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  disabled = false,
  ...props 
}) {
  
  // Base styles
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  // Variant styles
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-95",
    destructive: "bg-red-600 text-white hover:bg-red-700 active:scale-95",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100 hover:text-gray-900 active:scale-95",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:scale-95",
    ghost: "hover:bg-gray-100 hover:text-gray-900 active:scale-95",
    link: "text-blue-600 underline-offset-4 hover:underline",
    hero: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg hover:shadow-xl font-semibold active:scale-95 transform",
    accent: "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg font-semibold active:scale-95",
  };
  
  // Size styles
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-12 rounded-lg px-8 text-base",
    xl: "h-14 rounded-lg px-10 text-lg",
    icon: "h-10 w-10",
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button 
      className={combinedClassName} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}