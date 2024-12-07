import bcrypt from "bcrypt";

export default function checkPassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
