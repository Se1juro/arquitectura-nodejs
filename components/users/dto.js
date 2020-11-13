const single = (resource,authUser)=>({
    id:resource._id,
    username:resource.username,
    email:resource.email
})
const multiple = (resource,authUser)=>(
    resource.map((resource)=>single(resource,authUser))
)
module.exports={
    single,
    multiple
};