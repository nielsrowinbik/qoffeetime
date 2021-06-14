import { formatDistance } from 'date-fns';
import { mdiDeleteOutline, mdiShareVariantOutline } from '@mdi/js';
import { useRouter } from 'next/router';

import type { Brew } from '../lib/types';
import { useBrews } from '../lib/brews';

import IconButtonWithLabel from '../components/IconButtonWithLabel';
import { FormEvent } from 'react';

const timeAgo = (date: number) =>
    formatDistance(new Date(date), Date.now(), { addSuffix: true });

const BrewDetails = ({ comment, created, id, recipe }: Brew) => {
    const { deleteBrew, updateBrew } = useBrews();
    const router = useRouter();

    const canShare = 'canShare' in navigator;
    const onShareClick = async () => {
        try {
            await navigator.share({
                title: 'Brewtime',
                text: `I just brewed a delicious cup of ${recipe} coffee with Brewtime!`,
                url: window.location.origin,
            });
        } catch (e) {
            // TODO: Do something with the error other than logging it
            console.log(e);
        }
    };

    const onDeleteClick = async () => {
        if (confirm('Are you sure you want to delete this brew?')) {
            await deleteBrew(id);
            router.replace('/timeline');
        }
    };

    const onCommentBlur = (e: FormEvent<HTMLTextAreaElement>) =>
        updateBrew(id, { comment: e.currentTarget.value });

    return (
        <div className="px-4 pb-4">
            <p className="font-semibold my-2">
                <span>{recipe}</span>
                <span>&nbsp;&bull;&nbsp;</span>
                <time>{timeAgo(created)}</time>
            </p>
            <p className="my-2">
                <textarea
                    autoFocus={false}
                    className="w-full"
                    defaultValue={comment}
                    onBlur={onCommentBlur}
                    placeholder="Add a comment"
                    rows={4}
                    tabIndex={-1}
                />
            </p>
            <hr className="my-4" />
            <div className="flex flex-row justify-around">
                {canShare && (
                    <IconButtonWithLabel
                        icon={mdiShareVariantOutline}
                        label="Share"
                        onClick={onShareClick}
                        tabIndex={-1}
                    />
                )}
                <IconButtonWithLabel
                    icon={mdiDeleteOutline}
                    label="Delete"
                    onClick={onDeleteClick}
                    tabIndex={-1}
                />
            </div>
        </div>
    );
};

export default BrewDetails;
