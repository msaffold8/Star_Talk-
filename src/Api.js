const API_URL = "http://localhost:3001/chatbot?name=";

const chatbot = async (input) => {
  const response = await fetch(`${API_URL}/chatbot`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: input,
    }),
  });
  const json = await response.json();
  return json.response;
};


export { chatbot };
