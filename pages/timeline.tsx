import { mdiClose, mdiCoffeeOutline } from '@mdi/js';

import FooterLayout from '../layouts/FooterLayout';
import MainLayout from '../layouts/MainLayout';
import NavLayout from '../layouts/NavLayout';

import Button from '../components/Button';
import GoBack from '../components/GoBack';
import IconButton from '../components/IconButton';

const TimelinePage = () => (
    <>
        <NavLayout>
            <GoBack>
                <IconButton icon={mdiClose} small />
            </GoBack>
        </NavLayout>
        <MainLayout>todo!</MainLayout>
        <FooterLayout>
            <Button icon={mdiCoffeeOutline}>Add a brew</Button>
        </FooterLayout>
    </>
);

export default TimelinePage;
