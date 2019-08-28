export class ControlInfo {
    constructor(controlType: number, label: string) {
        this.controlType = controlType;
        this.label = label;
        this.items = [];
    }
    controlType: number;
    label: string;
    items: SelectListItem[];
    getItemCount() {
       return this.items && this.items.length > 0 ? this.items.length : 0 ;
    }
}
export class SelectListItem{
    constructor(text: string, value: string,isSelected: boolean){
        this.text = text;
        this.value = value;
        this.isSelected = isSelected;
    }
    text: string;
    value: string;
    isSelected: boolean;
}
