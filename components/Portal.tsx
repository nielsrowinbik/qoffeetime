import { createPortal } from 'react-dom';
import type { PropsWithChildren } from 'react';

type PortalProps = PropsWithChildren<{
    isOpen: boolean;
}>;

const Portal = ({ children, isOpen }: PortalProps) =>
    isOpen && createPortal(children, document?.body);
// createPortal(children, document?.getElementById('__next'));

export default Portal;
