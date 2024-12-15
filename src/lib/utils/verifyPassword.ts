import bcrypt from "bcrypt";

export default function verifyPassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
