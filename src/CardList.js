import CardUI from "./Card";

function CardUIList(){
    const name1 = "HII";
    const name2 = "Helloo";
    const name3 = "Bonjour";
    const name4 = "Helloo";
    const desc1 = "Student";
    const desc2 = "Faculty";
    const desc3 = "Software Engineer";
    const desc4 = "CEO";
    const college="SVECW";
    const branch = "Branch";

    const stuDetails = {name:"Krishna Priya", branch:"branchName", section:"III"};
    const arrayNames = ["Krishna", "Asritha", "Ahtria", "Ayirp", "Santhu", "Kushal", "Ammi", "Krish"];
    const arrayBranch = ["CSE", "IT", "AIML", "CSE", "AIDS", "MEC", "CIV", "CSE"];





    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {/* Declare property */}
            {/* <CardUI program={name1} desc = {desc1} user = {stuDetails}/>
            <CardUI program={name2} desc = {desc2} user = {stuDetails}/>
            <CardUI program={name3} desc = {desc3} user = {stuDetails}/>
            <CardUI program={name4} desc = {desc4} user = {stuDetails} /> */}
            {arrayNames.map(
                (userListItem, index) => (<CardUI key={index} 
                    program={name2} 
                    col = {college} 
                    desc = {desc2} 
                    userFromArray = {userListItem} 
                    branchname={branch}/>)
            )}
        </div>
        

    );
}

export default CardUIList;