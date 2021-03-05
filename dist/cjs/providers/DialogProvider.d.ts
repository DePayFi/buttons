import React from 'react';
interface DialogProviderProps {
    closeContainer: () => void;
}
declare class DialogProvider extends React.Component<DialogProviderProps> {
    state: {
        closable: boolean;
    };
    setClosable(closable: boolean): void;
    render(): React.ReactNode;
}
export default DialogProvider;
