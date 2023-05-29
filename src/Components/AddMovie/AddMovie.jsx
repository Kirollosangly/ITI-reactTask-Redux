import React from 'react';
import style from './addMovie.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, handleSubmit } from './../../MainRedux/Actions/reducersActions';
import { useNavigate } from 'react-router-dom';


export default function AddMovie() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { newMovie } = useSelector(state => state.addmovie)
    const innerHandleChange = (e) => {
        handleChange(e.target, dispatch)
    }

    const innerHandleSubmit = (event) => {
        event.preventDefault();
        handleSubmit(newMovie, dispatch)
        navigate('/home')
    }
    return <>
        <div className={`${style.mainBg} d-flex justify-content-center align-items-start`}>
            <form onSubmit={innerHandleSubmit} className={`w-100 pt-5`}>
                <div className={`w-50 mx-auto`}>
                    <label className={`text-white fs-5`} htmlFor="title">Title</label>
                    <input type="text" name="title" id='title' className={`form-control my-2`} onChange={innerHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="overview">Overview</label>
                    <input type="text" name="overview" id='overview' className={`form-control my-2`} onChange={innerHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="video">Video</label>
                    <input type="text" name="video" id='video' className={`form-control my-2`} onChange={innerHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="adult">Adult</label>
                    <input type="text" name="adult" id='adult' className={`form-control my-2`} onChange={innerHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="popularity">Popularity</label>
                    <input type="text" name="popularity" id='popularity' className={`form-control my-2`} onChange={innerHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="releaseDate">Release Date</label>
                    <input type="date" name="releaseDate" id='releaseDate' className={`form-control my-2`} onChange={innerHandleChange} />

                    <label className={`text-white fs-5`} htmlFor="image">Image</label>
                    <input type="file" name="image" id='image' className={`form-control my-2`} onChange={innerHandleChange} />
                </div>
                <div className='text-center my-4'>
                    <button type='submit' className='btn btn-primary py-2 px-4'>Add Movie</button>
                </div>
            </form>

        </div>
    </>
}
