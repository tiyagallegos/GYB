import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

export default props => {
    return (
        <div className="InfoContainer">
        <h1 className="infopages">We Got Yo Back</h1><br/>
        <h3>A Community-Based Platform To Decrease Violence Against QTPOC</h3><br/>
        <h4>What is QTPOC?</h4><br/>
        <p>QTPOC stands for Queer and Trans People of Color. QTPOC experience marginalization at the
            intersection of racism, ethnocentrism, xenophobia, queerphobia, and transphobia. As a result,
            QTPOC – especially youth – experience high rates of homelessness, poverty, and violence.
            Even though the queer liberation movement was spurred by the work of poor and working class
            trans women of color, today’s LGBTQIA+ movement is largely and unfairly dominated by white,
            upper and middle-class gay and lesbian communities. At the same time, LGBTQIA+ identity is
            often underrepresented within communities of color. In practicing a politics of liberation, it is vital
            to center the needs and experiences of QTPOC and other communities experiencing multiple
            forms of oppression.</p><br/><br/>
        <p>This application aims to provide community-based support to help decrease the amount of violence experienced
            by the QTPOC community. Members of the QTPOC community and allies are able accompany QTPOC to their destinations 
            safely in small groups even if a vehicle is not available.</p><br/><br/>
        <img className="qtpocimg" src="https://images.squarespace-cdn.com/content/v1/5c7c3b7d7a1fbd2a5f3e407f/1574126150137-NBAGKLGXMTKOLYIG9BXL/ke17ZwdGBToddI8pDm48kE1G8aDDySyXafgMqMi-3Wt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fIBAe0aRMxRrpn6J5i2IfAjEZwkdJGvTULFlkLSJhK3Nw/Nahuel_Contreras.jpg?format=1500w"></img><br/><br/>
        <Link className="backLinkinfo" to="/">Back</Link>
        </div>
    );
}


