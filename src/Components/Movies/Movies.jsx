import { Link } from 'react-router-dom';
import style from './movies.module.css';
import React from 'react'
import defaultPoster from '../../Images/defaultImg.jpg';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../MainRedux/Actions/reducersActions';

export default function Movies({ sendOneMovie }) {
    const dispatch = useDispatch()

    const childDelete = () => {
        deleteMovie(sendOneMovie.id, dispatch);
    }

    return <>
        <div>
            <div className={`${style.mainCard} card`}>
                <div className={`${style.imgCon} overflow-hidden rounded-1`}>
                    <img src={sendOneMovie.poster_path ? `https://image.tmdb.org/t/p/w500/${sendOneMovie.poster_path}` : `${defaultPoster}`} className={`${style.imgScale} card-img-top rounded-1`} alt="MovieName" />
                </div>
                <div className="card-body d-flex flex-column justify-content-around align-items-start">
                    <h5 className="card-title">{sendOneMovie.title}</h5>
                    <p className="card-text">{sendOneMovie.overview?.split(' ').slice(0, 8).join(' ')}...<Link to={`/moviedetails/${sendOneMovie.id}`} className={`${style.seeMore} text-primary`}>See More</Link></p>
                    <div>
                        <Link to={`/updatemovie/${sendOneMovie.id}`}>
                            <Button variant="contained" className={`btn btn-outline-primary`}>Update</Button>
                        </Link>
                        <Button variant="contained" onClick={childDelete} className={`btn btn-outline-primary mx-2`}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

