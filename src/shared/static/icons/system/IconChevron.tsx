import React from "react";
import { f } from "shared/styles";

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.05025 14.0503C6.65973 13.6597 6.65973 13.0266 7.05025 12.636L11.2929 8.3934C11.6834 8.00287 12.3166 8.00287 12.7071 8.3934L16.9497 12.636C17.3403 13.0266 17.3403 13.6597 16.9497 14.0503C16.5592 14.4408 15.9261 14.4408 15.5355 14.0503L12 10.5147L8.46447 14.0503C8.07394 14.4408 7.44078 14.4408 7.05025 14.0503Z" fill="black"/>
</svg>
`;

const IconChevron: React.FC<{ onClick?: VoidFunction; className?: string }> = ({
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

export default IconChevron;