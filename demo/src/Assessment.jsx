import {useEffect,useState}from"react";
function Assessment(){
    const[assessment,setAssessment]=useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("http://localhost:5238/api/assessment/6")
        .then(response => response.json())
        .then(data=>{
            setAssessment(data);
            setLoading(false);
        })
        .catch(error => {
           console.error("error fetching assessment :",error);
           setLoading(false); 
        });
    },[]);
    if(loading)
    {
    return <p>Loading assessment...</p>;
    }
    return(
        <div>
        {/* <h2>{assessment.title}</h2>  */}
        <p>Id : {assessment.id}</p>
        <p>Duration : {assessment.duration} mins</p>
        <p>Total Marks :{assessment.totalMarks}</p>
        <p>Testname : {assessment.testname}</p>
        <p>SubjectId: {assessment.subjectId}</p>
        <p>Duration : {assessment.subjectExpertId}</p>
        <p>CreationDate : {assessment.creationDate}</p>
        <p>ModificationDate : {assessment.modificationDate}</p>
        <p>ScheduledDate :{assessment.scheduledDate}</p>
        <p>Status : {assessment.status}</p>
        <p>PassingLevel : {assessment.passingLevel}</p>
        <p>Subject : {assessment.subject}</p>
        <p>FirstName : {assessment.firstName}</p>
        <p>LastnName : {assessment.lastName}</p>
        </div>
    );
}
export default Assessment;
