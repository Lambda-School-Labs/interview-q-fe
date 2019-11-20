import React,{useState} from 'react'
import './CoachForm03.scss'
import { Link } from 'react-router-dom';

import Toggle from 'react-toggle'// docs on this---> https://github.com/aaronshaf/react-toggle
import "react-toggle/style.css"  //                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import linkedin from '../../icons/linkedin.svg'
import github from '../../icons/github.svg'
import website from '../../icons/website.svg'
import portfolio from '../../icons/portfolio.svg'
import twitter from '../../icons/twitter.svg'


const CoachForm03 = ({ accounts, setAccounts }) => {

    const userInput = e => {
        setAccounts({
            ...accounts,
            [e.target.name]: e.target.value
        })
        // console.log(accounts)
    }

    const toggleSwitch = e => {
        setAccounts({
            ...accounts,
            [e.target.name]: e.target.checked
        })
        // console.log(accounts)
    }



    return (
        <div className='CoachForm03-container'>
            <div className='CoachForm03-header'>
                <h3>Linked Accounts</h3>
                <p>The links that you provide and enable will be visable to seekers on the coach list</p>
            </div>
            <div>
                <img src={linkedin} alt='linkedin icon'/><p> LinkedIn</p><input placeholder='LinkedIn URL...' type='url' name='linkedin_url' value={accounts.linkedin_url} onChange={userInput}/>
                <Toggle icons={false} name='linkedin_switch' defaultChecked={false} onChange={toggleSwitch}/>
            </div>
            <div>
                <img src={github} alt='github icon'/><p> GitHub</p><input placeholder='GitHub URL...' name='github_url' type='url' value={accounts.github_url} onChange={userInput}/>
                <Toggle icons={false} name='github_switch' value={accounts.github_switch} defaultChecked={false} onChange={toggleSwitch}/>
            </div>
            <div>
                <img src={website} alt='website icon'/><p> Website</p><input placeholder='Website URL...' name='website_url'  type='url' value={accounts.website_url} onChange={userInput}/>
                <Toggle icons={false} name='website_switch' value={accounts.website_switch} defaultChecked={false} onChange={toggleSwitch}/>
            </div>
            <div>
                <img src={portfolio} alt='portfolio icon'/><p> Portfolio</p><input placeholder='Portfolio URL' name='portfolio_url' type='url'  value={accounts.portfolio_url} onChange={userInput}/>
                <Toggle icons={false} name='portfolio_switch' value={accounts.portfolio_switch} defaultChecked={false} onChange={toggleSwitch}/>
            </div>
            <div>
                <img src={twitter} alt='twitter icon'/><p> Twitter</p><input placeholder='Twitter URL...' name='twitter_url' type='url'  value={accounts.twitter_url} onChange={userInput}/>
                <Toggle icons={false} name='twitter_switch' value={accounts.twitter_switch} defaultChecked={false} onChange={toggleSwitch}/>
            </div>
            <div>
                <Link to='/addcoach/02'>Back</Link>
                    <br/>
                <Link to='/addcoach/04'>Save and next</Link>
            </div>
        </div>
    )
}

// const OtherAccounts = styled.div`
//     text-align: center;
// `;

export default CoachForm03;