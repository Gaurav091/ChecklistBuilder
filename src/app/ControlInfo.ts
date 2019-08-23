export class ControlInfo {
    constructor(controlType:number, label: string){
        this.controlType = controlType;
        this.label = label;
    }
    controlType: number;
    label: string;
    items:SelectListItem[];
    
}
export class SelectListItem{
    constructor(text:string, value:string,isSelected:boolean){
        this.text = text;
        this.value = value;
        this.isSelected = isSelected;
    }
    text:string;
    value:string;
    isSelected:boolean;
}
