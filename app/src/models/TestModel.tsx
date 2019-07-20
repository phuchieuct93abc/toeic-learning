export interface Question {

    corrected: number,
    options: string[],
    question: string,
    questionOrder: number,
    shown: number

}

export interface TestModel {
    description: string,
    hint: string,
    image: string,
    mp3: string,
    part: number,
    questions: Question[],
    testName: string
}
