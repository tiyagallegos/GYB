import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

export default props => {
    return (
        <div className="InfoContainer">
            <h1 className="infopages">Resources and Information</h1><br/>
            <h3>Do The Work!</h3><br/>
           <p><strong>Content Warning:</strong> Some of the following resources contain discussions of White Supremacy,
            racism, colonialism, xenophobia, harassment, violence, hate crimes, homelessness, mass
            incarceration and policing, deportation, depression and suicide
           </p><br/>
           <ul className="resourceList">
            <li><a className="resourceLinks" href="https://lgbtq.arizona.edu/qtpoc-national-resources" target="_blank">QTPOC National Resources</a></li><br/>
            <li><a className="resourceLinks"  href="https://everydayfeminism.com/2016/01/unique-queer-poc-struggles/" target="_blank">Comics</a></li><br/>
            <li><a className="resourceLinks"  href="https://www.campuspride.org/resources/being-an-ally-to-queer-people-of-color/" target="_blank">Allyship</a></li><br/>
            <li><a className="resourceLinks"  href="https://incite-national.org/" target="_blank">INCITE! </a></li><br/>
            <li><a className="resourceLinks"  href="https://www.nqttcn.com/" target="_blank">Mental Health</a></li><br/>
            <li><a className="resourceLinks"  href="http://transstudent.org/graphics/queeryouthofcolor/" target="_blank">QTPOC Youth Facts</a></li><br/>
           </ul>
           <img className="donateimg" src="https://lgbtqreadsdotcom.files.wordpress.com/2019/12/ya-preview.png?w=672&h=372&crop=1"></img><br/><br/>
        
        <Link className="backLinkinfo" to="/">Back</Link>
        </div>
    );
}





