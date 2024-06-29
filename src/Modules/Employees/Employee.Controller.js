import EmployeeModel from "../../../DB/Model/Employee.Model.js";
import cloudinary from '../../Services/Cloudinary.js'


export const createEmployee = async (req, res) => {
  try {
    const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path, {
        folder : `${process.env.APP_NAME}/employees`
    })
    const newEmployee = await EmployeeModel.create({...req.body, image: {secure_url, public_id}})
    
    res.status(201).json(newEmployee);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error});
   

  }
};

export const getAllEmployees = async (req, res) => {
    try {
      const employees = await EmployeeModel.find(); // جلب جميع الموظفين من قاعدة البيانات
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  