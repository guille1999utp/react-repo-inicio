
export const UploadPhoto = async (file) =>{

    const cloudrul = 'https://api.cloudinary.com/v1_1/dmgfep69f/upload';

    const form = new FormData();
    form.append('upload_preset','proyecto-react');
    form.append('file',file);
  
    try {
        const res = await fetch(cloudrul, {
        method: 'POST',
        body: form
        })
        if(res.ok){
            const clouurl = await res.json();
            console.log(cloudrul)
            return clouurl;
        }else {
            throw await res.json();
        }
    } catch (error) {
 throw error 
   }

}