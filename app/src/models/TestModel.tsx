export interface TestModel {
    description: string,
    hint: string,
    image: string,
    mp3: string,
    part: number,
    questions: [
        {
            corrected: number,
            options: string[],
            question: string,
            questionOrder: number,
            shown: number
        }
        ],
    testName: string
}
