import { mdiClose } from '@mdi/js';
import Link from 'next/link';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { useBrews } from '../../lib/brews';

import Button from '../../components/Button';
import GoBack from '../../components/GoBack';
import IconButton from '../../components/IconButton';

const TimelinePage = () => {
    const { brews } = useBrews();

    return (
        <>
            <NavLayout>
                <GoBack>
                    <IconButton icon={mdiClose} small />
                </GoBack>
            </NavLayout>
            <MainLayout>
                <ul>
                    {brews.map(({ id, recipe }) => (
                        <li key={id}>{recipe}</li>
                    ))}
                </ul>
            </MainLayout>
            <FooterLayout>
                <Link href="/timeline/add" passHref>
                    <Button>Add a brew</Button>
                </Link>
            </FooterLayout>
        </>
    );
};

export default TimelinePage;
