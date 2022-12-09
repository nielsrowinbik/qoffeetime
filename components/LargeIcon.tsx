import classNames from "classnames";
import type { HTMLProps } from "react";
import Icon from "@mdi/react";

type LargeIconProps = HTMLProps<HTMLDivElement> & {
  icon: string;
};

const LargeIcon = ({ icon, ...props }: LargeIconProps) => {
  const className = classNames(
    "w-20 h-20 rounded-full bg-white bg-opacity-40 inline-flex items-center justify-center",
    props.className
  );

  return (
    <div {...props} className={className}>
      <Icon path={icon} size={2} />
    </div>
  );
};

export default LargeIcon;
