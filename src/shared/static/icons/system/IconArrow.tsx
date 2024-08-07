import React from "react";
import { f } from "shared/styles";

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3121 19.7151C11.692 20.095 12.3079 20.095 12.6878 19.7151C13.0677 19.3352 13.0677 18.7192 12.6878 18.3393L7.3213 12.9729L19.0272 12.9729C19.5645 12.9729 20 12.5373 20 12.0001C20 11.4628 19.5645 11.0273 19.0272 11.0273L7.3213 11.0273L12.6878 5.66079C13.0677 5.2809 13.0677 4.66496 12.6878 4.28506C12.3079 3.90517 11.692 3.90517 11.3121 4.28506L4.28492 11.3122C3.90502 11.6921 3.90502 12.308 4.28492 12.6879L11.3121 19.7151Z" fill="black"/>
</svg>
`;

const IconArrow: React.FC<{ onClick?: VoidFunction; className?: string }> = ({
  onClick,
  className,
}) => (
  <div
    css={[f.flex]}
    className={className}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: SVG }}
  />
);

export default IconArrow;
