import {TestModel} from "../models/TestModel";

export default class TestService {

    private testData: TestModel[] = [];

    readonly mapping: any = {
        "ETS TOEIC 2018 - Test 01": "1",
        "ETS TOEIC 2018 - Test 02": "2",
        "ETS TOEIC 2018 - Test 03": "3",
        "ETS TOEIC 2018 - Test 04": "4",
        "ETS TOEIC 2018 - Test 05": "5",
        "New Economy 2018 - Test 02": "6",
        "New Economy 2018 - Test 04": "7",
        "New Economy 2018 - Test 08": "8",
        "New Economy 2018 - Test 09": "9",
        "New Economy 2018 - Test 10": "10",
        "Hacker New TOEIC - Test 02": "11",
    }

    constructor() {
        // this.getAllData().then(data => {
        //     // let result = data.sort((a, b) => a.testName.localeCompare(b.testName))
        //     //     .sort((a, b) => a.image.localeCompare(b.image))
        //     // result.forEach((r, index) => r.id = (index+1) + "");
        //     // console.log(result)
        //     // this.save(result)
        //     data.forEach(test => {
        //         // @ts-ignore
        //         test.questions.forEach(q => {
        //
        //             // @ts-ignore
        //             let id = /(\d+)./g.exec(q.question)[0];
        //             // console.log(id)
        //             // // @ts-ignore
        //             // @ts-ignore
        //             q.id = id;
        //         })
        //         test.id = test.questions.map(q => q.id).reduce((a, b) => a + b)
        //     });
        //     data.forEach(d => {
        //         console.log(d.testName)
        //         d.groupId = this.mapping[d.testName];
        //     });
        //     console.log(data)
        //     let result = data.sort((a, b) => a.groupId.localeCompare(b.groupId))
        //         .sort((a, b) => a.id.localeCompare(b.id));
        //
        //     this.save({Test: result})
        // });

    }

    save(data: any) {
        if (!data) {
            console.error('Console.save: No data')
            return;
        }

        let filename = 'console.json'

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }

    private convertTestId(testGroup: number, testId: number) {
        return `${testGroup.toString().padStart(2, '0')}_${testId.toString().padStart(2, '0')}`;
    }

    public async getTestsById(testGroup: number, testId: number) {
        let data = await this.getAllData();
        return data.find(t => {

                return parseInt(t.groupId) == testGroup && t.id.indexOf(testId + ".") == 0;

            }
        )


    }

    public async getAllName(): Promise<Set<string>> {
        let testData: TestModel[] = await this.getAllData();

        return new Set(testData.map(t => t.testName).sort());

    }

    public getAllData(): Promise<TestModel[]> {

        if (this.testData.length > 0) {
            return Promise.resolve(this.testData);
        } else {

            return new Promise(resolve => {
                fetch("https://toeic-new2019.firebaseio.com/Test.json", {cache: "force-cache"}).then(response => {
                    // response.json().then(d => this.testData = d)
                    resolve(response.json())
                });

            })

        }
    }

    getMp3(mp3Id: string): string {
        return `https://firebasestorage.googleapis.com/v0/b/toeic-new2019.appspot.com/o/mp3%2F${mp3Id}.mp3?alt=media`
    }

    getImage(imageId: string): string {
        console.log("image id", imageId)
        return `https://firebasestorage.googleapis.com/v0/b/toeic-new2019.appspot.com/o/image%2F${imageId}.jpg?alt=media&token=3b2b236b-9391-41d9-97bf-71752a892b7d`
    }

}
