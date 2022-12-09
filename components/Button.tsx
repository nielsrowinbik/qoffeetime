import type { HTMLProps, PropsWithChildren } from "react";

import Icon from "@mdi/react";
import cn from "classnames";
import { forwardRef } from "react";

type ButtonProps = PropsWithChildren<
  HTMLProps<HTMLAnchorElement> &
    HTMLProps<HTMLButtonElement> & {
      href?: string;
      icon?: string;
      inGroup?: boolean;
      type?: "button" | "submit" | "reset";
      variant?: "dark" | "light" | "text";
    }
>;

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
  (
    { children, hidden, icon, inGroup = false, variant = "light", ...props },
    ref
  ) => {
    const Tag = props.href ? "a" : "button";

    if (hidden) return null;

    return (
      <Tag
        {...props}
        className={cn(
          "align-center relative inline-flex w-full justify-center overflow-hidden py-3 font-semibold outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
          {
            "rounded-lg": !inGroup,
            "rounded-none first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none only:rounded-lg":
              inGroup,
            "bg-white text-black": variant === "light",
            "bg-black text-white": variant === "dark",
            "text-current": variant === "text",
          },
          props.className
        )}
        ref={ref}
      >
        {icon && <Icon className="mr-2" path={icon} size="24px" />}
        {children}
      </Tag>
    );
  }
);

type ButtonGroupProps = PropsWithChildren<{}>;

const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <div className="flex flex-row">{children}</div>
);

export default Button;
export { ButtonGroup };
