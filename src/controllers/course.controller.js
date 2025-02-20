const createCourse = async (req,res,next) => {
    res.send('create')
}

const updateCourse = async (req,res,next) => {
    res.send('update')
}
const deleteCourse = async (req,res,next) => {
    res.send('delete')
}

module.exports = {
    createCourse,
    updateCourse,
    deleteCourse
}