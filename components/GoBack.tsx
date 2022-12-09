import { useRouter } from "next/router";
import { Children, cloneElement, PropsWithChildren } from "react";

type GoBackProps = PropsWithChildren<{
  confirm?: string;
}>;

const GoBack = ({ children, ...props }: GoBackProps) => {
  const router = useRouter();
  const onClick = () => {
    if (props.confirm) {
      confirm(props.confirm) && router.back();
    } else {
      router.back();
    }
  };

  return cloneElement(Children.only(children) as any, { onClick });
};

export default GoBack;
