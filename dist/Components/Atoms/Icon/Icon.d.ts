import React from "react";
export interface IconProps {
    icon: string;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'lg' | 'xl';
}
declare class Icon extends React.Component<IconProps> {
    render(): JSX.Element;
}
export { Icon };
