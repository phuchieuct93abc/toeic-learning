export interface Question {

    corrected: number,
    options: string[],
    question: string,
    questionOrder: number,
    shown: number
    id:string,


}

export interface TestModel {
    groupId:string,
    id:string,
    description: string,
    hint: string,
    hintVn:string,
    image: string,
    mp3: string,
    part: number,
    questions: Question[],
    testName: string
}
