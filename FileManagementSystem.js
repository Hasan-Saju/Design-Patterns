var Folder = /** @class */ (function () {
    function Folder(name, description) {
        this.folderComponents = [];
        this.name = name;
        this.description = description;
    }
    Folder.prototype.getName = function () {
        return this.name;
    };
    Folder.prototype.getDescription = function () {
        return this.description;
    };
    Folder.prototype.add = function (folderComponent) {
        this.folderComponents.push(folderComponent);
        return null;
    };
    Folder.prototype.remove = function (folderComponent) {
        this.folderComponents = this.folderComponents.filter(function (folder) { return folder !== folderComponent; });
        return null;
    };
    Folder.prototype.singleClick = function () {
        console.log("Name: " + this.getName() + ", Type: " + this.getDescription());
        return null;
    };
    Folder.prototype.doubleClick = function () {
        console.log(this.getName() + " " + this.getDescription() + " is opened");
        console.log('Contents:');
        for (var _i = 0, _a = this.folderComponents; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.singleClick();
        }
        return null;
    };
    return Folder;
}());
var file = /** @class */ (function () {
    function file(name, description) {
        this.name = name;
        this.description = description;
    }
    file.prototype.getName = function () {
        return this.name;
    };
    file.prototype.getDescription = function () {
        return this.description;
    };
    file.prototype.singleClick = function () {
        console.log("Name: " + this.getName() + ", Type: " + this.getDescription());
        return null;
    };
    file.prototype.doubleClick = function () {
        console.log(this.getName() + "." + this.getDescription() + " file is opened");
        return null;
    };
    return file;
}());
var strategy = new file('Strategy Pattern', "ppt");
var observer = new file("Observer Pattern", "pdf");
var midSyllabus = new file("Mid Syllabus", "doc");
var composite = new file("Composite Pattern", "ppt");
var finalSyllabus = new file("Final Syllabus", "pdf");
var assignment1 = new file("Assignment-1", "pdf");
var assignment2 = new file("Assignment-2", "pdf");
var readME = new file("readME", "text");
var midExam = new Folder("Mid Exam", "Folder");
var finalExam = new Folder("Final Exam", "Folder");
var lectures = new Folder("Lectures", "Folder");
var assignments = new Folder("Assignments", "Folder");
var dp = new Folder("Design Pattern", "Folder");
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
