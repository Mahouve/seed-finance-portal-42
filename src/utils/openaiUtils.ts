export const queryOpenAI = async (messages: Array<{ role: string; content: string }>) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "Tu es un expert en finance qui aide les utilisateurs à comprendre les services de SEED Finance et répond à leurs questions de manière professionnelle."
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Erreur lors de l'appel à OpenAI:", error);
    throw new Error("Impossible de communiquer avec l'assistant pour le moment. Veuillez réessayer plus tard.");
  }
};