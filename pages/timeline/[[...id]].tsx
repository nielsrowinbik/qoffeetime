import { format, isToday, isYesterday } from 'date-fns';
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

    // When `id` or the list of brews update, update the selected
    // brew, and keep a reference to the previously selected brew:
    useEffect(() => {
        const selected = brews.find((brew) => brew.id === id);
        if (selected !== undefined) prevSelectedBrew.current = selected;
        setSelectedBrew(selected);
    }, [brews, id]);

    const onDismiss = () => router.back();

    const groupedBrews: { [group: string]: Brew[] } = brews.reduce(
        (groups, brew) => {
            const date = new Date(brew.created);
            const key = isToday(date)
                ? 'Today'
                : isYesterday(date)
                ? 'Yesterday'
                : format(date, 'MMMM d');

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(brew);

            return groups;
        },
        {}
    );

    return (
        <>
            <NavLayout>
                <GoBack>
                    <IconButton icon={mdiClose} small />
                </GoBack>
            </NavLayout>
            <MainLayout>
                {Object.keys(groupedBrews).map((date) => (
                    <section className="mb-6" key={date}>
                        <header className="flex flex-row justify-between items-center">
                            <h2 className="text-lg font-semibold">{date}</h2>
                            <h4>
                                {groupedBrews[date].reduce(
                                    (res, { volume }) => res + volume,
                                    0
                                )}{' '}
                                ml
                            </h4>
                        </header>
                        <ul>
                            {groupedBrews[date].map(
                                ({ coffee, created, id, recipe, volume }) => (
                                    <li className="my-1" key={id}>
                                        <Link
                                            href={{
                                                pathname: `/timeline/${id}`,
                                            }}
                                            shallow
                                        >
                                            <a className="flex flex-row justify-between items-center py-2">
                                                <div>
                                                    <h3>{recipe}</h3>
                                                    <p className="text-white text-opacity-60 text-sm">
                                                        {coffee} g cofee,{' '}
                                                        {volume} ml water
                                                    </p>
                                                </div>
                                                <div>
                                                    {format(
                                                        new Date(created),
                                                        'HH:mm'
                                                    )}
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </section>
                ))}
                <BottomSheet
                    className="text-black"
                    defaultSnap={innerHeight / 2}
                    open={selectedBrew !== undefined}
                    onDismiss={onDismiss}
                    snapPoints={({ maxHeight, minHeight }) => [
                        minHeight,
                        maxHeight,
                    ]}
                >
                    {brew && <BrewDetails {...brew} />}
                </BottomSheet>
            </MainLayout>
            <FooterLayout>
                {/* <Link href="/timeline/add" passHref>
                    <Button>Add a brew</Button>
                </Link> */}
            </FooterLayout>
        </>
    );
};

export default TimelinePage;
