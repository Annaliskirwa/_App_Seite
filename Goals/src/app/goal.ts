export class Goal {
    showDescription!: boolean;
    constructor(
        public id: any,
        public name: string,
        public description: string,
        public completeDate: Date,
    ){
        this.showDescription = false;
    }
}
