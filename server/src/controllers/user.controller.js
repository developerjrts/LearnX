
export const getUser = async(req, res) => {
    try {

        const user = req.user;

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        };

        res.status(200).json({
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: "Something went wrong."
        })
    }
}