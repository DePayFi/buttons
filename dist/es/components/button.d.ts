import React from 'react';
interface ButtonProps {
    label: string;
    onClick: () => void;
}
declare class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode;
}
export default Button;
