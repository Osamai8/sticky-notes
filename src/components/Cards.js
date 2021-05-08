import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Cards = ({ item, deleteNoteHandler, color }) => {
    var randomItem = color[Math.floor(Math.random() * color.length)];


    return (
        <Card style={{
            marginTop: '2rem',
            background: randomItem,
            opacity: '0.6',
            boxShadow: '2px 2px 12px rgba(0,0,0,0.4)',
        }}>
            <CardActionArea>
                <CardContent >
                    <Typography variant='h5' style={{ fontFamily: 'Caveat' }} >{item.title}</Typography>
                    <Typography variant='body2' style={{ fontFamily: 'Caveat' }} >{item.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <DeleteIcon onClick={() => deleteNoteHandler(item.id)} />
            </CardActions>
        </Card >
    )
}

export default Cards;