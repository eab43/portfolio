import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Menu from './Menu';

function Header({ history }) {
    //State for opening and closing Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: 'Menu'
    })
    //State for disabling button to prevent spam clicking.
    const [disabled, setDisabled] = useState(false)

    const handleMenu = () => {
        disabledMenu();
        //This is only ran when the application is first opened.
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: 'Close'
            })
        }
        //These last two will handle the menu toggling back and forth.
        else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: 'Menu'
            })
        }
        else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: 'Close'
            });
        }
    };

    const disabledMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200)
    }

    useEffect(() => {
        history.listen(() => {
            setState({ clicked: false, menuName: 'Menu' })
        })
    })



    return (
        <header>
            <div className='container'>
                <div className='wrapper'>
                    <div className='inner-header'>
                        <div className='logo'>
                            <Link to='/'>EaB.</Link>

                        </div>
                        <div className='btn-container'>
                            <button disabled={disabled} onClick={handleMenu}>
                                Menu
                            </button>
                        </div>
                    </div>
                </div>

                <Menu state={state} />



            </div>
        </header>
    );
}
export default withRouter(Header);
