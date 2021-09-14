import React from "react";

interface Props {
    size: number
}

export default class Separator extends React.Component<Props> {
    render() {
        return (
            <div className={"separator my-" + this.props.size.toString()}></div>
        )
    }
}

export { Separator };


