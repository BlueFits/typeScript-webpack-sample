import ProjectInput from "./components/ProjectInput/ProjectInput";
import ProjectList from "./components/ProjectList/ProjectList";

console.log("Initializing");

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');