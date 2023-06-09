import React from 'react'


function Experience() {

    return (
        <div className='experience'>
            <h2>Experience</h2>
            <div className='exp shadow'>
                <h3 className='position'>Fullstack Engineer</h3>
                <h5 className='company'><a href="http://theaudiencestreet.com" target="_blank">The Audience Street Inc.</a> &nbsp;|&nbsp; <a href="https://thirdpresence.com">Thidpresence Oy</a> &nbsp;·&nbsp; Full-time &nbsp;·&nbsp; Dec 2019 - Mar 2023</h5>
                <h5><b>Tech-stack : &nbsp;</b>Python &nbsp;·&nbsp; Flask &nbsp;·&nbsp; Javascript &nbsp;·&nbsp; React.js &nbsp;·&nbsp; MongoDB &nbsp;·&nbsp; AWS</h5>
            </div>
            <div className='exp shadow'>
                <h3 className='position'>Python Freelancer</h3>
                <h5 className='company'><a href="https://www.peopleperhour.com" target="_blank">PeoplePerHour</a> &nbsp;|&nbsp; Local clients &nbsp;·&nbsp; Part-time &nbsp;·&nbsp; Apr 2018 - Dec 2019</h5>
                <h5><b>Tech-stack : &nbsp;</b>Python &nbsp;·&nbsp; Django &nbsp;·&nbsp; Javascript &nbsp;·&nbsp; Shell scripting</h5>
            </div>
        </div>
    )
}

export default Experience