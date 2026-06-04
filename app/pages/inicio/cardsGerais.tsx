import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { Pressable } from 'react-native'

interface CardProps extends ViewProps {
  children: ReactNode;
  className?: string;
  
}

export default function Cardss({ children, className, style, ...rest
}: CardProps) {
  return (
    <Pressable
 className={`${className || ''}`} style={style}  {...rest}>
      {children} 
    </Pressable>

  );
}