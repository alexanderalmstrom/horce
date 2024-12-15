import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const secret = new TextEncoder().encode(
  z
    .string({
      message: "Secret is required",
    })
    .parse(process.env.SECRET),
);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    path: "/",
  },
  duration: 24 * 60 * 60 * 1000, // 1 day
};

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(secret);
}

export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, secret, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession({
  userId,
  role,
}: {
  userId: string;
  role: string;
}) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, role, expires });

  cookies().set({
    ...cookie.options,
    name: cookie.name,
    value: session,
    sameSite: "lax",
    expires,
  });

  redirect("/dashboard");
}

export async function verifySession() {
  const sessionCookie = cookies().get(cookie.name)?.value;

  if (!sessionCookie) {
    redirect("/login");
  }

  const session = await decrypt(sessionCookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return {
    userId: session.userId,
  };
}

export async function deleteSession() {
  cookies().delete(cookie.name);
  redirect("/login");
}
