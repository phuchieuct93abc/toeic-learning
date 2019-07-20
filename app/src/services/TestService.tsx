import {TestModel} from "../models/TestModel";

export default class TestService {

    private testData: TestModel[] = [];

    private convertTestId(testGroup:number,testId:number){
        return `${testGroup.toString().padStart(2, '0')}_${testId.toString().padStart(2, '0')}`;
    }
    public async getTestsById(testGroup: number,testId:number) {
        let data = await this.getAllData();
        return data.find(t=>t.image===`test_${this.convertTestId(testGroup,testId)}`)


    }

    public async getAllName(): Promise<Set<string>> {
        let testData: TestModel[] = await this.getAllData();

        return new Set(testData.map(t => t.testName).sort());

    }

    public getAllData(): Promise<TestModel[]> {

        console.log("get data")
        if (this.testData.length > 0) {
            return Promise.resolve(this.testData);
        } else {

            return new Promise(resolve => {
                fetch("https://toeic-new2019.firebaseio.com/Test.json").then(response => {
                    resolve(response.json())
                });

            })

        }
    }
    getMp3(testGroup:number,testId:number):string{
        return `https://firebasestorage.googleapis.com/v0/b/toeic-new2019.appspot.com/o/mp3%2Ftest_${this.convertTestId(testGroup,testId)}.mp3?alt=media`
    }
    getImage(imageId:string):string{
        console.log("image id",imageId)
        return `https://firebasestorage.googleapis.com/v0/b/toeic-new2019.appspot.com/o/image%2F${imageId}.jpg?alt=media&token=3b2b236b-9391-41d9-97bf-71752a892b7d`
    }

}
