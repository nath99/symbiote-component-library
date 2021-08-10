


import React from "react";
import Datepicker from '../../../libs/vanillajs-datepicker/@types/Datepicker';
import DateRangePicker from '../../../libs/vanillajs-datepicker/@types/DateRangePicker';

interface Props {
    type: "date" | "range"
    id: string
    className?: string
    dateRangeTitle?: string
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
            className,
            id,
            dateRangeTitle
        } = this.props;

        return (
            type == "date" ? <input type="text" className={`date-picker ${className}`} id={id}></input> :
            type == "range" &&
                <div id={id} className={`date-range-picker ${className}`}>
                    <label htmlFor={id}>{dateRangeTitle}</label>
                    <input className="from-date" type="text" name="start"></input>
                    <span>to</span>
                    <input className="to-date" type="text" name="end"></input>
                </div>
        )
    }
}

export { DatePicker };