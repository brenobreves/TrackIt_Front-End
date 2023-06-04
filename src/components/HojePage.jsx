import styled from 'styled-components';
import React, { useContext , useState } from 'react';
import { AuthContext } from '../providers/Auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function HojePage(){
    const {user, setUser} = useContext(AuthContext);
    console.log(user);
    const [postin, setPostin] = useState(false);
    const navigate = useNavigate();

    return(
        <>          
        </>
    )
}

export default HojePage;
