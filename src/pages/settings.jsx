import React, {useContext} from 'react';
import SettingsMenu from "../components/settings/settings-menu.jsx";
import '/src/styles/settings/settings.css';
import {Outlet} from "react-router-dom";
import HeaderWithSlogan from "../components/settings/header-slogan.jsx";
import {SettingsContext} from "../components/settings/settings-context.jsx";
import {NavigateNext} from "@mui/icons-material";
import FlatIcons from "../components/data-center/flat-icons.jsx";

function Settings() {

    const { componentData } = useContext(SettingsContext);


    return (
        <div className={'settings'}>


            <div className={'settings-topics'}>
                <HeaderWithSlogan title={'Settings'} slogan={'Manage your dashboard settings'}/>
                <NavigateNext style={{color: '#6c757d', margin: '0 20px 0 50px'}}/>
                <HeaderWithSlogan
                    isSubTopic={true}
                    title={componentData.title}
                    slogan={componentData.slogan}
                    titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                />

                <div className={'data-center-flat-icons'}>
                    <FlatIcons/>
                </div>

            </div>

            <hr className={'settings-header-separator'}/>


            <div className="settings-sub-container">
                <div className="settings-left">
                    <SettingsMenu/>
                </div>
                <div className="settings-right">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Settings;