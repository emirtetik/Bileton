import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface MuiButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
}

const variants = {
  text: { backgroundColor: '#3b82f6', color: 'white' },
  outlined: { backgroundColor: '#020617', color: 'white' },
  contained: { backgroundColor: '#16a34a', color: 'white' },
};

const MuiButton: React.FC<MuiButtonProps> = ({ size, variant, children, ...otherProps }) => {

  const customVariants = variants[variant];

  return (
    <Button size={size} style={customVariants} variant={variant} {...otherProps}>
      {children}
    </Button>
  );
};

export default MuiButton;
