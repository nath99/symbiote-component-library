export default class YearsView extends View {
    navStep: number;
    beforeShowOption: string;
    grid: any;
    setOptions(options: any): void;
    minYear: any;
    minDate: any;
    maxYear: any;
    maxDate: any;
    beforeShow: any;
    updateFocus(): void;
    first: number;
    last: number;
    start: number;
    switchLabel: string;
    focused: number;
    updateSelection(): void;
    selected: any;
    render(): void;
    disabled: any[];
    refresh(): void;
    refreshFocus(): void;
}
import View from "./View.js";
