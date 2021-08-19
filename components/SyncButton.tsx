import classNames from 'classnames';
import { mdiClose, mdiSyncAlert, mdiSync, mdiSyncOff } from '@mdi/js';

import IconButton from './IconButton';

type SyncButtonProps = {
    state: 'alert' | 'off' | 'syncing' | 'synced';
};

const SyncButton = ({ state }: SyncButtonProps) => {
    const icon = getIcon(state);
    const className = classNames({ 'animate-spin': state === 'syncing' });

    return <IconButton className={className} icon={icon} small />;
};

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
