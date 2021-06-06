import Icon from '@mdi/react';

type LargeIconProps = {
    icon: string;
};

const LargeIcon = ({ icon }: LargeIconProps) => (
    <div className="w-20 h-20 rounded-full bg-white bg-opacity-40 inline-flex items-center justify-center">
        <Icon path={icon} size={2} />
    </div>
);

export default LargeIcon;
