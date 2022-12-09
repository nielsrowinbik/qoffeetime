type CurrentStepDetailsProps = {
  description: string;
  remaining: string;
};

const CurrentStepDetails = ({
  description,
  remaining,
}: CurrentStepDetailsProps) => (
  <div>
    <time className="text-7xl font-bold">{remaining}</time>
    <p className="mt-2 text-2xl font-semibold">{description}</p>
  </div>
);

export default CurrentStepDetails;
