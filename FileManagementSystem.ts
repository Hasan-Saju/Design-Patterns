interface FolderComponent {

    getName(): string;

    getDescription(): string;

    singleClick:() => null;

    doubleClick:() => null;

}

interface Action{
    
    add:(folderComponent: FolderComponent)=> null;

    remove:(folderComponent: FolderComponent) => null;
}



class Folder implements FolderComponent, Action{
    private folderComponents: Array<FolderComponent> = []
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public getName(): string {
        return this.name;
    }
    public getDescription(): string {
        return this.description;
    }

    public add(folderComponent: FolderComponent) {
        this.folderComponents.push(folderComponent);
        return null;
    }
    public remove(folderComponent: FolderComponent) {
        this.folderComponents = this.folderComponents.filter(folder => folder !== folderComponent);
        return null;
    }
    
   
    public singleClick(){
         console.log(`Name: ${this.getName()}, Type: ${this.getDescription()}`);
         return null;
    }

    public doubleClick(){
         console.log(`${this.getName()} ${this.getDescription()} is opened`);
         console.log('Contents:');

         for (let entry of this.folderComponents) {
            entry.singleClick();
        }
        return null;    
    }
}



class file implements FolderComponent {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public singleClick(){
         console.log(`Name: ${this.getName()}, Type: ${this.getDescription()}`);
         return null;
    }

    public doubleClick(){
        console.log(`${this.getName()}.${this.getDescription()} file is opened`);
        return null;
    }

}






let strategy = new file('Strategy Pattern',"ppt")
let observer = new file("Observer Pattern","pdf")
let midSyllabus = new file("Mid Syllabus", "doc")
let composite = new file("Composite Pattern", "ppt")
let finalSyllabus = new file("Final Syllabus", "pdf")
let assignment1 = new file("Assignment-1", "pdf")
let assignment2 = new file("Assignment-2", "pdf")
let readME = new file("readME", "text")
let midExam = new Folder("Mid Exam", "Folder")
let finalExam = new Folder("Final Exam", "Folder")
let lectures = new Folder("Lectures", "Folder")
let assignments = new Folder("Assignments", "Folder")
let dp= new Folder("Design Pattern", "Folder")

midExam.add(strategy);
midExam.add(observer);
midExam.singleClick();
midExam.doubleClick();
midExam.add(midSyllabus);

finalExam.add(composite);
finalExam.add(finalSyllabus);

lectures.add(midExam);
lectures.add(finalExam);

assignments.add(assignment1);
assignments.add(assignment2);

dp.add(lectures);
dp.add(readME);
dp.add(assignments);
dp.singleClick();
dp.doubleClick();
dp.remove(readME);
dp.doubleClick();