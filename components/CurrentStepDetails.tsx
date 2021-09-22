import { formatTime } from '../lib/helpers';

type CurrentStepDetailsProps = {
    description: string;
    remaining: number;
};

const CurrentStepDetails = ({
    description,
    remaining,
}: CurrentStepDetailsProps) => (
    <div>
        <time className="text-7xl font-bold">{formatTime(remaining)}</time>
        <p className="text-2xl font-semibold mt-2">{description}</p>
    </div>
);

export default CurrentStepDetails;
