import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
  size: 'small' | 'medium' | 'large';
  variant: 'custom1' | 'custom2' | 'custom3';
}

const variantStyles = {
  custom1: { backgroundColor: '#3b82f6', color: 'white' },
  custom2: { backgroundColor: '#020617', color: 'white' },
  custom3: { backgroundColor: '#16a34a', color: 'white' },
};

const CustomButton: React.FC<CustomButtonProps> = ({ size, variant, children, ...otherProps }) => {
  const customVariantStyles = variantStyles[variant] || {};

  return (
    <Button size={size} style={customVariantStyles} {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
