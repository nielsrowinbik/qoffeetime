import { mdiWifiStrengthOffOutline } from '@mdi/js';

import FullHeightLayout from '../layouts/FullHeightLayout';
import FooterLayout from '../layouts/FooterLayout';

import LargeIcon from '../components/LargeIcon';

const OfflinePage = () => (
    <>
        <FullHeightLayout className="flex flex-col px-6">
            <section className="flex-1" />
            <section className="flex-1 flex flex-col items-center justify-center z-10">
                <LargeIcon icon={mdiWifiStrengthOffOutline} />
            </section>
            <section className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-semibold text-center">
                    Oops, it looks like you're offline!
                </h1>
            </section>
            <section className="flex-1">
                Normally, Brewtime works when you're offline, something must
                have gone wrong. Please go online an open the app again.
            </section>
        </FullHeightLayout>
        <FooterLayout />
    </>
);

export default OfflinePage;
