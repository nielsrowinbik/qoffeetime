import FooterLayout from "@/layouts/FooterLayout";
import MainLayout from "@/layouts/MainLayout";
import { Dialog } from "@headlessui/react";

import Button from "@/components/Button";

type RatioSliderHintProps = {
  height: number;
  isOpen: boolean;
  onDismiss?: () => void;
};

const RatioSliderHint = ({
  height,
  isOpen,
  onDismiss,
}: RatioSliderHintProps) => {
  //  Construct the hint shape:
  const hintDividerPath = ["M", 5, height * (1 / 16), "V", height * (15 / 16)];

  return (
    <Dialog
      as="div"
      className="relative z-10"
      onClose={onDismiss}
      open={isOpen}
    >
      <Dialog.Panel
        as="div"
        className="app fixed inset-0 z-10 bg-black bg-opacity-75"
      >
        <MainLayout>
          <h1 className="text-5xl font-bold">How to use</h1>
          <section
            className="flex flex-row justify-center"
            style={{
              height,
            }}
          >
            <p className="mx-3 my-14 flex-1 self-start">
              Change how much ground coffee you'll use (thus changing the{" "}
              <strong>ratio</strong> of your brew) by swiping on the left.
            </p>
            <svg height={height} viewBox={`0 0 10 ${height}`} width={10}>
              <path
                d={hintDividerPath.join(" ")}
                stroke="white"
                strokeWidth={3}
                strokeDasharray={height / 20}
              />
            </svg>
            <p className="mx-3 my-14 flex-1 self-end">
              Specify how much coffee you'll brew in total (
              <strong>output</strong>) by swiping on the right.
            </p>
          </section>
        </MainLayout>
        <FooterLayout>
          <Button onClick={onDismiss}>Dismiss</Button>
        </FooterLayout>
      </Dialog.Panel>
    </Dialog>
  );
};

export default RatioSliderHint;
