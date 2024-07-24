import React from 'react';
import './day1assgn.css';

const studentDetails = [{stuImg : "../c1.png", name : "Sarah", education : "US support & Affiliate"},
                         {stuImg : "../c2.png", name : "Curt", education : "OnBoarding Manager/Producer"},
                         {stuImg : "../c3.png", name : "Micheal", education : "Growth Marketing"},
                         {stuImg : "../c4.png", name : "John", education : "Software QA Tester / Customer Support"},
                         {stuImg : "../c5.png", name : "Hannah", education : "Inbound and Marketing"},
                         {stuImg : "../c6.png", name : "Stephanie", education : "Customer Support at Agorapulse"},
                         {stuImg : "../c7.png", name : "Jacob", education : "Harness your social media"},
                         {stuImg : "../c2.png", name : "Richard", education : "CMO |Operations Manager"}
                        ];

function Day1(){
    // if we use id here instead of classname, we assign the styles for particular element 
    // using #check{styles} and for className .check{styles}
    // return <h1 id="check">Hello</h1>
    return (
        <div className="review-container">
                {studentDetails.map((student, index) => 
                    (<div key={index} className="stu-section">
                        <img src={student.stuImg} width="200" height="150"/>
                        <div className="stu-details">
                            <h1>{student.name}</h1>
                            <p>{student.education}</p>
                        </div>
                        <hr />
                        <button className="connect-button">Connect</button>
                    </div>))}
        </div>
    )
}

export default Day1;