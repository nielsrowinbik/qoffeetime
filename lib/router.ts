import { useRouter as useNextRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

export const useRouter = () => {
    const nextRouter = useNextRouter();

    const setQuery = (query: string | ParsedUrlQueryInput) =>
        nextRouter.replace(
            {
                pathname: window.location.pathname,
                query,
            },
            undefined,
            { shallow: true }
        );

    return {
        ...nextRouter,
        setQuery,
    };
};
