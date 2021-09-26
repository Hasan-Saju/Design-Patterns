abstract class FolderComponent {


    public Name(): string {
        throw new ReferenceError();
    }
    public Description(): string {
        throw new ReferenceError();
    }


    public singleClick() {
        throw new ReferenceError();
    }

    public doubleClick() {
        throw new ReferenceError();
    }


    public action_add(folderComponent: FolderComponent) {
        throw new ReferenceError();
    }
    public action_remove(folderComponent: FolderComponent) {
        throw new ReferenceError();
    }

}



class file extends FolderComponent {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public Name(): string {
        return this.name;
    }

    public Description(): string {
        return this.description;
    }

    

    public singleClick() {
        console.log(`Name: ${this.Name()}, Type: ${this.Description()}`);
    }

    public doubleClick() {
        console.log(`${this.Name()}.${this.Description()} file is opened`);
    }

}



class Folder extends FolderComponent {
    private folderComponents: Array<FolderComponent> = []
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public Name(): string {
        return this.name;
    }
    public Description(): string {
        return this.description;
    }


    public singleClick() {
        console.log(`Name: ${this.Name()}, Type: ${this.Description()}`);
    }

    public doubleClick() {
        console.log(`${this.Name()} ${this.Description()} is opened`);
        console.log('Contents:');

        for (let entry of this.folderComponents) {
            entry.singleClick();
        }
    }


    public action_add(folderComponent: FolderComponent) {
        this.folderComponents.push(folderComponent);
    }
    public action_remove(folderComponent: FolderComponent) {
        this.folderComponents = this.folderComponents.filter(folder => folder !== folderComponent);
    }
}


let strategy = new file('Strategy Pattern', "ppt")
let observer = new file("Observer Pattern", "pdf")
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
let dp = new Folder("Design Pattern", "Folder")

midExam.action_add(strategy);
midExam.action_add(observer);
midExam.singleClick();
midExam.doubleClick();
midExam.action_add(midSyllabus);

finalExam.action_add(composite);
finalExam.action_add(finalSyllabus);

lectures.action_add(midExam);
lectures.action_add(finalExam);

assignments.action_add(assignment1);
assignments.action_add(assignment2);

dp.action_add(lectures);
dp.action_add(readME);
dp.action_add(assignments);
dp.singleClick();
dp.doubleClick();
dp.action_remove(readME);
dp.doubleClick();