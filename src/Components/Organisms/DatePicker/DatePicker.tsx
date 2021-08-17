


import React from "react";
import Datepicker from '../../../libs/vanillajs-datepicker/@types/Datepicker';
import DateRangePicker from '../../../libs/vanillajs-datepicker/@types/DateRangePicker';

interface Props {
    type: "date" | "range"
    label?: string
    id: string
    className?: string
}

class DatePicker extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        // Initialise either a date or date range picker
        if (this.props.type == "date") {
            const datePickerField = document.querySelector('.date-picker') ;

            if (datePickerField) {
               new Datepicker(datePickerField, {});
            }


        } else if (this.props.type == "range") {
            const dateRangePickerField = document.querySelector('.date-range-picker') ;

            if (dateRangePickerField) {
                new DateRangePicker(dateRangePickerField, {});
            }
        }
    }

    render() {
        const {
            type,
            label,
            className,
            id
        } = this.props;

        return (
            type == "date" ?
                <React.Fragment>
                    <label htmlFor={id}>{label}</label>
                    <input type="text" className={`date-picker ${className ? className : ""}`} id={id}></input>
                </React.Fragment>
            :
            type == "range" &&
                <div id={id} className={`date-range-picker ${className ? className : ""}`}>
                    <label htmlFor={id}>{label}</label>
                    <input className="from-date" type="text" name="start"></input>
                    <span>to</span>
                    <input className="to-date" type="text" name="end"></input>
                </div>
        )
    }
}

export { DatePicker };