import { mdiClose, mdiCoffeeOutline } from '@mdi/js';
import Link from 'next/link';

import FooterLayout from '../layouts/FooterLayout';
import MainLayout from '../layouts/MainLayout';
import NavLayout from '../layouts/NavLayout';

import Button from '../components/Button';
import IconButton from '../components/IconButton';

const TimelinePage = () => (
    <>
        <NavLayout>
            <Link href="/">
                <IconButton icon={mdiClose} small />
            </Link>
        </NavLayout>
        <MainLayout>todo!</MainLayout>
        <FooterLayout>
            <Button icon={mdiCoffeeOutline}>Add a brew</Button>
        </FooterLayout>
    </>
);

export default TimelinePage;
