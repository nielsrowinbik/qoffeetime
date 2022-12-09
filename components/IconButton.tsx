import classNames from "classnames";
import Icon from "@mdi/react";
import { forwardRef } from "react";

import type { HTMLProps, PropsWithChildren } from "react";

type IconButtonProps = HTMLProps<HTMLAnchorElement> &
  HTMLProps<HTMLButtonElement> & {
    href?: string;
    icon: string;
    small?: boolean;
    type?: "button" | "submit" | "reset";
  };

const IconButton = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  IconButtonProps
>(({ icon, small, ...props }, ref) => {
  const Tag = props.href ? "a" : "button";

  return (
    <Tag
      {...props}
      className={classNames(
        "items-center justify-center rounded-full bg-black bg-opacity-40 text-white",
        { "p-1": !!small, "p-2": !small }
      )}
      ref={ref}
    >
      <Icon path={icon} size={small ? "20px" : 1} />
    </Tag>
  );
});

export default IconButton;
