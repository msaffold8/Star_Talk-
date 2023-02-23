const API_URL = "http://localhost:3001";

const chatbot = async (input, name) => {
  const response = await fetch(`${API_URL}/chatbot?name=${name}`, {
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
