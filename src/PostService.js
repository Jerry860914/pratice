import axios from 'axios';



class PostService {
    //Get post
    static getPosts(url) {
        return  new Promise( (resolve, reject) =>{
            try{
                
                const res =  axios.get(url);
                //const data = res.data;

                resolve(
                    res
                );
            }catch(err){
                reject(err);
            }
        });
    }


    //Delete post


 
    
}

export default PostService;