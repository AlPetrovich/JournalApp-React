
export const fileUpload = async( file ) => {
    if (!file) throw new Error('No hay archivo para subir');
    //peticion http
    const cloudUrl = 'https://api.cloudinary.com/v1_1/djj1a10n2/upload';
    const formData = new FormData();
    //body de formData
    formData.append('upload_present','react-journalv2');
    formData.append('file', file);

    try {
        //post
        const resp = await fetch( cloudUrl, {
            method: "POST",
            body: formData
        });

        console.log(resp);
        if(!resp.ok) throw new Error('No se pudo subir imagen')

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}



