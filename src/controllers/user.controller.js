import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../Models/user.model.js";

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

  // Get the user details from frontend
  const { userName, email, fullName, password } = req.body;
  console.log("email:", email);

  // Validation - not empty
  if (
    [userName, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new apiError(400, "All fields required ");
  }

  // is user already exists
  const exixtedUser = User.findOne({
    $or: [{ userName }, { email }],
  });

  if (exixtedUser) {
    throw new apiError(409, " User with email and userName already exists");
  }

  // images, avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImage = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
      throw new apiError(400, "Avatar file is required")
  }

  // upload them on cloudinary
});

export { registerUser };
