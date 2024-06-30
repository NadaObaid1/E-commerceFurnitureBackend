import UserModel from "../../../DB/Model/User.Model.js";

export const updateProfile = async (req, res) => {
  try {
    const { userName, age, phone, address } = req.body;
    const userId = req.params.id;

    console.log("Updating profile for user ID:", userId);

    const updatedProfile = await UserModel.findByIdAndUpdate(
      userId,
      { userName, age, phone, address },
      { new: true }
    );

    if (updatedProfile) {
      res.status(200).json(updatedProfile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    console.log("Fetching profile for user ID:", userId);

    const profile = await UserModel.findById(userId);

    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
