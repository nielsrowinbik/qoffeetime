import { formatDistance } from 'date-fns';
import { mdiDelete, mdiShare } from '@mdi/js';
import { useRouter } from 'next/router';

import type { Brew } from '../lib/types';
import { useBrews } from '../lib/brews';

import IconButtonWithLabel from '../components/IconButtonWithLabel';
import { FormEvent } from 'react';

const timeAgo = (date: number) =>
    formatDistance(new Date(date), Date.now(), { addSuffix: true });

const BrewDetails = ({
    coffee,
    comment,
    created,
    id,
    recipe,
    volume,
}: Brew) => {
    const { deleteBrew, updateBrew } = useBrews();
    const router = useRouter();

    const canShare = 'canShare' in navigator;
    const onShareClick = async () => {
        try {
            await navigator.share({});
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
        <div className="px-4">
            <div className="flex flex-row justify-around">
                {canShare && (
                    <IconButtonWithLabel
                        icon={mdiShare}
                        label="Share"
                        onClick={onShareClick}
                    />
                )}
                <IconButtonWithLabel
                    icon={mdiDelete}
                    label="Delete"
                    onClick={onDeleteClick}
                />
            </div>
            <hr className="my-4" />
            <p className="font-semibold my-2">
                <span>{recipe}</span>
                <span>&nbsp;&bull;&nbsp;</span>
                <time>{timeAgo(created)}</time>
            </p>
            <p className="my-2">
                <textarea
                    className="w-full"
                    defaultValue={comment}
                    onBlur={onCommentBlur}
                    placeholder="Add a comment"
                    rows={4}
                />
            </p>
            <div className="flex flex-row justify-around">
                <div>{volume}ml</div>
                <div>{coffee}g</div>
            </div>
        </div>
    );
};

export default BrewDetails;
