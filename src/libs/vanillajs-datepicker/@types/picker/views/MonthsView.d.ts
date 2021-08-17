export default class MonthsView extends View {
    constructor(picker: any);
    grid: any;
    setOptions(options: any): void;
    monthNames: any;
    minYear: number;
    minMonth: number;
    minDate: number;
    maxYear: any;
    maxMonth: any;
    maxDate: any;
    beforeShow: any;
    updateFocus(): void;
    year: number;
    switchLabel: number;
    focused: number;
    updateSelection(): void;
    selected: any;
    render(): void;
    disabled: any[];
    refresh(): void;
    refreshFocus(): void;
}
import View from "./View.js";
