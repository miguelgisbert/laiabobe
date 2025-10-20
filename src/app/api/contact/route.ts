import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { nom, telefon, email, missatge } = await request.json();

    // Validació bàsica
    if (!nom || !email || !missatge) {
      return NextResponse.json(
        { error: "Nom, email i missatge són obligatoris" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "contactar@laiabobe.com",
      to: "contactar@laiabobe.com",
      replyTo: email,
      subject: `Nou missatge de contacte de ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #fe8873;">Nou missatge de contacte</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${telefon ? `<p><strong>Telèfon:</strong> ${telefon}</p>` : ""}
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p><strong>Missatge:</strong></p>
            <p style="white-space: pre-wrap;">${missatge}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Aquest missatge s'ha enviat des del formulari de contacte de laiabobe.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Error enviant el missatge" },
      { status: 500 }
    );
  }
}
