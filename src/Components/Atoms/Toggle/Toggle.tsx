import * as React from "react";

interface ToggleProps {
    toggleLabel: string,
    toggleId?: string
}

class Toggle extends React.Component<ToggleProps> {
    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "toggle-" + id
        }

        let toggleName = this.props.toggleId;

        if(!toggleName)
            toggleName = generateId();

        return (
            <div
                data-testid="toggle"
                className="toggle">
                    <p className="title">{this.props.toggleLabel}</p>
                    <label htmlFor={toggleName} className="toggle-label">
                        <input type="checkbox" className="toggle-input" name={toggleName} id={toggleName} hidden />
                        <div className="toggle-group">
                            <span className="toggle-checked"></span>
                        </div>
                    </label>
            </div>
        )
    }
}

export { Toggle, ToggleProps };