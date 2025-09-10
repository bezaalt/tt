import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const car = String(formData.get("car") || "");
    const message = String(formData.get("message") || "");

    if (!name || !phone || !car || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO || process.env.SMTP_USER || "";
    await transporter.sendMail({
      from: `Shark Wraps Website <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New Lead from ${name} (${phone})`,
      text: `Name: ${name}\nPhone: ${phone}\nCar: ${car}\nMessage: ${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
