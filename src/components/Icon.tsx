// src/components/Icon.tsx
import React from "react";
import * as Icons from "lucide-react";

/**
 * Generic icon component that maps a string name to a Lucide icon.
 * Example usage: <Icon name="MapPin" className="w-5 h-5" />
 */
interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: keyof typeof Icons;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const Component = Icons[name];
  // Fallback to a generic square if the name is invalid
  // (this should never happen with controlled data).
  // @ts-expect-error - fallback for invalid icon name
  return Component ? <Component {...props} /> : <div {...props} />;
};
