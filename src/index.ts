import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Inserting Data
async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
  });

  console.log(res);
}

insertUser("email@gmail.com", "password", "firstname", "lastname");

// Updating Data

interface UpdatePara {
  firstName: string;
  lastName: string;
}

async function updateUser(email: string, { firstName, lastName }: UpdatePara) {
  const res = await prisma.user.update({
    where: {
      email,
    },

    data: {
      firstName,
      lastName,
    },
  });

  console.log(res);
}

updateUser("email@gmail.com", { firstName: "somu", lastName: "trivedi" });

// Delete Data

async function deleteUser(email: string) {
  const res = await prisma.user.delete({
    where: {
      email,
    },
  });

  // In Prisma, when you delete a record using delete it returns that record as a response
  console.log("User deleted successfully", res);
}

deleteUser("email@gmail.com");
