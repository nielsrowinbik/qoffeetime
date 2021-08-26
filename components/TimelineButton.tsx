import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiHistory } from '@mdi/js';

const TimelineButton = () => {
    const { t } = useTranslation('common');

    return (
        <Link href="/timeline">
            <a className="absolute bg-brewtime-red shadow-sm rounded-full py-1 px-4 z-10 right-10 top-10 flex flex-row items-center text-md">
                <Icon className="mr-2" path={mdiHistory} size="22px" />
                <span className="capitalize">{t('timeline')}</span>
            </a>
        </Link>
    );
};

export default TimelineButton;
