import React from "react";

import './index.css'
const Auth = (props) =>  {

/*    const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
    const accessKey = 'wdNn-PaVrpGbxNb07igZx_c2D-f8ux2_1LTZb-uyA6U';
    const secret = 'vlJy_e3ElNhZFQntKWkm653HgKv0JpU1dj1Ln7NOB64';
    const code = `tergopE5VPB8n18Uj6JDdXGAPDDSqEFIzVZrDKBgO0Y`;
    const grant_type = 'authorization_code'
    const url = 'https://unsplash.com/oauth/token';

    useEffect(()=>{
        fetch (url,{
            method:'POST',
            headers:{
                'client_id':accessKey,
                'client_secret':secret,
                'redirect_uri':redirectUri,
                'code':'Bsb2UfxtAHZT4EXcBC_f4ujTseQA3eH3IruMYaYDd38',
                'grant_type':'authorization_code'
            }
        }).then(res => res.json())
            .then(res => console.log(res))
    },[])*/

    return(
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-guts">
                    <p>something</p>
                    <button onClick={()=> props.history.goBack()}>back</button>
                </div>
            </div>
        </div>

    );
}

export default Auth;