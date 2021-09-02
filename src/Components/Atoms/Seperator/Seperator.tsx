import React from "react";

interface Props {
    size: number
}

export default class Seperator extends React.Component<Props> {
    render() {
        return (
            <div className={"my-" + this.props.size.toString()}></div>
        )
    }
}

export { Seperator };


