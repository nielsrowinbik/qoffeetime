import classNames from 'classnames';
import { mdiSyncAlert, mdiSync, mdiSyncOff } from '@mdi/js';
import { forwardRef } from 'react';
import type { HTMLProps } from 'react';

import IconButton from './IconButton';

type SyncButtonProps = HTMLProps<HTMLAnchorElement> &
    HTMLProps<HTMLButtonElement> & {
        state: 'alert' | 'off' | 'syncing' | 'synced';
        type?: 'button' | 'submit' | 'reset';
    };

const SyncButton = forwardRef<
    HTMLAnchorElement & HTMLButtonElement,
    SyncButtonProps
>(({ state, ...props }: SyncButtonProps, ref) => {
    const icon = getIcon(state);
    const className = classNames({ 'animate-spin': state === 'syncing' });

    return (
        <IconButton
            {...props}
            className={className}
            icon={icon}
            small
            ref={ref}
        />
    );
});

const getIcon = (state: SyncButtonProps['state']) => {
    switch (state) {
        case 'alert':
            return mdiSyncAlert;
        case 'off':
            return mdiSyncOff;
        case 'syncing':
        case 'synced':
            return mdiSync;
    }
};

export default SyncButton;
