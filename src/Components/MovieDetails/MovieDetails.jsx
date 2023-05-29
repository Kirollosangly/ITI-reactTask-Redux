import React, { useEffect }  from 'react';
import style from './moviedetails.module.css';
import defaultPoster from '../../Images/defaultImg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMovie } from '../../MainRedux/Actions/reducersActions';
import { useParams } from 'react-router-dom';


export default function MovieDetails() {
    const { MovieDetails } = useSelector(state => state.movie)
    const {id} = useParams();
    const dispatch = useDispatch();

    const getMovieDetails = () => {
        getOneMovie(id, dispatch)
    }

    useEffect(()=>{
        getMovieDetails();
    },[])

    return <>
        <div className={`${style.MinHeight}`}>
            <div className={`container text-white`}>
                <h2 className={` py-4`}>{MovieDetails.title}</h2>
            </div>
            <div className={`container text-white`}>
                <div className="row pt-4 pb-5">
                    <div className="col-md-4">
                        <img src={MovieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`: `${defaultPoster}`} className={`${style.imgScale} card-img-top rounded-3 shadow-lg`} alt="MovieName" />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-between align-items-start">
                        <div>
                            <p className={`fs-5`}>Overview: {MovieDetails.overview}</p>
                            <p className={`fs-5`}>Video Available: {MovieDetails.video ? 'Yes' : 'No'}</p>
                            <p className={`fs-5`}>Adult Movie: {MovieDetails.adult ? 'Yes' : 'No'}</p>
                        </div>
                        <div>
                            <p className={`m-0`}>Release Date: {MovieDetails.release_date}</p>
                            <p>Popularity: {MovieDetails.popularity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
