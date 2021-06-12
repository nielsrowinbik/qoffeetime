import { formatDistance } from 'date-fns';
import { mdiClose } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useWindowSize } from 'rooks';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { useBrews } from '../../lib/brews';
import type { Brew } from '../../lib/types';

import BrewDetails from '../../components/BrewDetails';
import Button from '../../components/Button';
import GoBack from '../../components/GoBack';
import IconButton from '../../components/IconButton';
import { queryArgToNumber } from '../../lib/helpers';

const TimelinePage = () => {
    const { brews } = useBrews();
    const router = useRouter();
    const { innerHeight } = useWindowSize();

    const { id: idParam } = router.query;
    const id = queryArgToNumber(idParam);
    const [selectedBrew, setSelectedBrew] = useState<Brew>();
    const prevSelectedBrew = useRef<Brew>();
    const brew = selectedBrew || prevSelectedBrew.current;

    // When `id` updates, update the selected brew, and keep a reference
    // to the previously selected brew:
    useEffect(() => {
        const selected = brews.find((brew) => brew.id === id);
        if (selected !== undefined) prevSelectedBrew.current = selected;
        setSelectedBrew(selected);
    }, [brews, id]);

    const onDismiss = () =>
        router.replace({ pathname: router.pathname }, undefined, {
            shallow: true,
        });

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
                        <li key={id}>
                            <Link
                                href={{
                                    pathname: `/timeline/${id}`,
                                }}
                                shallow
                            >
                                <a>{recipe}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <BottomSheet
                    className="text-black"
                    defaultSnap={innerHeight / 2}
                    open={selectedBrew !== undefined}
                    onDismiss={onDismiss}
                >
                    {brew && <BrewDetails {...brew} />}
                </BottomSheet>
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
