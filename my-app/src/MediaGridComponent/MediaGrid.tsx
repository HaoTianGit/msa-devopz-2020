import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {//change later
    description: any;
    urlToImage: any;
}
interface IMediaGridProps {
    SearchQuery: (string | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{description: "", urlToImage: ""}]);
//http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-26&sortBy=publishedAt&apiKey=2ed89f1407d74f7eaa668d0f56992f8a
    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q='+ props.SearchQuery + '&from=2020-06-26&sortBy=publishedAt&apiKey=2ed89f1407d74f7eaa668d0f56992f8a')//change later
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(response => {
                setItemArray(response.articles)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.urlToImage || !el.description) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el.urlToImage} Description={el.description} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid