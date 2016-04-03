import { bindable } from 'aurelia-framework';

export class Create {
    @bindable surveys;

    constructor () {
        this.surveyName = '';
    }

    addSurvey() {
        this.surveys.push(
            { 
                name: this.surveyName, 
                recipients: 0
            });

        this.surveyName = '';
    }
}