import FooterLayout from "@/layouts/FooterLayout";
import FullHeightLayout from "@/layouts/FullHeightLayout";
import LargeIcon from "@/components/LargeIcon";
import app from "../package.json";
import { mdiWifiStrengthOffOutline } from "@mdi/js";

const OfflinePage = () => (
  <>
    <FullHeightLayout className="px-6">
      <section className="flex-1" />
      <section className="z-10 flex flex-1 flex-col items-center justify-center">
        <LargeIcon icon={mdiWifiStrengthOffOutline} />
      </section>
      <section className="flex flex-1 flex-col justify-center">
        <h1 className="text-center text-3xl font-semibold">
          Oops, it looks like you're offline!
        </h1>
      </section>
      <section className="flex-1">
        Normally, {app.name} works when you're offline, something must have gone
        wrong. Please go online an open the app again.
      </section>
    </FullHeightLayout>
    <FooterLayout />
  </>
);

export default OfflinePage;
