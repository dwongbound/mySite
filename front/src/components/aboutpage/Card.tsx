import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Snackbar, SnackbarContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

type AboutCardProps = {
    name: String
}

const AboutCard: React.VFC = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
        <SnackbarContent message={"What we've learned."}/>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    APIs{bull}and{bull}REST
                </Typography>
                <Typography variant="h5" component="h2">
                    The modern backend framework.
                </Typography>
                <Typography variant="body2" component="p">
                    Currently, many websites use a REST style endpoint, creating endpoints with services such as lambda, to get data from a database.
                </Typography>
            </CardContent>
            <CardActions>
                    <Button size="small" onClick={() => window.location.href = 'https://us-east-2.console.aws.amazon.com/console/home?nc2=h_ct&region=us-east-2&src=header-signin#'}>Learn More</Button>
            </CardActions>
        </Card>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Dev{bull}Ops
                </Typography>
                <Typography variant="h5" component="h2">
                    How to develop your apps efficiently.
                </Typography>
                <Typography variant="body2" component="p">
                    We learned how to create applications, using third party plugins such as Docker and Docker-compose. Docker defines 
                    the instructions needed to create a container, such as installing plugins and other packages. Docker-compose 
                    manages these containers, letting you create them all at the same time and also manage them. 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More by looking at VSCode.</Button>
            </CardActions>
        </Card>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Deploying{bull}Your{bull}App
                </Typography>
                <Typography variant="h5" component="h2">
                    How to get your actual code onto the internet.
                </Typography>
                <Typography variant="body2" component="p">
                    Cool, it seems like you have your code locally. But how do you let other people access it? One way to
                    do this is to use an AWS service called Amplify, which will deploy it to any domain.
                    
                </Typography>
            </CardContent>
            <CardActions>
                    <Button size="small" onClick={() => window.location.href = 'https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/d85gl1o17mi65'}>Learn More</Button>
            </CardActions>
        </Card>
        </>
    );
}

export default AboutCard