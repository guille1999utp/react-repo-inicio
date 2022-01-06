const sitioUrl = 'http://localhost:4000';
export const fetchstoken = async (endpoint, data, method = 'GET') =>{
const url = `${ sitioUrl }/${ endpoint }`;
    
        if ( method === 'GET' ) {
            const resp = await fetch( url );
            return await resp.json();
        } else {
            const resp = await fetch( url, {
                method,
                
                headers: {
                    'Content-type': 'application/json'
                },
                
                body: JSON.stringify( data )
            })
    
            return await resp.json();
        }
    
    }
    
    
    export const fetchCToken = async( endpoint, data, method = 'GET',limit = 10 ) => {
    
        const url = `${ sitioUrl }/${ endpoint }`;
        const token = localStorage.getItem('token') || '';
    
        if ( method === 'GET' ) {
            const resp = await fetch( url, {
                headers: {
                    'x-token': token,
                    'limit': limit
                }
            });
            return await resp.json();
        } else {
            const resp = await fetch( url, {
                method,
                headers: {
                    'Content-type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify( data )
            })
    
            return await resp.json();
        }
    
    }