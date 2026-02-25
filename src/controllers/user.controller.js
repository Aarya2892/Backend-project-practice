import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: "ok",
  // });
  /*Steps
  1. Get users details from front end
  2. validation - not empty
  3. check if user is already exists: username, email
  4. check for images, check foe avatar
  5. upload them to cloudinary, avatar
  6. create user object  - create entry in db
  7. remove password and refresh token field from response
  8. check for user creation
  9. response res
  */

  const { userName, email, fullName, password } = req.body;
  console.log("email:", email);
});

export { registerUser };
