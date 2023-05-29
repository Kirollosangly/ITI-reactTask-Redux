import { useNavigate, useParams } from 'react-router-dom'
import style from './updatemovie.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneMovie, handleUpdateChange, handleUpdateSubmit } from './../../MainRedux/Actions/reducersActions';


export default function UpdateMovie() {
    const { MovieDetails } = useSelector(state => state.movie);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const innderHandleChange = (e) =>{
        handleUpdateChange(e.target, dispatch)
    }

    const innerHandleSubmit = (event) =>{
        event.preventDefault();
        handleUpdateSubmit(MovieDetails, dispatch)
        navigate('/home');
    }


    useEffect(() => {
        getOneMovie(id, dispatch);
    },[])


    return <>
        <div className={`${style.mainBg} d-flex justify-content-center align-items-start`}>
            <form onSubmit={innerHandleSubmit} className={`w-100 pt-5`}>
                <div className={`w-50 mx-auto`}>
                    <label className={`text-white fs-5`} htmlFor="title">Title</label>
                    <input type="text" name="title" value={MovieDetails?.title} id='title' className={`form-control my-2`} onChange={innderHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="overview">Overview</label>
                    <input type="text" name="overview" value={MovieDetails?.overview} id='overview' className={`form-control my-2`} onChange={innderHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="video">Video</label>
                    <input type="text" name="video" value={MovieDetails?.video ? 'Yes' : 'No'} id='video' className={`form-control my-2`} onChange={innderHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="adult">Adult</label>
                    <input type="text" name="adult" value={MovieDetails?.adult ? 'Yes' : 'No'} id='adult' className={`form-control my-2`} onChange={innderHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="popularity">Popularity</label>
                    <input type="text" name="popularity" value={MovieDetails?.popularity} id='popularity' className={`form-control my-2`} onChange={innderHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="releaseDate">Release Date</label>
                    <input type="date" name="releaseDate" value={MovieDetails?.release_date} id='releaseDate' className={`form-control my-2`} onChange={innderHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="image">Image</label>
                    <input type="text" name="image" value={`https://image.tmdb.org/t/p/w500/${MovieDetails?.poster_path}`} id='image' className={`form-control my-2`} onChange={innderHandleChange} />
                </div>
                <div className='text-center my-4'>
                    <button type='submit' className='btn btn-primary py-2 px-4'>Update Movie</button>
                </div>
            </form>
        </div>
    </>
}
