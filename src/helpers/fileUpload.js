//Helper que se va a encargar de la subida del archivo

export const fileUpload = async ( file ) =>{

    const cloudUrl = 'https://api.cloudinary.com/v1_1/djj1a10n2/upload';

    const formData = new FormData();
    formData.append('upload_present', 'react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch( cloudUrl, {
            method : 'POST',
            body: formData
        });

        if( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            console.log("error de cloudDin")
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }

    //return url de la imagen
}