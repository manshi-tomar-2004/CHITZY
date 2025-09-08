import { config } from "dotenv";
import { connectionDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  
  
  {
    email: "olivia.miller@example.com",
    fullName: "Vihaan",
    password: "123456",
    profilePic: "https://www.shutterstock.com/image-photo/profile-picture-young-handsome-man-260nw-1795243888.jpg",
  },
  {
    email: "sophia.davis@example.com",
    fullName: "Ira",
    password: "123456",
    profilePic: "https://www.shutterstock.com/image-photo/head-shot-portrait-smiling-asian-260nw-1859264800.jpg",
  },
  {
    email: "ava.wilson@example.com",
    fullName: "Atharv",
    password: "123456",
    profilePic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    email: "isabella.brown@example.com",
    fullName: "Ishuu",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    email: "mia.johnson@example.com",
    fullName: "Trisha",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/e7/62/49/e7624936539840043bebf62015ec6d30.jpg",
  },
  {
    email: "charlotte.williams@example.com",
    fullName: "Vanya",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXRsEwpFFX0OKKI2dQwdnS3hsLq_2Bogf2g&s",
  },
  {
    email: "amelia.garcia@example.com",
    fullName: "Hriday",
    password: "123456",
    profilePic: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
  },

  // Male Users
  {
    email: "james.anderson@example.com",
    fullName: "Nitin",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhtdO_3HLpDMCdrlnK9AjcBcHFMKy7lt0rA&s",
  },
  {
    email: "william.clark@example.com",
    fullName: "William Clark",
    password: "123456",
    profilePic: "https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg",
  },
  {
    email: "benjamin.taylor@example.com",
    fullName: "Neha",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkf-5bT5uJNXvq_wpQCCFQRkZr6cOmg45Yw&s",
  },
  {
    email: "lucas.moore@example.com",
    fullName: "Ruhii",
    password: "123456",
    profilePic: "https://static.vecteezy.com/system/resources/previews/009/354/848/non_2x/female-character-young-girl-people-profile-perfect-for-social-media-and-business-presentations-user-interface-ux-graphic-and-web-design-applications-and-interfaces-illustration-vector.jpg",
  },
  
];

const seedDatabase = async () => {
  try {
    await connectionDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();