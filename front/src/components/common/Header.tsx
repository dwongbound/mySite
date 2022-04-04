import React from 'react'
import { AppBar, Toolbar, Select, Button, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router'

import '../../assets/logo.png'

const Header: React.VFC = () => {
    const history = useHistory();
    

    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Button
                    onClick={() => history.push('/')}
                    variant="contained"
                >
                    Home
                </Button>
                <Button
                    onClick={() => history.push('/')}
                    variant="contained"
                >
                    About Us
                </Button>
                <Button
                    onClick={() => history.push('/monme')}
                    variant="contained"
                >
                    MonMe
                </Button>
                <Button
                    onClick={() => history.push('/about')}
                    variant="contained"
                >
                    Takeaways
                </Button>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header