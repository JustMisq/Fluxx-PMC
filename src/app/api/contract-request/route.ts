export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    console.log("Contract request received:", { organization: body.organization, type: body.type });
    console.log("Webhook URL configured:", !!webhookUrl);

    if (!webhookUrl) {
      console.error("Discord webhook URL not configured");
      return Response.json(
        { error: "Discord webhook not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Format the message for Discord
    const embed = {
      title: "New Contract Request",
      color: 0xE63946, // Brand red color
      fields: [
        {
          name: "Organization",
          value: body.organization || "N/A",
          inline: true,
        },
        {
          name: "Contact",
          value: body.contact || "N/A",
          inline: true,
        },
        {
          name: "Contract Type",
          value: body.type || "N/A",
          inline: true,
        },
        {
          name: "Duration",
          value: body.duration || "N/A",
          inline: true,
        },
        {
          name: "Location",
          value: body.location || "N/A",
          inline: true,
        },
        {
          name: "Threat Level",
          value: body.threatLevel || "N/A",
          inline: true,
        },
        {
          name: "Team Size",
          value: body.teamSize || "N/A",
          inline: true,
        },
        {
          name: "Budget",
          value: body.budget || "N/A",
          inline: true,
        },
        {
          name: "Assets Needed",
          value: body.assets || "N/A",
          inline: false,
        },
        {
          name: "Mission Description",
          value: body.description || "N/A",
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "FLUXX PMC Contract Portal",
      },
    };

    console.log("Sending to Discord webhook...");

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    console.log("Discord response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Discord webhook error:", response.status, errorText);
      return Response.json(
        { error: "Failed to send contract request to Discord" },
        { status: 500 }
      );
    }

    console.log("Contract request sent successfully");
    return Response.json({ success: true, message: "Contract request received" });
  } catch (error) {
    console.error("Contract request error:", error);
    return Response.json(
      { error: "Internal server error: " + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
}
