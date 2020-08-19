import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOnClickOutside } from '../utils/onClickOutside';
import { setRightSidebar, toggleAutoHide } from '../redux/reducers/theme/sidebars/actions';
import * as Icon from 'react-feather';
import SwitchButton from '../views/Components/SwitchButton';

const TheAside = () => {
    let rightSide = useRef(null);
    const ref = useRef();

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const {
        colors: { mainColor, textColor },
        sidebar: { rightSidebar, autoHide }
    } = theme;

    /**
     * * @detecing outside click of dropdown
     */
    useOnClickOutside(ref, () => dispatch(setRightSidebar(false)));

    return (
        <nav className='fixed-sidebar rightsidebar'>
            <div className='sidebar-sticky' style={{ backgroundColor: mainColor }}>
                <ul className='nav d-block'>
                    <li>
                        <a
                            ref={el => {
                                rightSide = el;
                            }}
                            className={`nav-link cursor`}
                            onClick={() => {
                                dispatch(setRightSidebar(true));
                            }}>
                            <Icon.Bell className='feather_icon' />
                        </a>
                    </li>
                    <li>
                        <a
                            ref={el => {
                                rightSide = el;
                            }}
                            className={`nav-link cursor`}
                            onClick={() => {
                                dispatch(setRightSidebar(true));
                            }}>
                            <Icon.Mail className='feather_icon' />
                        </a>
                    </li>
                    <li>
                        <a
                            ref={el => {
                                rightSide = el;
                            }}
                            className={`nav-link cursor`}
                            onClick={() => {
                                dispatch(setRightSidebar(true));
                            }}>
                            <Icon.Settings className='feather_icon' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`hidden-sidebar  ${rightSidebar ? 'showRight' : 'animationSidebarRight'}`}>
                <ul className='nav d-block' ref={ref}>
                    <li className='nav-item'>
                        <div className='flex'>
                            <SwitchButton checked={autoHide} onClick={() => dispatch(toggleAutoHide())} />
                            <label className='nav-text'>Auto hide primary menu</label>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default React.memo(TheAside);
