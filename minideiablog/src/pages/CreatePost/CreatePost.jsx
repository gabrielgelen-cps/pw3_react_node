import { useState } from 'react';
import banner from "../../../public/banner_home.png"
import style from './CreatePost.module.css'
// import { useInsertDocument } from '../../hooks/useInsertDocument'
// import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [body, setBody] = useState();
    const [tags, setTags] = useState();
    const [formError, setFormErrors] = useState();
    // const { user } = useAuthValue();

    return (
        <>
            <div>
                <h1>Suas novas Ideias</h1>
                <img src={banner} alt="Banner do Site" />
            </div>
        </>
    )
}

export default CreatePost