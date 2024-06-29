import { roles } from "../../Middlware/Auth.js"

    export const endPoint = {
    create: [roles.Admin],
    getAlls: [roles.Admin],
    getActive: [roles.User],
    update: [roles.Admin],
    specific: [roles.User, roles.Admin]

}