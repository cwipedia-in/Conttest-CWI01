import contestImg from "./Files/learn.gif"
import logo from "./Files/cplogo.png";
import Typical from 'react-typical'

const Home=()=>{

    return(
        <>
        <div className="container px-4" >
            <div className="row gx-5 d-flex justify-content-center">
                <div className="col-sm vertical-center">
                <img src={contestImg} className="img-fluid" alt="contest by cwipedia"/>
                </div>
                <div className="col-sm vertical-center">
                    <div className="card-body">
                    <p className="display-4 dis">Contest by <a href="#">cwipedia.in </a></p>
                    <p className="display-6 dis">
                    <Typical
                        steps={['Hello there,', 1000, 'For Last Year Students (COM/IT)', 500]}
                        loop={Infinity}
                        wrapper="p"
                    /></p>
                    <a type="button" href="#detail" className="btn ">View Details</a>
                    <a href="/register" type="button " className="btn rc-col">Resgister</a>
                    <a href="https://www.cwipedia.in/p/msbte-computer-engineering-group-mcqs.html" type="button" className="btn rc-col">Study Resources</a>
                    </div>
                    
                </div>
            </div>

            <div className="row" id="detail">
                <div className="col-sm  ">
                <p className="display-4">Contest Details</p>
                <div className="card  cc shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-body ">
                        <p className="card-title">Contest Name: CWI-01</p>
                        <p className="card-title">Contest Date: <b>2 July 2021</b></p>
                        <p className="card-title">Test Pattern: <b>MCQ Based</b></p>
                        <p className="card-title">Contest Syllabus:</p> <b><li>Python Programming (40 Questions)</li>
                        <li>Mobile Application Development (40 Questions)</li>
                        <li>Emerging Trends (ETI) (40 Questions)</li>
                        </b><br/>
                        <p><b>Total Marks: 100</b></p>
                        <p><b>Total Questions: 120 (20 optional)</b></p>
                        <a href="/register" type="button " className="btn ">Resgister</a>
                        <p className="card-title">Contest Details:<b> The contest is nothing but a mock test for Diploma in Computer/IT Group, aimed to provide valuable knowledge. The syllabus for the contest is given above please go through it.</b> </p>
                        <p className="card-title"><b>Benefits of Contest:</b>
                            You will get mentorship for your further studies.
                            also, Will get Admission Guidance for DSE  Admission.
                </p>
                        <p className="display-6">Organized by  <img src={logo} className="img-fluid" alt="contest by cwipedia"/> </p>
                    </div>
                </div>


                </div>

            </div>
        </div>
        </>
    )

 }

 export default Home;