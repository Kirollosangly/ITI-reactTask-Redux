import React, { useEffect } from 'react'
import Movies from '../Movies/Movies'
// import style from './home.module.css'
import { v4 as uuid } from 'uuid';
import { getMoviesAction } from '../../MainRedux/Actions/reducersActions';
import { useDispatch, useSelector } from 'react-redux';



export default function Home() {
    const { sendMovies } = useSelector(state => state.home)
    const dispatch = useDispatch()

    const getMovies = () => {
        getMoviesAction(dispatch);
    }

    useEffect(() => {
        getMovies();
    }, [])


    return <>
        <div className={`overflow-hidden`}>
            <div className="container">
                <div className="row pb-4">
                    {sendMovies.map((oneMovie) => {
                        return <div className='col-md-3 g-2' key={uuid()}>
                            <Movies sendOneMovie={oneMovie} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}
