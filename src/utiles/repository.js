import {api,apiGeodecode} from './baseUrl';

const geoDecode=async (lat,long)=>{
   return await apiGeodecode.get('/reverse?format=json&lat='+lat+'&lon='+long)
  }
 

  const login =async (data)=>{
   return await api.post('/login',data) 
}
const register =async (data)=>{
   return await api.post('/register',data) 
}

//Category API
const getCategories =async ()=>{
   return await api.get('/getCategories') 
}
const add_category =async (data)=>{
   return await api.post('/add_category',data) 
}
const edit_category=async (data)=>{
   return await api.post('/edit_category',data) 
}
const delete_category =async (data)=>{
   return await api.post('/delete_category',data) 
}

//Blog API
 const edit_blog_category =async (data)=>{
    return await api.post('/edit_blog_category',data) 
 }
 const delete_blog_category   =async (data)=>{
    return await api.post('/delete_blog_category',data) 
 }
 const add_blog_category   =async (data)=>{
    return await api.post('/add_blog_category',data) 
 }
 const get_blog_categories  =async ()=>{
    return await api.get('/get_blog_categories') 
 }

 const get_blogs  =async ()=>{
    return await api.get('/get_blogs') 
 }
 const add_blog  =async (data)=>{
    return await api.post('/edit_blog',data) 
 }
 const delete_blog=async (data)=>{
    return await api.post('/delete_blog',data) 
 }
 const edit_blog=async (data)=>{
    return await api.post('/edit_blog',data) 
 }
 const getexclusive=async (data)=>{
    return await api.get('/getExclusiveProducts',data) 
 }

 
 const productsFilter=async (data)=>{
  return await api.post('/productsFilter',data)
 }


export const repository= {
    geoDecode,
    getCategories,
    add_category,
    edit_category,
    delete_category,

    edit_blog_category,
    delete_blog_category,
    add_blog_category,
    get_blog_categories,
    get_blogs,
    add_blog,
    delete_blog,
    edit_blog,
    
    productsFilter,
    login,
    register,
    getexclusive

}