import AuthRouter from './src/Modules/Auth/Auth.Router.js'
import connectDb from './DB/Connection.js'
import EmployeeRouter from './src/Modules/Employees/Employee.Router.js';
import ProductRouter from './src/Modules/Products/Products.Router.js'
import ProfileRouter from './src/Modules/Profile/Profile.Router.js'
import CartRouter from './src/Modules/Cart/Cart.Router.js'
import FavoriteRouter from './src/Modules/Favorite/Favorite.Router.js'
import SuggestedDecorationsRouter from './src/Modules/SuggestedDecorations/SuggestedDecorations.Router.js'
import CatogoriesRouter from './src/Modules/Catogories/Catogories.Router.js'


const initApp =(app, express)=>{
    connectDb()
    app.use(express.json())
    app.get("/", (req, res) =>{
        return res.status(200).json({message:"welcome"})
    })

    app.use("/auth", AuthRouter)
    app.use("/employees", EmployeeRouter)
    app.use("/products", ProductRouter)
    app.use("/profiles", ProfileRouter)
    app.use("/cart", CartRouter)
    app.use("/favorite", FavoriteRouter)
    app.use("/SuggestedDecorations", SuggestedDecorationsRouter)
    app.use("/Catogories", CatogoriesRouter)

    app.get("*", (req, res) =>{
        return res.status(500).json({message:"page not found"})
    })
    

}
export default initApp 

