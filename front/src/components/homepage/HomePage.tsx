import React from 'react'

import { Paper } from '@material-ui/core'
import { Card, Snackbar, SnackbarContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: '12px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Homepage: React.VFC = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const history = useHistory();
    return (
        <>
        <SnackbarContent message={"Welcome to our site!"}/>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Example
                </Typography>
                <Typography variant="h5" component="h2">
                    This is a Card
                </Typography>
                <Typography variant="body2" component="p">
                    Welcome to my site
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => history.push('/about')}>Learn More</Button>
            </CardActions>
        </Card>
        </>

    )
}

export default Homepage