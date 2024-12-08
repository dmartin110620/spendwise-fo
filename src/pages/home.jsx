import React, {useEffect, useRef} from 'react';
import Header from "../components/home/header.jsx";
import Body from "../components/home/body.jsx";
import LoginButton from "../components/login/login.jsx";
import Footer from "../components/home/footer.jsx";
import "/src/styles/home/home.css";
import {fetchPublicData} from "../services/axios-services.js";
import {useTokenManager} from "../services/direct-tocken.js";
import {checkPrivateScope} from "../services/data-center.js";

function Home() {

    const overviewRef = useRef();
    const serviceRef = useRef();
    const { getAccessToken } = useTokenManager();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return (

        <>
            <img className={'home-landing-img'}
                 src={'/b2.jpg'}
                 alt={'home-base-image'}
                 style={{
                     position: 'absolute',
                     top: '0',
                     bottom: '0',
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                 }}
            />
            <div className="home">
                <LoginButton></LoginButton>
                <Header overviewRef={overviewRef} serviceRef={serviceRef} scrollToSection={scrollToSection}/>
                <div className={'home-body'}>
                    <Body overviewRef={overviewRef} serviceRef={serviceRef}/>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;
